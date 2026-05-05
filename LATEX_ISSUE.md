# LaTeX 수식 렌더링 이슈 해결 기록

## 문제 상황

Docusaurus 3.10.0 환경에서 수식 표기를 위해 `remark-math` + `rehype-katex` 플러그인을 도입했으나, 모든 수식이 포함된 페이지에서 빌드 오류 발생.

```
ERROR in ./docs/.../rsa.md
Cause: Could not parse expression with acorn
"ruleId": "acorn",
"source": "micromark-extension-mdx-expression"
```

---

## 시도한 조치

### 1차 시도 — 인라인 수식의 `{}` 제거
- **가설:** 인라인 수식 `$\pmod{\phi(n)}$` 안의 `{}` 가 JSX 파서와 충돌
- **조치:** 문제가 되는 인라인 수식을 블록 수식 `$$...$$` 으로 분리
- **결과:** ❌ 실패 — `$$...$$` 블록 내부의 `{` 도 동일 오류 발생

### 2차 시도 — `\pmod{}` → `\bmod`, `\text{}` 제거
- **가설:** 특정 LaTeX 명령(`\pmod`, `\text`)만 문제
- **조치:** 중괄호 없는 명령으로 대체 (`\bmod`, 레이블 외부 이동)
- **결과:** ❌ 실패 — 다른 위치의 `{}` 에서 동일 오류 반복

---

## 근본 원인

### MDX v3 표현식 파서와 remark-math의 실행 순서 충돌

```
[Docusaurus 빌드 파이프라인]

① micromark 토크나이저 실행
   └─ mdx-extension-mdx-expression 등록
      └─ 문서 전체에서 { } 를 JSX 표현식으로 파싱 시도  ← 여기서 충돌
      
② remark 플러그인 실행  (← remark-math 는 여기서 동작)
   └─ math 노드 변환 (이미 늦음)
   
③ rehype 플러그인 실행
   └─ rehype-katex → KaTeX 렌더링
```

`remark-math`는 **remark 레벨**에서 동작하지만, MDX의 `{}`  표현식 파서는 **micromark 레벨**(더 이른 단계)에서 실행됩니다.

`future: { v4: true }` 옵션이 MDX v3를 완전히 활성화하면서 이 파서가 `$$...$$` 블록 내부까지 스캔하게 되어, `\pmod{n}`, `\text{...}`, `\frac{a}{b}` 등 **중괄호를 사용하는 모든 LaTeX 명령이 차단**됩니다.

---

## 결론 및 적용 규칙

이 프로젝트(`future: { v4: true }` 활성화)에서는 LaTeX 수식 표기를 사용하지 않습니다.

### 대체 표기 방식

| 표현 대상 | LaTeX (사용 불가) | 대체 표기 |
|---------|-----------------|---------|
| 변수·수식 | `$C = M^e \pmod{n}$` | `` `C = M^e mod n` `` |
| 그리스 문자 | `$\phi$`, `$\equiv$` | `φ`, `≡` (유니코드 직접 입력) |
| 복잡한 수식 | `$$e \times d \equiv 1 \pmod{\phi(n)}$$` | `` `e × d ≡ 1 (mod φ(n))` `` |
| 분수 | `$\frac{a}{b}$` | `a/b` |
| 텍스트 레이블 포함 | `$$\text{Speedup}(S) = \frac{1}{(1-P)+\frac{P}{N}}$$` | 펜스 코드 블록(` ``` `) |
| 인라인 변수명 | `$S$`, `$P$`, `$N$`, `$(1-P)$` | `` `S` ``, `` `P` ``, `` `N` ``, `` `(1-P)` `` |

### `docusaurus.config.ts` 에 추가하지 말 것

```ts
// ❌ 추가하지 말 것
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

stylesheets: [{ href: 'katex.min.css' }],

docs: {
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
}
```

### `\t` 이스케이프 주의

`\text{...}` 명령을 일부 편집기가 `\t`(탭 문자)로 변환하는 경우가 있습니다.  
파일에 저장된 내용이 `	ext{...}` 형태로 깨져 있으면 acorn 파서가 동일한 오류를 냅니다.  
수식 블록 전체를 코드 블록으로 대체하면 이 문제도 함께 해소됩니다.

---

## 실제 수정 사례

### `amdahls-law.md` (2026-05-06)

**오류 위치:** `docs/05-cloud-infrastructure/03-infrastructure-security/amdahls-law.md` 37번째 줄

**문제 코드:**
```
$$
	ext{Speedup}(S) = \frac{1}{(1-P) + \frac{P}{N}}
$$

- $S$: ...
- $P$: ...
- $N$: ...
- $(1-P)$: ...
```

**수정 후:**
````
```
Speedup(S) = 1 / ((1 - P) + P/N)
```

- `S`: ...
- `P`: ...
- `N`: ...
- `(1-P)`: ...
````

---

## 참고

- 관련 이슈: [micromark-extension-mdx-expression — Could not parse expression](https://github.com/micromark/micromark-extension-mdx-expression/tree/main/packages/micromark-extension-mdx-expression#could-not-parse-expression-with-acorn)
- 영향 범위: Docusaurus 3.x + `future.v4: true` + `remark-math@6` 조합

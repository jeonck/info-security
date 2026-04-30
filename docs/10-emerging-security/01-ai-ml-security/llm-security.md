---
title: LLM 보안 (OWASP Top 10 for LLM)
sidebar_label: LLM 보안
sidebar_position: 1
---

# LLM 보안 (OWASP Top 10 for LLM)

## I. 생성형 AI 시대의 새로운 보안 위협, LLM 보안의 개요

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'edgeLabelBackground': '#fff' }}}%%
flowchart LR
    A["비인가 프롬프트 (Untrusted)"] -- "LLM 가드레일 (Filtering)" --> B["안전한 응답 (Trusted)"]
    style A fill:#f9f9f9,stroke:#333,stroke-width:1px
    style B fill:#e1f5fe,stroke:#01579b,stroke-width:1px
```

**정의**: 대규모 언어 모델( **LLM** ) 애플리케이션을 대상으로 하는 프롬프트 주입, 데이터 유출 등 전용 보안 취약점을 탐지하고 차단하기 위한 다층적 방어 체계  

**핵심 특성 및 위협**:  
( **비결정적 위협** ) 입력값에 따라 결과가 가변적인 모델의 특성을 악용한 우회 공격(프롬프트 인젝션 등) 발생  
( **공격 표면 확장** ) 외부 데이터( **RAG** ) 및 플러그인 연동을 통한 간접 프롬프트 주입( **Indirect Injection** ) 위협 증대  
( **데이터 보호** ) 모델 학습 데이터 내 민감 정보가 생성 과정을 통해 외부로 노출되는 데이터 유출( **Disclosure** ) 방어 필요  

---

## II. LLM 보안 위협 아키텍처 및 주요 취약점 항목

### 가. LLM 애플리케이션 위협 모델링 (Threat Modeling)

```mermaid
flowchart LR
    U["사용자\nUser"] -->|"Prompt 입력"| G["입력 가드레일\nInput Guardrails"]
    G -->|"필터링"| L["LLM 모델\n처리"]
    L -->|"Tool Call"| P["Plugin / RAG\n외부 도구"]
    P -->|"데이터 반환"| L
    L -->|"출력"| O["출력 검증\nOutput Filter"]
    O -->|"응답"| U

    T1["⚠ Prompt Injection\nLLM01"] -. "공격" .-> G
    T2["⚠ Indirect Injection\n(RAG 경유)"] -. "공격" .-> P
    T3["⚠ Data Disclosure\nLLM06"] -. "공격" .-> L
    T4["⚠ Insecure Output\nLLM02"] -. "공격" .-> O
```

> **핵심:** 사용자 입력(Prompt)부터 모델 처리, 외부 도구(Plugin/RAG) 연동 전 과정이 공격 접점임

---

### 나. OWASP Top 10 for LLM 주요 항목 및 대응 방안

| 순위 | 핵심 항목 | 상세 설명 및 대응 방안 |
|------|----------|----------------------|
| LLM 01 | Prompt Injection | 조작된 입력으로 모델의 가드레일을 우회하거나 악의적 명령 수행 (Direct/Indirect) |
| LLM 02 | Insecure Output Handling | 모델 출력을 검증 없이 실행하여 XSS, SSRF 등 2차 공격 유도 (출력 필터링 필수) |
| LLM 06 | Sensitive Data Disclosure | 학습 데이터나 RAG를 통해 민감 정보가 유출되는 현상 (데이터 비식별화, PII 필터링) |
| 기타 | Training Data Poisoning | 학습 데이터에 악성 데이터를 주입하여 모델의 편향성이나 백도어 유발 |

---

## III. 안전한 LLM 서비스 구축을 위한 보안 전략

- **인간 중심 검증(HITL):** LLM의 출력을 신뢰하기 전 인간의 검토 단계를 포함하여 신뢰성 확보
- **LLM 가드레일(Guardrails) 적용:** 입력과 출력 단계에서 NeMo-Guardrails 등 보안 솔루션을 통한 실시간 필터링 체계 구축

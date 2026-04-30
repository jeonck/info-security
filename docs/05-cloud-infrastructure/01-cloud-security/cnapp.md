---
title: CNAPP (Cloud Native Application Protection Platform)
sidebar_label: CNAPP
sidebar_position: 4
---

# CNAPP (Cloud Native Application Protection Platform)

## I. 클라우드 보안 파편화의 해결사, CNAPP의 개요

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'edgeLabelBackground': '#fff' }}}%%
flowchart LR
    A["보안 도구 파편화"] -- "CSPM + CWPP 통합 플랫폼" --> B["클라우드 통합 가시성"]
    style A fill:#f9f9f9,stroke:#333,stroke-width:1px
    style B fill:#e1f5fe,stroke:#01579b,stroke-width:1px
```

**정의**: 가상머신, 컨테이너, 서버리스 등 클라우드 환경의 자산 설정 관리(CSPM)와 워크로드 보호(CWPP)를 하나로 통합한 클라우드 네이티브 보안 플랫폼

**필요성**:  
 (**보안 파편화 해결**) CSPM, CWPP 등 개별 솔루션의 통합을 통해 보안 사각지대 및 관리 복잡성 해소  
 (**연관 분석 강화**) 인프라 설정과 워크로드 위협을 결합 분석하여 실제 위험도가 높은 자산 우선 보호  
 (**라이프사이클 보호**) 개발(Artifact 스캔)부터 운영(Runtime)까지 클라우드 전 과정의 보안 가시성 확보  

---

## II. CNAPP의 핵심 구성 요소 및 통합 메커니즘

### 가. CNAPP을 구성하는 3대 핵심 기술 요소

- **CSPM** (설정 관리): 클라우드 인프라의 설정 오류 탐지 및 컴플라이언스 준수 모니터링
- **CWPP** (워크로드 보호): 실행 중인 컨테이너, VM의 취약점 방어 및 이상 행위 탐지
- **CI** / **CD Security** (Artifact 스캔): 소스코드(SAST), 오픈소스(SCA), IaC 설정 파일의 보안 약점 조기 식별

### 나. CNAPP의 주요 기능 및 특장점

| 기능 영역 | 세부 내용 | 기대 효과 |
|:---:|----------|----------|
| **Full Lifecycle** 통합 | 개발 단계의 스캔과 운영 단계의 런타임 보안 연결 | 보안 사각지대(Blind Spot) 제거 |
| 위험 우선순위 지정 | 설정 오류와 취약점을 연관 분석하여 실제 위협 선별 | 보안 운영 효율성(Risk Scoring) 증대 |
| **Agentless** 스캔 | 스냅샷 기반 분석으로 워크로드 성능 영향 최소화 | 유연한 확장성 및 운영 편의성 확보 |
| 가시성 통합 | 멀티 / 하이브리드 클라우드 자산의 통합 대시보드 제공 | 거버넌스 강화 및 신속한 의사결정 |

---

## III. CNAPP와 기존 개별 보안 솔루션(Siloed Tools) 비교

| 비교 항목 | 개별 보안 솔루션 (Point Solutions) | CNAPP (Integrated Platform) |
|----------|----------------------------------|---------------------------|
| **구조** | CSPM, CWPP 등 별도 구매 및 운영 | 단일 플랫폼 내 모든 보안 기능 통합 |
| **위험 분석** | 각 툴별로 독립적인 경보 발생 (Alert Fatigue) | 컨텍스트 기반 연관 분석(Contextual Analysis) |
| **보안 범위** | 특정 단계(개발 또는 운영)에 국한 | 코드에서 클라우드까지(Code to Cloud) 보호 |
| **운영 효율** | 툴 간 데이터 파편화로 대응 지연 | 통합 가시성 기반의 즉각적인 대응(SOAR 연계) |

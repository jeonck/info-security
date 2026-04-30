---
title: 클라우드 보안의 양대 축 (CSPM 및 CWPP)
sidebar_label: CSPM 및 CWPP
sidebar_position: 1
---

# 클라우드 보안의 양대 축 (CSPM 및 CWPP)

## I. 클라우드 복잡성 대응을 위한 CSPM과 CWPP의 개요

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'edgeLabelBackground': '#fff' }}}%%
flowchart LR
    A["클라우드 설정 오류"] -- "설정 감시 및 워크로드 보호" --> B["클라우드 인프라 안정성"]
    style A fill:#f9f9f9,stroke:#333,stroke-width:1px
    style B fill:#e1f5fe,stroke:#01579b,stroke-width:1px
```

**정의**: 클라우드 인프라의 구성 오류를 점검하는 CSPM과 가상머신(VM), 컨테이너 등 워크로드를 보호하는 CWPP의 통합 보안 체계

**필요성**:  
 (**설정 오류 방지**) 클라우드 오설정으로 인한 데이터 유출 사고를 방지하기 위한 지속적 모니터링 필요  
 (**워크로드 보호**) 컨테이너, 서버리스 등 가변적인 클라우드 실행 환경에 대한 실시간 위협 대응  
 (**컴플라이언스 대응**) 동적인 클라우드 자산에 대한 기술적 보안 표준 및 규제 준수 여부 상시 확인  

---

## II. CSPM과 CWPP의 핵심 기능 및 비교

### 가. CSPM(Cloud Security Posture Management)의 특징

**핵심 기능**:
- **설정 모니터링**: 스토리지(S3 등) 오픈 여부, IAM 권한 오남용 등 상시 점검
- **컴플라이언스 준수**: ISMS-P, NIST, CIS Benchmark 등 표준 가이드라인 준수 여부 자동 평가
- **자산 식별**: 관리되지 않는 '섀도우 클라우드' 자산의 자동 탐지 및 가시성 확보

### 나. CWPP(Cloud Workload Protection Platform)의 특징

**핵심 기능**:
- **취약점 관리**: 실행 중인 워크로드(VM, 컨테이너, 서버리스) 내 OS/App 취약점 스캔
- **런타임 보호**: 이상 행위 탐지(EDR 유사 기능), 안티-멀웨어, IPS 기능 수행
- **마이크로 세그멘테이션**: 워크로드 간의 통신(East-West 트래픽)을 가시화하고 세밀한 접근 제어 적용

---

## III. CSPM과 CWPP의 상세 비교

| 비교 항목 | CSPM (설정 관리) | CWPP (워크로드 보호) |
|----------|----------------|-------------------|
| 보안 대상 | Control Plane (인프라 설정, 서비스) | Data Plane (VM, 컨테이너, App) |
| 핵심 목적 | 구성 오류(Misconfiguration) 방지 | 침입 탐지 및 취약점 방어 |
| 주요 기술 | API 기반 스캔, 정책 엔진 | 에이전트 기반 또는 사이드카(Sidecar) 방식 |
| 관리 주체 | 클라우드 관리자, 보안 운영자 | 보안 운영자, 개발자(DevOps) |
| 상호 관계 | **'외부'**를 견고하게 함 (울타리 보안) | **'내부'**를 견고하게 함 (본체 보안) |

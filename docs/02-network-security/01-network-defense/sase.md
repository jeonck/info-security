---
title: SASE (Secure Access Service Edge)
sidebar_label: SASE
sidebar_position: 4
---

# SASE (Secure Access Service Edge)

## I. 네트워크와 보안의 클라우드 기반 융합, SASE의 개요

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'edgeLabelBackground': '#fff' }}}%%
flowchart LR
    A["네트워크 + 보안 (개별)"] -- "Cloud Native 융합" --> B["SASE (단일 플랫폼)"]
    style A fill:#f9f9f9,stroke:#333,stroke-width:1px
    style B fill:#e1f5fe,stroke:#01579b,stroke-width:1px
```

**정의**: SD-WAN 등의 네트워크 기능과 차세대 방화벽, CASB, ZTNA 등 보안 서비스를 단일 클라우드 플랫폼에서 제공하는 클라우드 네이티브 아키텍처  

**등장 배경**:  
( **경계 붕괴** ) 클라우드 확산 및 원격 근무 증가로 인한 기존 경계 기반 보안 모델의 한계  
( **네트워크 병목** ) 데이터센터 경유 방식(Backhauling)으로 인한 지연 시간 증가 및 성능 저하  
( **관리 복잡성** ) 개별 보안 솔루션의 파편화로 인한 통합 정책 관리 및 가시성 확보의 어려움  

---

## II. SASE의 핵심 구성 요소 및 개념도

### 가. SASE의 구성 요소와 기술 요소

```mermaid
flowchart LR
    U1["원격 사용자"] --> EDGE
    U2["지사 / 브랜치"] --> EDGE
    U3["모바일 기기"] --> EDGE

    EDGE["SASE\n클라우드 에지"] --> NET["SD-WAN\n지능적 경로 선택"]
    EDGE --> SEC["SSE 보안 서비스\nZTNA / CASB / SWG"]

    NET --> R1["퍼블릭 클라우드\nAWS / Azure / GCP"]
    SEC --> R2["SaaS 앱\nMicrosoft 365 등"]
    NET --> R3["데이터센터\n온프레미스"]
```

> **핵심:** 네트워크 경로를 최적화하는 네트워크 기술과 데이터 및 접근을 보호하는 보안 기술의 결합

---

### 나. 주요 구성 요소 상세

| 구분 | 주요 구성 기술 | 상세 설명 |
|------|-------------|---------|
| Network (SD-WAN) | 소프트웨어 정의 광대역망 | 애플리케이션 단위의 지능적 경로 선택 및 트래픽 가용성 확보 |
| Security (SSE) | ZTNA | 제로 트러스트 기반 접근 제어 |
| Security (SSE) | CASB | 클라우드 앱 가시성 및 통제 확보 |
| Security (SSE) | SWG | 안전한 웹 접속 보장 및 맬웨어 차단 |

---

## III. SASE와 기존 네트워크 보안 모델 비교

| 비교 항목 | 기존 모델 (Hub-and-Spoke) | SASE (Cloud Native) |
|----------|--------------------------|---------------------|
| 네트워크 구조 | 데이터센터 경유 (Backhauling) | 클라우드 에지(Edge) 직접 접속 |
| 보안 서비스 | 어플라이언스 기반 (Hardware) | 클라우드 서비스 기반 (SaaS) |
| 관리 편의성 | 개별 솔루션 각각 관리 (복잡) | 단일 정책 기반 통합 관리 (단순) |
| 성능/지연 | 병목 현상 발생 가능성 높음 | 분산된 에지 노드를 통한 저지연 |

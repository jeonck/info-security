---
title: DSPM (Data Security Posture Management)
sidebar_label: DSPM
sidebar_position: 5
---

# DSPM (Data Security Posture Management)

## I. 클라우드 데이터 가시성 확보의 핵심, DSPM의 개요

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'edgeLabelBackground': '#fff' }}}%%
flowchart LR
    A["파편화된 데이터"] -- "데이터 중심 리스크 관리" --> B["Shadow Data 식별 및 보호"]
    style A fill:#f9f9f9,stroke:#333,stroke-width:1px
    style B fill:#e1f5fe,stroke:#01579b,stroke-width:1px
```

**정의**: 클라우드 인프라 내 정형 / 비정형 데이터의 위치를 자동으로 탐지하고, 데이터의 민감도와 보안 위협을 분석하여 가시성을 제공하는 보안 기술

**필요성**:  
 (**섀도우 데이터 식별**) IT 부서의 통제를 벗어난 복제본, 테스트 DB 등 숨겨진 데이터 자산의 자동 탐지  
 (**민감도 기반 보호**) 데이터 자체의 민감도(개인정보 등)를 분류하고 중요도에 따른 차별화된 보안 적용  
 (**규제 준수 증명**) GDPR, ISMS-P 등 강화된 데이터 보호 규제에 대응하기 위한 지속적인 가시성 확보  

---

## II. DSPM의 주요 기능 및 아키텍처

### 가. DSPM의 4대 핵심 프로세스

- **데이터 탐지**(Discovery): 관리형 DB뿐만 아니라 객체 스토리지(S3 등), 비정형 데이터에 존재하는 데이터 자산을 자동으로 식별
- **데이터 분류**(Classification): AI / ML 기술을 활용하여 개인정보, 금융정보, 기업 기밀 등 데이터의 민감도를 분류
- **리스크 분석**(Assessment): 데이터에 접근 가능한 권한, 노출 경로(인터넷 공개 등), 암호화 여부를 분석하여 위험도 산출
- **지속적 모니터링 및 조치**: 데이터의 이동 경로(Lineage)를 추적하고 설정 오류 발생 시 자동 알림 및 대응

### 나. DSPM의 기술적 특장점

| 구분 | 주요 내용 | 특징 및 장점 |
|------|----------|------------|
| **Data-Centric** | 인프라 설정이 아닌 **'데이터 자체'**에 집중 | 데이터의 중요도에 따른 우선순위 대응 가능 |
| **Agentless** | 클라우드 API 및 스냅샷 기반 분석 | 운영 환경 성능 부하 제로 및 빠른 배포 |
| **Shadow Data** 탐지 | IT 부서가 모르는 복제본 / 테스트 DB 식별 | 데이터 방치로 인한 보안 사각지대 제거 |
| **Contextual Analysis** | 인프라 설정(CSPM)과 데이터 민감도 결합 | 실제 유출 위험이 높은 자산 위주로 관리 |

---

## III. DSPM과 기존 보안 솔루션(DLP, CSPM) 비교

| 비교 항목 | 기존 DLP (Data Loss Prevention) | CSPM (Posture Management) | DSPM (Data Posture) |
|----------|-------------------------------|---------------------------|---------------------|
| **보안 초점** | 데이터 유출 행위 차단 | 인프라 / 서비스 설정 오류 | 데이터 존재 및 리스크 관리 |
| **주요 대상** | 엔드포인트, 네트워크 경계 | 클라우드 리소스 (S3, EC2 등) | 데이터 자산 (DB, 파일 등) |
| **작동 방식** | 규칙 기반(Regex) 실시간 감시 | API 기반 설정 점검 | 스캔 기반 데이터 분석 |
| **핵심 가치** | 유출 방지 (Prevention) | 컴플라이언스 준수 | 데이터 가시성 및 거버넌스 |

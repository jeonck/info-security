---
title: DevSecOps (CI/CD 통합 보안 및 Shift-Left)
sidebar_label: DevSecOps
sidebar_position: 1
---

# DevSecOps (CI/CD 통합 보안 및 Shift-Left)

## I. 보안 내재화를 통한 신속한 서비스 제공, DevSecOps의 개요

**정의:** 소프트웨어 개발 생명주기(SDLC) 전 과정에 보안 활동을 자동화하여 통합함으로써 보안을 공동의 책임으로 다루는 문화 및 방법론

**Shift-Left Security**: 보안 검토를 SDLC의 후반부(운영)에서 **전반부**(계획/설계/개발)로 이동시켜 결함을 조기에 식별하고 조치하는 전략

---

## II. CI/CD 파이프라인 단계별 보안 자동화 및 주요 기술

### 가. 단계별 보안 활동 및 자동화 도구

| SDLC 단계 | 주요 보안 활동 (Security Activity) | 자동화 기술 및 도구 |
|:---:|-----------------------------------|-------------------|
| **Plan** / **Design** | 위협 모델링(Threat Modeling), 보안 요구사항 정의 | ThreatModeler, IriusRisk |
| **Code** / **Commit** | 소스코드 정적 분석, 시큐어 코딩 준수 확인 | SAST (SonarQube), Secrets 스캔 |
| **Build** / **Test** | 오픈소스 라이브러리 분석, 컨테이너 이미지 스캔 | SCA (Snyk, Black Duck), SBOM 생성 |
| **Deploy** / **Release** | 인프라 설정 오류 검증, 동적 분석 | IaC 스캐닝 (Checkov), DAST (ZAP) |
| **Operate** / **Monitor** | 실시간 위협 탐지 및 런타임 보호 | SIEM, RASP, CSPM, CWPP |

---

### 나. Shift-Left 구현을 위한 핵심 메커니즘

- **보안 게이트**(Security Gates): 각 단계에서 정의된 보안 기준(Threshold) 미달 시 배포를 자동 중단하는 품질 게이트 설정
- **Policy as Code**(PaC): 보안 정책을 코드로 관리하여 파이프라인 내에서 일관되게 검증 및 적용
- **피드백 루프 자동화:** 발견된 취약점을 개발자에게 실시간(IDE 플러그인 등)으로 전달하여 즉각적인 수정 유도

---

## III. DevSecOps와 전통적 보안 모델(Traditional Security) 비교

| 비교 항목 | 전통적 보안 모델 | DevSecOps (Shift-Left) |
|----------|----------------|------------------------|
| 보안 수행 시점 | 개발 완료 후 배포 직전 (일회성) | 전 과정 상시 통합 (Continuous) |
| 수행 주체 | 별도 보안 팀 (Silo) | 개발/운영/보안 공동 책임 |
| 수행 방식 | 수동 점검 및 보고서 위주 | 자동화 도구 및 파이프라인 기반 |
| 변경 대응 속도 | 느림 (보안 검토 시 병목 발생) | 빠름 (자동화된 검증으로 병목 제거) |

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  securitySidebar: [
    {
      type: 'category',
      label: '보안 기반 이론',
      link: {type: 'doc', id: 'foundations/index'},
      items: [
        {type: 'doc', id: 'foundations/cryptography/index', label: '암호학'},
        {type: 'doc', id: 'foundations/security-principles/index', label: '보안 원칙과 모델'},
        {type: 'doc', id: 'foundations/risk-management/index', label: '위험 관리'},
      ],
    },
    {
      type: 'category',
      label: '네트워크 보안',
      link: {type: 'doc', id: 'network-security/index'},
      items: [
        {type: 'doc', id: 'network-security/network-defense/index', label: '네트워크 방어'},
        {type: 'doc', id: 'network-security/wireless-security/index', label: '무선 보안'},
        {type: 'doc', id: 'network-security/protocol-security/index', label: '프로토콜 보안'},
      ],
    },
    {
      type: 'category',
      label: '시스템 보안',
      link: {type: 'doc', id: 'system-security/index'},
      items: [
        {type: 'doc', id: 'system-security/os-security/index', label: '운영체제 보안'},
        {type: 'doc', id: 'system-security/malware-analysis/index', label: '악성코드 분석'},
        {type: 'doc', id: 'system-security/vulnerability-management/index', label: '취약점 관리'},
      ],
    },
    {
      type: 'category',
      label: '애플리케이션 보안',
      link: {type: 'doc', id: 'application-security/index'},
      items: [
        {type: 'doc', id: 'application-security/web-security/index', label: '웹 보안'},
        {type: 'doc', id: 'application-security/api-security/index', label: 'API 보안'},
        {
          type: 'category',
          label: '시큐어 개발',
          link: {type: 'doc', id: 'application-security/secure-development/index'},
          items: [
            {type: 'doc', id: 'application-security/secure-development/software-supply-chain-security', label: '소프트웨어 공급망 보안'},
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '클라우드 & 인프라 보안',
      link: {type: 'doc', id: 'cloud-infrastructure/index'},
      items: [
        {type: 'doc', id: 'cloud-infrastructure/cloud-security/index', label: '클라우드 서비스 보안'},
        {type: 'doc', id: 'cloud-infrastructure/container-devsecops/index', label: '컨테이너 & DevSecOps'},
        {type: 'doc', id: 'cloud-infrastructure/infrastructure-security/index', label: '인프라 보안'},
      ],
    },
    {
      type: 'category',
      label: '아이덴티티 & 접근관리',
      link: {type: 'doc', id: 'identity-access-management/index'},
      items: [
        {type: 'doc', id: 'identity-access-management/authentication-authorization/index', label: '인증 & 인가'},
        {type: 'doc', id: 'identity-access-management/privileged-access-management/index', label: '특권 접근 관리 (PAM)'},
        {type: 'doc', id: 'identity-access-management/directory-federation/index', label: '디렉터리 & 페더레이션'},
      ],
    },
    {
      type: 'category',
      label: '보안 운영',
      link: {type: 'doc', id: 'security-operations/index'},
      items: [
        {type: 'doc', id: 'security-operations/soc-siem/index', label: 'SOC & SIEM'},
        {type: 'doc', id: 'security-operations/incident-response/index', label: '인시던트 대응'},
        {type: 'doc', id: 'security-operations/digital-forensics/index', label: '디지털 포렌식'},
      ],
    },
    {
      type: 'category',
      label: '공격 기법 & 침투 테스트',
      link: {type: 'doc', id: 'offensive-security/index'},
      items: [
        {type: 'doc', id: 'offensive-security/penetration-testing/index', label: '침투 테스트'},
        {type: 'doc', id: 'offensive-security/vulnerability-research/index', label: '취약점 연구'},
        {type: 'doc', id: 'offensive-security/redteam-ctf/index', label: '레드팀 & CTF'},
      ],
    },
    {
      type: 'category',
      label: '거버넌스 & 컴플라이언스',
      link: {type: 'doc', id: 'governance-compliance/index'},
      items: [
        {type: 'doc', id: 'governance-compliance/isms/index', label: '정보보안 관리체계 (ISMS)'},
        {type: 'doc', id: 'governance-compliance/regulations/index', label: '법규 & 규제'},
        {type: 'doc', id: 'governance-compliance/audit-certification/index', label: '감사 & 인증'},
      ],
    },
    {
      type: 'category',
      label: '신기술 보안',
      link: {type: 'doc', id: 'emerging-security/index'},
      items: [
        {type: 'doc', id: 'emerging-security/ai-ml-security/index', label: 'AI/ML 보안'},
        {type: 'doc', id: 'emerging-security/iot-ot-security/index', label: 'IoT/OT 보안'},
        {type: 'doc', id: 'emerging-security/blockchain-security/index', label: '블록체인 보안'},
      ],
    },
  ],
};

export default sidebars;

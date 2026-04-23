import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type CategoryItem = {
  icon: string;
  title: string;
  description: string;
  to: string;
};

const categories: CategoryItem[] = [
  {
    icon: '🔐',
    title: '기초·암호화',
    description: '암호화 알고리즘, CIA Triad, RSA, DH 키 교환, 양자 내성 암호(PQC) 등 보안의 수학적 기반',
    to: '/docs/foundations',
  },
  {
    icon: '🌐',
    title: '네트워크 보안',
    description: 'Zero Trust, SDP, SASE, IPSec, 네트워크 분리 등 경계 기반에서 분산 보안으로의 전환',
    to: '/docs/network-security',
  },
  {
    icon: '🖥️',
    title: '시스템 보안',
    description: 'Secure OS, 서버 보안, 엔드포인트 보안(EPP/EDR/XDR), 악성코드 분석 및 취약점 관리',
    to: '/docs/system-security',
  },
  {
    icon: '🛡️',
    title: '애플리케이션 보안',
    description: 'OWASP Top 10, 시큐어 코딩, DevSecOps, 공급망 보안 등 소프트웨어 개발 전 주기 보안',
    to: '/docs/application-security',
  },
  {
    icon: '☁️',
    title: '클라우드 & 인프라',
    description: 'CSPM, CWPP, CNAPP, 쿠버네티스 보안, 컨테이너 보안 및 DevSecOps 파이프라인',
    to: '/docs/cloud-infrastructure',
  },
  {
    icon: '🔑',
    title: 'IAM (접근 관리)',
    description: '인증, 인가, SSO, MFA, OAuth, Zero Trust 기반 아이덴티티 및 접근 관리 체계',
    to: '/docs/identity-access-management',
  },
  {
    icon: '🔍',
    title: '보안 운영',
    description: 'SOC, SIEM, EDR, 사고 대응(IR), 디지털 포렌식 등 위협 탐지와 사고 처리 운영 체계',
    to: '/docs/security-operations',
  },
  {
    icon: '⚔️',
    title: '공격 기법',
    description: 'Cyber Kill Chain, APT, 공급망 공격, 침투 테스트 방법론 및 공격자 관점의 위협 분류',
    to: '/docs/offensive-security',
  },
  {
    icon: '📋',
    title: '거버넌스 & 컴플라이언스',
    description: 'ISMS-P, ISO 27001, 개인정보보호법, CSAP, 가명화·차등 프라이버시 등 법규 및 인증',
    to: '/docs/governance-compliance',
  },
  {
    icon: '🚀',
    title: '신기술 보안',
    description: 'AI/LLM 보안(OWASP Top 10 for LLM), IoT/OT 보안, 블록체인 보안의 최신 위협과 대응',
    to: '/docs/emerging-security',
  },
];

function CategoryCard({icon, title, description, to}: CategoryItem) {
  return (
    <div className="col col--4" style={{marginBottom: '1rem'}}>
      <div className="card" style={{height: '100%'}}>
        <div className="card__header">
          <h3>{icon} {title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" to={to}>
            바로 가기
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={`hero hero--primary ${styles.heroBanner}`}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/foundations">
            기초·암호화 시작하기
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/governance-compliance"
            style={{marginLeft: '1rem'}}>
            거버넌스 보기
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="정보보안 분야 기술을 체계적으로 정리하는 지식베이스">
      <HomepageHeader />
      <main>
        <section style={{padding: '3rem 0'}}>
          <div className="container">
            <div className="row">
              {categories.map((item, idx) => (
                <CategoryCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>
        <section style={{background: 'var(--ifm-color-emphasis-100)', padding: '3rem 0'}}>
          <div className="container" style={{textAlign: 'center'}}>
            <Heading as="h2">이 사이트는 이런 분을 위해 만들었습니다</Heading>
            <div className="row" style={{marginTop: '1.5rem', justifyContent: 'center'}}>
              {[
                '정보보안 기사 / 기술사 시험을 준비하는 분',
                'IT 직군에서 보안 역량을 키우고 싶은 분',
                '보안 개념을 체계적으로 정리하고 싶은 개발자',
                '클라우드 · AI 시대의 최신 보안 트렌드가 궁금한 분',
              ].map((text, idx) => (
                <div key={idx} className="col col--5" style={{margin: '0.5rem'}}>
                  <div style={{
                    background: 'var(--ifm-card-background-color)',
                    borderRadius: '8px',
                    padding: '1rem',
                    border: '1px solid var(--ifm-color-emphasis-200)',
                  }}>
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  title: '정보보안 지식베이스',
  tagline: '정보보안 분야 기술을 체계적으로 정리합니다',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://jeonck.github.io',
  baseUrl: '/info-security/',
  organizationName: 'jeonck',
  projectName: 'info-security',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/jeonck/info-security/edit/main/',
          async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
            const items = await defaultSidebarItemsGenerator(args);
            function reorder(list: any[]): any[] {
              const docs  = list.filter(i => i.type === 'doc');
              const cats  = list.filter(i => i.type === 'category').map(c => ({
                ...c, items: reorder(c.items ?? []),
              }));
              const rest  = list.filter(i => i.type !== 'doc' && i.type !== 'category');
              return [...docs, ...cats, ...rest];
            }
            return reorder(items);
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '정보보안 지식베이스',
      hideOnScroll: false,
      logo: {
        alt: '정보보안 지식베이스 로고',
        src: 'img/logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'foundationsSidebar',  label: '기초·암호화',  position: 'left'},
        {type: 'docSidebar', sidebarId: 'networkSidebar',      label: '네트워크',     position: 'left'},
        {type: 'docSidebar', sidebarId: 'systemSidebar',       label: '시스템',       position: 'left'},
        {type: 'docSidebar', sidebarId: 'applicationSidebar',  label: '애플리케이션', position: 'left'},
        {type: 'docSidebar', sidebarId: 'cloudSidebar',        label: '클라우드',     position: 'left'},
        {type: 'docSidebar', sidebarId: 'iamSidebar',          label: 'IAM',         position: 'left'},
        {type: 'docSidebar', sidebarId: 'operationsSidebar',   label: '보안 운영',    position: 'left'},
        {type: 'docSidebar', sidebarId: 'offensiveSidebar',    label: '공격 기법',    position: 'left'},
        {type: 'docSidebar', sidebarId: 'governanceSidebar',   label: '거버넌스',     position: 'left'},
        {type: 'docSidebar', sidebarId: 'emergingSidebar',     label: '신기술',       position: 'left'},
        {
          href: 'https://github.com/jeonck/info-security',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '보안 기반',
          items: [
            {label: '기초·암호화',          to: '/docs/foundations'},
            {label: '네트워크 보안',        to: '/docs/network-security'},
            {label: '시스템 보안',          to: '/docs/system-security'},
            {label: '애플리케이션 보안',    to: '/docs/application-security'},
            {label: '클라우드 & 인프라',    to: '/docs/cloud-infrastructure'},
          ],
        },
        {
          title: '보안 운영 & 관리',
          items: [
            {label: 'IAM (접근 관리)',              to: '/docs/identity-access-management'},
            {label: '보안 운영 (SOC/SIEM)',          to: '/docs/security-operations'},
            {label: '공격 기법 & 침투 테스트',      to: '/docs/offensive-security'},
            {label: '거버넌스 & 컴플라이언스',      to: '/docs/governance-compliance'},
            {label: '신기술 보안',                  to: '/docs/emerging-security'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 정보보안 지식베이스. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'python', 'java', 'csharp', 'sql'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

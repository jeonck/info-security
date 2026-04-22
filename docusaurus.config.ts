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
      logo: {
        alt: '정보보안 지식베이스 로고',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'securitySidebar',
          position: 'left',
          label: '기술 분류',
        },
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
          title: '기술 분류',
          items: [
            {label: '보안 기반 이론', to: '/docs/foundations'},
            {label: '네트워크 보안', to: '/docs/network-security'},
            {label: '애플리케이션 보안', to: '/docs/application-security'},
            {label: '클라우드 & 인프라 보안', to: '/docs/cloud-infrastructure'},
          ],
        },
        {
          title: '더 보기',
          items: [
            {label: '보안 운영', to: '/docs/security-operations'},
            {label: '공격 기법 & 침투 테스트', to: '/docs/offensive-security'},
            {label: '거버넌스 & 컴플라이언스', to: '/docs/governance-compliance'},
            {label: '신기술 보안', to: '/docs/emerging-security'},
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

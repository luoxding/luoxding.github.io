import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const beian = '黔ICP备2022001597号'
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Notes',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',
  url: 'https://luoxding.github.io',
  baseUrl: '/',
  organizationName: 'luoxding',
  projectName: 'luoxding.github.io',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // 将文档设为根路由、需要设为首页的文件写上头文件："slug: /"
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // [
    //   require.resolve("docusaurus-plugin-search-local"),
    //   {
    //     hashed: true,
    //     indexPages: true,
    //     searchResultLimits: 25,
    //     highlightSearchTermsOnTargetPage: true,
    //     // explicitSearchResultPath: true,
    //    // docsRouteBasePath: '/docs',  // 确保文档路径正确
    //    // language: ['zh', 'en'],      // 添加支持的语言（无需添加到插件配置中）
    //   },
    // ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: 'filename',
        language: ['en', 'zh'],
        blogDir: ['blog', 'docs'],
        blogRouteBasePath: ['/blog', '/docs'],
      } satisfies DocusaurusSearchLocalOptions,
    ],
    // [
    //   'docusaurus-lunr-search',
    //   {
    //       languages: ['en', 'cn']
    //   }
    // ],
  ],

  // themes: [
  //   [
  //     '@easyops-cn/docusaurus-search-local',
  //     {
  //       hashed: 'filename',
  //       language: ['en', 'zh'],
  //       blogDir: ['blog', 'newsletter'],
  //       blogRouteBasePath: ['/blog', '/newsletter'],
  //     } satisfies DocusaurusSearchLocalOptions,
  //   ],
  //   // '@docusaurus/theme-mermaid',
  // ],


  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '我的笔记汇集',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Notes',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docker',
              to: '/17ujjV',
            },
            {
              label: 'LaTeX',
              to: '/cZLPIR',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'Self Hosted',
          items: [
            {
              label: 'Trilium notes',
              href: 'https://trilium.buyilaoluo.top/',
            },
            {
              label: 'blog with trilium share',
              href: 'https://buyilaoluo.top/',
            },
            {
              label: 'Blog with halo',
              href: 'https://blog.buyilaoluo.top/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/luoxding/luoxding.github.io',
            },
          ],
        },
      ],
     // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      

      copyright: `
      <p style="margin-bottom: 0;"><a href="http://beian.miit.gov.cn/">${beian}</a></p>
      <p>Copyright © ${new Date().getFullYear()} 老罗 Built with <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noopener noreferrer">Docusaurus</a></p>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'latex', 'json', 'markdown', 'python'], // 添加 LaTeX 和 Bash 等多个代码高亮支持
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

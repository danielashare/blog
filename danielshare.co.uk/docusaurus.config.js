const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Daniel Share\'s Blog',
  tagline: 'My tech blog',
  url: 'https://danielshare.co.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'Superbition', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'announcementBar-1', // Increment on change
      content:
          'Automatic database, file and server backups and management: <a target="_blank" rel="noopener" href="https://bakup.io">Bakup.io</a>',
    },
    navbar: {
      title: 'Daniel Share\'s Blog',
      logo: {
        alt: 'Blog Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/', label: 'Blog', position: 'left'},
        {
          href: 'https://bakup.io',
          label: 'Bakup.io',
          position: 'right',
        },
        {
          href: 'https://twitter.com/danielashare',
          label: 'Twitter',
          position: 'right',
        },
        {
          href: 'https://github.com/danielashare',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      additionalLanguages: ['php'],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadatas: [
      {
        name: 'twitter:card', content: 'summary_large_image',
      },
      {
        name: 'twitter:site', content: '@danielashare',
      },
      {
        name: 'twitter:creator', content: '@danielashare',
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          path: './blog',
          routeBasePath: '/',
          blogTitle: 'Daniel Share\'s Blog',
          blogDescription: 'A technical blog about building Bakup.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

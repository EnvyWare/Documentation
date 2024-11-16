// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {oneDark, themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EnvyWare Documentation',
  tagline: 'This site contains documentation for all EnvyWare Ltd projects and products.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.envyware.co.uk/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EnvyWare', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // ... your options
        hashed: true, // recommended for long-term caching
        language: ['en', 'zh'], // for sites using Chinese
        // ... other available options
      },
    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/banner_1920x1080.png',
      navbar: {
        title: 'EnvyWare Ltd',
        logo: {
          alt: 'EnvyWare Ltd Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'General Help',
            to: "docs/general-help/SUMMARY/",
            items: [
              {
                label: "Summary",
                to: "docs/general-help/SUMMARY/"
              },
              {
                label: "General Config",
                to: "docs/general-help/general-config/"
              },
              {
                label: "MySQL",
                to: "docs/general-help/"
              }
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Mods',
            to: "docs/mods/SUMMARY/",
            items: [
              {
                label: "Summary",
                to: "docs/mods/SUMMARY/"
              },
              {
                label: "Advanced Holograms",
                to: "docs/mods/advanced-holograms/"
              },
              {
                label: "BetterDexRewards",
                to: "docs/mods/betterdexrewards/"
              },
              {
                label: "BetterPokeBroadcaster",
                to: "docs/mods/betterpokebroadcaster/"
              },
              {
                label: "Envy AntiLag",
                to: "docs/mods/envy-antilag/"
              },
              {
                label: "Envy Specs",
                to: "docs/mods/envyspecs/"
              },
              {
                label: "EnvyBattleTower",
                to: "docs/mods/envybattletower/"
              },
              {
                label: "EnvyCrates",
                to: "docs/mods/envycrates/"
              },
              {
                label: "EnvyDayCare",
                to: "docs/mods/envydaycare/"
              },
              {
                label: "EnvyGTS",
                to: "docs/mods/envygts/"
              },
              {
                label: "EnvyHunt",
                to: "docs/mods/envyhunt/"
              },
              {
                label: "EnvySafari",
                to: "docs/mods/envysafari/"
              },
              {
                label: "EnvySpecs",
                to: "docs/mods/envyspecs/"
              },
              {
                label: "EnvySTS",
                to: "docs/mods/envysts/"
              },
              {
                label: "EnvyVaults",
                to: "docs/mods/envyvaults/"
              },
              {
                label: "Forge TAB",
                to: "docs/mods/forge-tab/"
              },
              {
                label: "Forge Placeholder API",
                to: "docs/mods/forgeplaceholderapi-fpapi/"
              },
              {
                label: "PokeRemoval",
                to: "docs/mods/pokeremoval/"
              },
              {
                label: "PokeTracker",
                to: "docs/mods/poketracker/"
              },
              {
                label: "ReforgedBingo",
                to: "docs/mods/reforgedbingo/"
              },
              {
                label: "UltimatePokeBuilder",
                to: "docs/mods/ultimatepokebuilder/"
              },
              {
                label: "WonderTrade",
                to: "docs/mods/wondertrade/"
              }
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Premium Mods',
            to: "docs/premium-mods/SUMMARY/",
            items: [
              {
                label: "Summary",
                to: "docs/premium-mods/SUMMARY/"
              },
              {
                label: "TOS",
                to: "docs/premium-mods/"
              },
              {
                label: "EnvyGyms",
                to: "docs/premium-mods/envygyms/"
              },
              {
                label: "EnvyScrolls",
                to: "docs/premium-mods/envyscrolls/"
              }
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'API',
            to: "docs/api/",
            items: [
              {
                label: "Summary",
                to: "docs/api/"
              },
              {
                label: "Quick Start",
                to: "docs/api/quick-start/"
              },
              {
                label: "Commands",
                to: "docs/api/Commands/annotation-based-commands"
              }
            ]
          },
          {
            href: 'https://github.com/EnvyWare/Documentation',
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
                label: 'API',
                to: '/docs/api/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.envyware.co.uk',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/danorris709',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/EnvyWare/Documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EnvyWare Ltd. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      },
    }),
};

export default config;

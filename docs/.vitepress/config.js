export default  {
    lang: 'en-US',
    title: 'Sui',
    description: 'A modern Vue 3 component library',
    base: "/sui/",
    themeConfig: {
        siteTitle: 'Sui - Sofia\'s User Interface',
        search: {
            provider: 'local'
        },
        docsDir: 'docs',
        nav: [
            {
                text: 'Changelog',
                link: '/changelog',
            },
            {
                text: 'Github',
                link: 'https://github.com/LauraWebdev/sui',
            },
        ],
        sidebar: [
            {
                items: [
                    {
                        text: 'Introduction',
                        link: '/',
                    },
                    {
                        text: 'Installation',
                        link: '/installation',
                    },
                    {
                        text: 'Getting Started',
                        link: '/getting-started',
                    },
                ]
            },
            {
                text: 'Components',
                items: getComponents(),
            },
        ],
        editLink: {
            pattern: 'https://github.com/laurawebdev/sui/edit/main/docs/:path'
        },
        footer: {
            message: 'Released under the <a href="https://github.com/laurawebdev/sui/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2023 &mdash; <a href="https://laura.media">Laura Sofia Heimann</a>'
        }
    },
    lastUpdated: true
}

function getComponents() {
    return [
        { text: 'Buttons', link: '/components/Buttons' },
        { text: 'Inputs', link: '/components/Inputs' },
        { text: 'Toggles', link: '/components/Toggles' },
        { text: 'Tabs', link: '/components/Tabs' },
        { text: 'Badges', link: '/components/Badges' },
        { text: 'ProgressBars', link: '/components/ProgressBars' },
    ]
}
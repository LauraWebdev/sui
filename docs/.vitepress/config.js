export default  {
    lang: 'en-US',
    title: 'Sui',
    description: 'A modern Vue 3 component library',
    themeConfig: {
        search: {
            provider: 'local'
        },
        docsDir: 'docs',
        nav: [
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
                    {
                        text: 'Theming',
                        link: '/theming',
                    },
                    {
                        text: 'Icons',
                        link: '/icons',
                    },
                ]
            },
            {
                text: 'Components',
                items: getComponents(),
            },
        ],
    },
}

function getComponents() {
    return [
        { text: 'SuiButton', link: '/components/SuiButton' },
        { text: 'SuiHeader', link: '/components/SuiHeader' },
        { text: 'SuiInput', link: '/components/SuiInput' },
        { text: 'SuiLoader', link: '/components/SuiLoader' },
        { text: 'SuiSelect', link: '/components/SuiSelect' },
        { text: 'SuiSwitch', link: '/components/SuiSwitch' },
        { text: 'SuiTabBar', link: '/components/SuiTabBar' },
        { text: 'SuiTabItem', link: '/components/SuiTabItem' },
    ]
}
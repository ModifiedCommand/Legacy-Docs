import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import sidebar from './sidebar';

let title = 'Minecraft Legacy Docs';
let description = 'Documentation about Minecraft: Legacy Console Edition';

export default {
    base: '/Legacy-Docs/',
    lang: 'en-US',
    title: title,
    description: description,
    head: [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#2ecc71' }],
        ['meta', { name: 'theme-color', content: '#27ae60' }],
        ['meta', { name: 'twitter:card', content: 'summary' }],
        ['meta', { property: 'og:title', content: title }],
        ['meta', { property: 'og:description', content: description }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://modifiedcommand.github.io/Legacy-Docs/' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
        ['meta', { property: 'og:image', content: 'https://modifiedcommand.github.io/Legacy-Docs/' }],
    ],
    theme: defaultTheme({
        navbar: [
			{
				text: 'Save Files',
				link: '/Saves/',
			},
            {
				text: 'Filetypes',
				link: '/Formats/',
			},
        ],
        sidebar,
        contributors: true,
        repo: 'ModifiedCommand/Legacy-Docs',
        logo: '/favicon.png',
        sidebarDepth: 2,
        docsDir: 'docs',
        editLink: true,
        lastUpdated: true,
        colorMode: 'auto'
    }),
    plugins: [
        searchPlugin({
            '/': {
                placeholder: 'Search',
            }
        }),
    ],
}
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import sidebar from './sidebar';

let title = 'Minecraft Legacy Docs';
let description = 'Just playing around';

export default {
    base: '/Legacy-Docs/',
    lang: 'en-US',
    title: title,
    description: description,
    head: [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
        // ['link', { rel: 'icon', href: '/favicon.png' }],
        ['meta', { name: 'theme-color', content: '#27ae60' }],
        ['meta', { name: 'twitter:card', content: 'summary' }],
        ['meta', { property: 'og:title', content: title }],
        ['meta', { property: 'og:description', content: description }],
        ['meta', { property: 'og:type', content: 'website' }],
        // ['meta', { property: 'og:url', content: 'https://example.com/' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
        // ['meta', { property: 'og:image', content: 'https://example.com/' }],
    ],
    theme: defaultTheme({
        sidebar,
        contributors: true,
        repo: 'ModifiedCommand/Legacy-Docs',
        //logo: '/favicon.png',
        sidebarDepth: 2,
        docsDir: 'docs',
        editLink: true,
        lastUpdated: true,
        colorMode: 'dark'
    }),
    plugins: [
        searchPlugin({
            '/': {
                placeholder: 'Search',
            }
        }),
    ],
}
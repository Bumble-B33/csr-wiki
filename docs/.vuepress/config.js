import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Wiki',
    description: 'Welcome to the Clay Soldiers Remake Wiki',
    base: '/csr-wiki/',

    theme: defaultTheme({
        logo: '/images/logo/clay_soldiers_logo.png',
        navbar: [
            '/',
            {
                text: 'Content',
                children: [
                    '/getting-started',
                    '/wiki/',
                    '/create-items/'
                ]
            }
        ],
        sidebar: {
            '/getting-started': 'heading',
            '/wiki/': 'heading',
            '/wiki/clay-soldiers': [
                {
                    text: 'Clay Soldiers Remake',
                    children: [
                        '/wiki/clay-soldiers',
                        '/wiki/mounts',
                        '/wiki/work'
                    ],
                }
            ],
            '/wiki/mounts': [
                {
                    text: 'Clay Soldiers Remake',
                    children: [
                        '/wiki/clay-soldiers',
                        '/wiki/mounts',
                        '/wiki/work'
                    ],
                }
            ],
            '/wiki/work': [
                {
                    text: 'Clay Soldiers Remake',
                    children: [
                        '/wiki/clay-soldiers',
                        '/wiki/mounts',
                        '/wiki/work'
                    ],
                }
            ],
            '/wiki/items/': [
                {
                    text: 'Items',
                    children: [
                        'soldier-puppet.md',
                        'clay-brush.md',
                        'clay-cookie.md',
                        'clay-goggles.md',
                        'clay-horses.md',
                        'hamster-wheel.md'
                    ],
                }

            ],
            '/create-items/': [
                {
                    text: 'Content',
                    children: [
                        "/create-items/",
                        "/create-items/items",
                        "/create-items/pois",
                        "/create-items/teams",
                        "/create-items/itemsettypes",
                        "/create-items/vehicle_properties",
                        "/create-items/tags",
                        "/create-items/example",
                        "/create-items/holdable-values",
                        "/create-items/soldier-properties",
                        "/create-items/common-values"
                    ]
                }
            ]
        },
    }),
    head: [
        ['link', {rel: 'icon', type: "image/png", href: "/csr-wiki/images/logo/favicon-96x96.png", sizes: "96x96" }],
        ['link', {rel: 'icon', type: "image/svg+xml", href: "/csr-wiki/images/logo/favicon.svg" }],
        ['link', {rel: 'shortcut icon', href: "/csr-wiki/images/logo/favicon.ico" }],
        ['link', {rel: 'apple-touch-icon', href: "/csr-wiki/images/logo/apple-touch-icon.png", sizes: "180x180" }],
        ['meta', {name: "apple-mobile-web-app-title", content: "CSR Wiki" }],
        ['link', {rel: 'manifest', href: "/csr-wiki/images/logo/site.webmanifest" }],


    ],

    bundler: viteBundler(),
})



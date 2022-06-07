const path = require("path");
const sidebar = require("./sidebar");

const resolveAlias = Object.fromEntries(
    Object.entries({
        "@": "./",
        "@store": "./store",
        "@views": "./views",
        "@com": "./components",
        "@css": "./css",
        "@images": "./images",
    }).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

const googleAnalyticsId = `G-J622WBV267`;
const googleAnalytics = [
    [
        "script",
        {
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
        },
    ],
    [
        "script",
        {},
        [
            `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${googleAnalyticsId}');`,
        ],
    ],
];

module.exports = {
    base: "/TIL/",
    title: "Vuepress Docs Boilerplate",
    description: "HI",
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
        ...googleAnalytics,
    ],
    themeConfig: {
        sidebar,
    },
    markdown: {
        anchor: {
            permalink: false,
            permalinkBefore: false,
        },
        pageSuffix: "/",
    },
    configureWebpack: {
        resolve: {
            alias: resolveAlias,
        },
    },
    plugins: [
        "@vuepress/plugin-back-to-top",
        "@vuepress/plugin-medium-zoom",
        ["sitemap", { hostname: "https://minseok0917.github.io/TIL/" }],
    ],
};
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
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};

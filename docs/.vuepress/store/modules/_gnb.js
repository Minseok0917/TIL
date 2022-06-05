const initState = () => ({
    menus: [
        {
            name: "HOME",
            path: "/",
        },
        {
            name: "CHARTER",
            path: "/charter/",
        },
        {
            name: "TAGS",
            path: "/tags/",
        },
        {
            name: "ABOUT ME",
            path: "/about/",
        },
    ],
});
const state = initState();
const getters = {
    getMenus: (state) => state.menus,
};
const mutations = {
    isNotFound: (state, urlPath) =>
        state.menus.some(({ path }) => path === urlPath),
};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

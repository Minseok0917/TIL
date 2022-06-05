const initState = () => ({
    pages: [],
});
const state = initState();
const getters = {
    pages: (state) => state.pages,
    tags: (state) => {
        return Object.entries(
            state.pages
                .filter(({ frontmatter }) => frontmatter.tags)
                .map(({ frontmatter }) => frontmatter.tags)
                .flat(1)
                .reduce(
                    (acc, tag) => ({
                        ...acc,
                        [tag]: (acc[tag] || 0) + 1,
                    }),
                    {}
                )
        ).map(([name, count]) => ({
            name,
            count,
            text: `${name} (${count})`,
        }));
    },
    charter: (state) => {
        return Object.entries(
            state.pages
                .filter(({ frontmatter }) => frontmatter.charter)
                .map(({ frontmatter }) => frontmatter.charter)
                .flat(1)
                .reduce(
                    (acc, charter) => ({
                        ...acc,
                        [charter]: (acc[charter] || 0) + 1,
                    }),
                    {}
                )
        ).map(([name, count]) => ({
            name,
            count,
            text: `${name} (${count})`,
        }));
    },
};
const mutations = {
    setPage: (state, pages) => (state.pages = pages),
};
const actions = {
    findTagPages: ({ getters }, tag) => {
        const pages = getters["pages"];
        const findPages = pages.filter(
            ({ frontmatter }) =>
                frontmatter.tags && frontmatter.tags.some((t) => t === tag)
        );
        return findPages;
    },
    findCharterPages: ({ getters }, charter) => {
        const pages = getters["pages"];
        const findPages = pages.filter(
            ({ frontmatter }) =>
                frontmatter.charter && frontmatter.charter === charter
        );
        console.log(charter);
        return findPages;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

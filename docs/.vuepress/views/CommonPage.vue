<template>
    <Home v-if="path === '/'" />
    <Charters v-else-if="path === '/charter/'" />
    <CharterBoard
        v-else-if="isCharter"
        :charter="decodeURIComponent(isCharter[1])"
    />
    <Tags v-else-if="path === '/tags/'" />
    <About v-else-if="path === '/about/'" />
    <TagBoard v-else-if="isTag" :tag="decodeURIComponent(isTag[1])" />
    <Board v-else-if="blog" />
</template>
<script>
export default {
    props: {
        blog: Boolean,
    },
    components: {
        Home: () => import("@views/Home.vue"),
        Tags: () => import("@views/Tags.vue"),
        TagBoard: () => import("@views/TagBoard.vue"),
        Charters: () => import("@views/Charters.vue"),
        CharterBoard: () => import("@views/CharterBoard.vue"),
        About: () => import("@views/About.vue"),
        Board: () => import("@views/Board.vue"),
    },
    computed: {
        path() {
            return this.$route.path;
        },
        isTag() {
            return this.$route.path.match(/^\/tags\/([^\/]+)$/);
        },
        isCharter() {
            return this.$route.path.match(/^\/charter\/([^\/]+)$/);
        },
    },
    created() {
        this.$store.commit("page/setPage", this.$site.pages);
    },
};
</script>

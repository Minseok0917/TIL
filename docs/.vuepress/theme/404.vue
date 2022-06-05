<template>
    <NotFound v-if="isNotFound" />
    <div class="root" v-else>
        <template--TheHeader />
        <CommonPage :key="fullPath" />
        <template--TheFooter />
    </div>
</template>
<script>
import "@css/default-theme.css";
import "@css/custom-theme.css";
export default {
    components: {
        CommonPage: () => import("@views/CommonPage.vue"),
        NotFound: () => import("@views/NotFound.vue"),
    },
    computed: {
        path() {
            return this.$route.path;
        },
        fullPath() {
            return this.$route.fullPath;
        },
        isNotFound() {
            return this.$store.commit("gnb/isNotFound", this.path);
        },
    },
};
</script>

<template>
    <div class="root">
        <template--TheHeader />
        <CommonPage blog :key="fullPath" />
        <template--TheFooter />
    </div>
</template>
<script>
import "@css/default-theme.css";
import "@css/custom-theme.css";
export default {
    components: {
        CommonPage: () => import("@views/CommonPage.vue"),
    },
    computed: {
        path() {
            return this.$route.path;
        },
        fullPath() {
            return this.$route.fullPath;
        },
    }
};
</script>

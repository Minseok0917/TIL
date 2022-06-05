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
    },
    mounted() {
        console.log(this.$site.pages);
        console.log(this.$page);
        console.log(this.path, this.fullPath);
    },
};
</script>

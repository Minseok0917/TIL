<template>
    <a href="https://hits.seeyoufarm.com"><img :src="src" /></a>
</template>
<script>
export default {
    data: () => ({ src: "" }),
    created() {
        this.src = `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMinseok0917/${this.$page.path}&count_bg=%233EAF7C&title_bg=%23277250&icon=github.svg&icon_color=%23E7E7E7&title=방문자수&edge_flat=false`;
    },
};
</script>

<template>
    <nav>
        <ul>
            <li v-for="menu in menus" :key="menu.path">
                <router-link :to="menu.path">{{ menu.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    computed: {
        menus() {
            return this.$store.getters["gnb/getMenus"];
        },
    },
};
</script>

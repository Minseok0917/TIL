<template>
    <router-link class="tag" v-if="name || (name && count)" :to="move(name)"
        >{{ name }}
        <template v-if="count">
            (<span class="count">{{ count }}</span
            >)
        </template>
    </router-link>
</template>
<script>
export default {
    props: ["name", "count", "section"],
    methods: {
        move(path) {
            return `/${this.section}/${path}`;
        },
    },
};
</script>

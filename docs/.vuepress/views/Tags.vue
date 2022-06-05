<template>
    <section>
        <div class="container">
            <article class="tag-container">
                <base--tag
                    v-for="tag in tags"
                    :key="tag.name"
                    :name="tag.name"
                    :count="tag.count"
                    section="tags"
                />
            </article>
        </div>
    </section>
</template>
<script>
export default {
    computed: {
        tags() {
            return this.$store.getters["page/tags"];
        },
    },
};
</script>

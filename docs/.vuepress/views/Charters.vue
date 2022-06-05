<template>
    <section>
        <div class="container">
            <article class="tag-container">
                <base--tag
                    v-for="charter in charters"
                    :key="charter.name"
                    :name="charter.name"
                    :count="charter.count"
                    section="charter"
                />
            </article>
        </div>
    </section>
</template>
<script>
export default {
    computed: {
        charters() {
            return this.$store.getters["page/charter"];
        },
    },
};
</script>

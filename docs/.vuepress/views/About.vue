<template>
    <section>
        <div class="container">
            <Board />
        </div>
    </section>
</template>
<script>
export default {
    components: {
        Board: () => import("@views/Board.vue"),
    },
};
</script>

<template>
    <section class="markdown-board">
        <div class="container">
            <div class="info">
                <div class="tag-container">
                    <base--tag
                        v-for="tag in front.tags"
                        :key="tag"
                        :name="tag"
                        section="tags"
                    />
                </div>
                <h1 class="title">{{ front.title }}</h1>
                <p class="create-by">{{ front.createBy }}</p>
                <div class="hit-container">
                    <base--hit />
                </div>
                <div class="img-box" v-if="front.image">
                    <img :src="front.image" :alt="front.title" />
                </div>
            </div>
            <Content class="markdown-container" />
            <base--comment />
        </div>
    </section>
</template>
<script>
import dayjs from "dayjs";
export default {
    data: () => ({ front: {} }),
    created() {
        const { title, tags, image, createBy } = this.$frontmatter;
        this.front = {
            createBy: dayjs(createBy).format("YYYY년 MM월 DD일"),
            title,
            image,
            tags,
        };
    },
};
</script>

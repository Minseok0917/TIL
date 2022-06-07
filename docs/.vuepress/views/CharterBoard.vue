<template>
    <section class="tag-board">
        <div class="container">
            <h1 class="main-title">
                <span> CHARTER : {{ charter }}</span>
            </h1>
            <div class="board" v-for="page in pages" :key="page.path">
                <router-link :to="page.path">
                    <h2 class="title">{{ page.frontmatter.title }}</h2>
                    <p class="description">
                        {{ page.frontmatter.description }}
                    </p>
                    <div class="date-box">
                        <p class="create-by">
                            <img
                                class="icon date"
                                :src="require('@images/time-outline.svg')"
                                alt=""
                            />
                            {{ changeDate(page.frontmatter.createBy) }}
                        </p>
                        <div class="tag-box">
                            <img
                                class="icon date"
                                :src="require('@images/pricetag-outline.svg')"
                                alt=""
                            />
                            <div class="tag-container">
                                <base--tag
                                    v-for="tag in page.frontmatter.tags"
                                    :key="tag"
                                    :name="tag"
                                    section="tags"
                                ></base--tag>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>
<script>
import dayjs from "dayjs";
export default {
    props: ["charter"],
    data: () => ({
        pages: [],
    }),
    async created() {
        const pages = await this.$store.dispatch(
            "page/findCharterPages",
            this.charter
        );
        this.pages = pages.sort(
            (a, b) =>
                dayjs(b.frontmatter.createBy) - dayjs(a.frontmatter.createBy)
        );
    },
    methods: {
        changeDate(date) {
            return dayjs(date).format("YYYY년 MM월 DD일");
        },
    },
};
</script>

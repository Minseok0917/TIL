<template>
    <section>
        <div class="tag-board container">
            <div class="board" v-for="page in currentPages" :key="page.path">
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
    data: () => ({
        allPages: [],
        currentPages: [],
        count: 0,
        limit: 10,
    }),
    created() {
        window.addEventListener("scroll", this.onscroll);
        const pages = this.$store.getters["page/pages"];
        this.allPages = pages
            .filter(({ frontmatter }) => frontmatter.createBy)
            .sort(
                (a, b) =>
                    dayjs(b.frontmatter.createBy) -
                    dayjs(a.frontmatter.createBy)
            );
        this.addPage();
    },
    methods: {
        changeDate(date) {
            return dayjs(date).format("YYYY년 MM월 DD일");
        },
        onscroll() {
            const { count, limit, allPages } = this;
            const dheight = document.body.scrollHeight - 200;
            const by = window.scrollY + window.innerHeight;
            const isAdd = (count + 1) * limit < allPages.length;
            if (by >= dheight && isAdd) {
                this.count += 1;
                this.addPage();
            }
        },
        addPage() {
            const { count, limit, allPages } = this;
            const pages = allPages.slice(count, limit);
            this.currentPages = [...this.currentPages, ...pages];
        },
    },
    destroyed() {
        window.removeEventListener("scroll", this.onscroll);
    },
};
</script>

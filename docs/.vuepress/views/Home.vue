<!-- src/.vuepress/views/Home.vue -->
<template>
	<section class="home-container">
		<div class="markdown-theme">
			<!-- <Content /> -->
		</div>
		<article class="tag-container">
			<ul>
				<li :class="{ 'active' : tag.active }" @click="addTag(tag)"  v-for="tag in tags" :key="tag.name">#{{tag.name}}</li>
			</ul>
		</article>
		<Board title="All Board" :boards="getMarkdown" />
	</section>
</template>
<script>
	import { defineComponent } from '@vue/composition-api';
	import { resolveSidebarItems } from '../utils';

	export default defineComponent({
		data:()=>({
			menuItems:[],
			anchorItems:[],
			markdowns:[],
			tags:[],
		}),
		created(){
			this.menuItems = resolveSidebarItems(
				this.$page,
				this.$page.regularPath,
				this.$site,
				this.$localePath
			);
			this.anchorItems = this.$page.headers || [];
			
			this.markdowns = this.menuItems.map(this.menuDepth).flat().filter( ({frontmatter}) => frontmatter.creationDate ).sort( (value1,value2) => {
				const value1CreateDate = value1.frontmatter.creationDate;
				const value2CreateDate = value2.frontmatter.creationDate;
				return (
					value1CreateDate === value2CreateDate ? 0 :
					value1CreateDate < value2CreateDate ? 1 : -1
				);
			});
			this.tags = [...new Set(this.markdowns.map( ({frontmatter}) => frontmatter.tags ).flat())].map( tag => ({
				name:tag,
				active:false
			}));
		},
		methods:{
			menuDepth({type,path,frontmatter,children}){
				if( type === 'group' )
					return children.map(this.menuDepth).flat();
				else 
					return { path, frontmatter };
			},
			addTag(tag){
				tag.active = !tag.active;
			}
		},
		computed:{
			getMarkdown(){
				const tags = this.tags.filter( ({active}) => active ).map( ({name}) => name );
				return this.markdowns.filter( ({frontmatter}) => tags.every( tag => frontmatter.tags.includes(tag) ) );
			}
		}
	});
</script>
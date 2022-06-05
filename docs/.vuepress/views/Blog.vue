<template>
	<section class="blog-container">
		<div class="menu-container">
			<Menu class="menu-wrap" :items="menuItems" :depth="0" />
		</div>
		<div class="markdown-theme">
			<Content />
		</div>
		<div class="anchor-container" :class="{ 'hidden' : anchorItems.length === 0}">
			<Anchor class="anchor-wrap" :items="anchorItem"  />				
		</div>
	</section>
</template>
<script>
	import { defineComponent } from '@vue/composition-api';
	import { resolveSidebarItems } from '../utils';

	export default defineComponent({
		data:()=>({
			menuItems:[],
			anchorItems:[],
		}),
		created(){
			this.menuItems = resolveSidebarItems(
				this.$page,
				this.$page.regularPath,
				this.$site,
				this.$localePath
			);
			this.anchorItems = this.$page.headers || [];
		},
		computed:{
			path:function(){
				return this.$route.path;
			},
			anchorItem:function(){
				this.menuItems = resolveSidebarItems(
					this.$page,
					this.$page.regularPath,
					this.$site,
					this.$localePath
				);
				this.anchorItems = this.$page.headers || [];
				return this.anchorItems = this.$page.headers || [];;
			}
		}
	});
</script>
<style scoped>
/*	section{
		display: flex;
	}
	.menu-wrap{ position: fixed; }
	section>.menu-container,
	section>.anchor-container{ flex: 1; overflow: hidden;}
	.anchor-container.hidden{
		visibility: hidden;
	}
	.theme-default-content{
		max-width: 940px !important;
		flex: 3;
	}
	.menu-container{
		box-sizing: border-box;
		padding: 3rem 1.5rem;
	}
	.anchor-container{
		padding: 3rem 1.5rem;
		}*/
</style>
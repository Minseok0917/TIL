<template>
	<div>
		<section>
			<div class="menu-container">
				<Menu class="menu-wrap" :items="menuItems" />
			</div>
			<div class="theme-default-content content__default">
				<Content />
			</div>
			<div class="anchor-container" :class="{ 'hidden' : anchorItems.length === 0}">
				<Anchor :items="anchorItems" />				
			</div>
		</section>
	</div>
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
	});
</script>
<style scoped>
	section{
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
	}
</style>
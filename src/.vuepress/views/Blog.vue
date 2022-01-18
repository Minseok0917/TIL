<template>
	<div>
		<section>
			<div class="menu-container">
				<Menu :items="menuItems" />
			</div>
			<div class="theme-default-content content__default">
				<Content />
			</div>
			<div class="anchor-container">
				<Anchor :items="anchorItems" />				
			</div>
		</section>
	</div>
</template>
<script>
	import { defineComponent } from '@vue/composition-api';
	import { resolveSidebarItems } from '../utils';

	export default defineComponent({
		props:['fullPath'],
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
			this.anchorItems = this.$page.headers;
		},
	});
</script>
<style scoped>
	section{
		display: flex;
	}
	section>.menu-container,
	section>.anchor-container{ flex: 1; }
	.theme-default-content{
		max-width: 1140px !important;
		flex: 4;
	}
	.menu-container{
		box-sizing: border-box;
		padding: 3rem 1.5rem;
	}
	.anchor-container{
		padding: 3rem 1.5rem;
	}
</style>
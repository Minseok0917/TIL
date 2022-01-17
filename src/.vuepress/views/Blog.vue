<template>
	<div>
		<section>
			<Menu :items="menuItems" />
			<Anchor :items="anchorItems" />
			<div class="theme-default-content content__default">
				<Content />
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
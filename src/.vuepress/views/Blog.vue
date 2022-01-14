<template>
	<div>
		BLOG
		<Menu :items="items" />
		<div class="theme-default-content content__default">
			<Content />
		</div>
	</div>
</template>
<script>
	import { defineComponent } from '@vue/composition-api';
	import { resolveSidebarItems } from '../utils';
	
	export default defineComponent({
		props:['fullPath'],
		data:()=>({
			items:[],
		}),
		created(){
			this.items = resolveSidebarItems(
				this.$page,
				this.$page.regularPath,
				this.$site,
				this.$localePath
				);
		},
	});
</script>
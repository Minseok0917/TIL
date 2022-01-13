<template>
	<div>
		<TheHeader />
		<Menu :items="items" />
		<div class="theme-default-content content__default">
			<Content />
		</div>
		<TheFooter/>
	</div>
</template>
<script>
	import Vue from 'vue';
	import VueCompositionAPI ,{ defineComponent }  from '@vue/composition-api';
	import { resolveSidebarItems } from '../utils';
	Vue.use(VueCompositionAPI);

	export default defineComponent({
		data:()=>({
			items:[]
		}),
		created(){
			this.items = resolveSidebarItems(
					this.$page,
					this.$page.regularPath,
					this.$site,
					this.$localePath
				);
		}
	})
</script>
<style lang="stylus" src="../styles/index.styl"></style>
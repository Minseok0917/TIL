<template>
	<div>
		<Foo-Bar />
		<div class="theme-default-content content__default">
			<Content />
		</div>
	</div>
</template>
<script>
	import { resolveSidebarItems } from '../utils';
	export default{
		mounted(){
			console.log(resolveSidebarItems(
				this.$page,
				this.$page.regularPath,
				this.$site,
				this.$localePath
			));
		}
	}
</script>
<style lang="stylus" src="../styles/index.styl"></style>
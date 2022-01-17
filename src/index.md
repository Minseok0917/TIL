# 안녕하십니까
## 가나다라 마바사입니다.
```vue
<template>
	<div>
		<TheHeader :fullPath="fullPath" />		
		<template>
			<Home v-if="fullPath == '/'" />
			<Blog v-else :key="fullPath" />
		</template>
		<TheFooter/>
	</div>
</template>
<script>
	import Vue from 'vue';
	import VueCompositionAPI ,{ defineComponent, defineAsyncComponent }  from '@vue/composition-api';
	Vue.use(VueCompositionAPI);

	export default defineComponent({
		components:{
			Home : defineAsyncComponent(()=> import('../views/Home.vue') ),
			Blog : defineAsyncComponent(()=> import('../views/Blog.vue') ),
		},
		computed:{
			fullPath:function(){
				return this.$route.path;
			}
		}
	})
</script>
<style lang="stylus" src="../styles/index.styl"></style>
```
## 가나다라
<template>
	<div>
		<TheHeader :fullPath="fullPath" />		
		<template>
			<Home v-if="fullPath == '/'" />
			<Blog v-else :key="path" />
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
			path:function(){
				return this.$route.path;
			},
			fullPath:function(){
				return this.$route.fullPath;
			}
		}
	})
</script>
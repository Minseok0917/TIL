<template>
	<div>
		<TheHeader :fullPath="fullPath" />		
		<template>
			<Home class="contents" v-if="path == '/'" />
			<Blog class="contents" v-else />
		</template>
		<TheFooter/>
	</div>
</template>
<script>
	import Vue from 'vue';
	import VueCompositionAPI ,{ defineComponent, defineAsyncComponent }  from '@vue/composition-api';
	import '@/assets/scss/common.scss';
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

<style lang="scss">
	/*$a:red;

	@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
	*{
		font-family: 'Archivo','Noto Sans KR', sans-serif;
		background:$a;
	}
	.contents{
		min-height: calc(100vh - 100px);
	}*/
</style>
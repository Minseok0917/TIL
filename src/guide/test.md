<img  src="https://t1.daumcdn.net/cfile/tistory/999227485CF5039E21" >

## D

### TSRT
#### FS(S)FAD


## D

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
### minseok

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

### minseok2
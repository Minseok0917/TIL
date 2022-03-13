<template>
	<div>
		<div class="title-box" v-if="depth === 0">
			<p class="title">
				<span>CATEGORY LIST</span>
			</p>
		</div>
		<ul class="menu">
			<li v-for="item in items" :key="item.path">
				<template v-if="item.type === 'group' "> <!--fodler  -->
					<details>
						<!-- <summary><router-link :class="{ 'active' : path === decodeURI(item.path) || path === (decodeURI(item.path)+'/') }" :to="item.path">{{item.title}}</router-link></summary> -->
						<summary>{{item.title}}</summary>
						<Menu :items="item.children" :depth="depth+1" ></Menu>
					</details>
				</template>
				<template v-else> <!-- markdown -->
					<router-link :class="{ 'active' : path === decodeURI(item.path) || path === (decodeURI(item.path)+'/') }" :to="item.path">{{item.title}}</router-link>
				</template>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props:['items','depth'],
		data:()=>({
			path:'/'
		}),
		created(){
			this.path = decodeURI(this.$route.fullPath);
		}
	}
</script>
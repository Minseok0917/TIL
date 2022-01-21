<template>
	<ul class="menu">
		<li v-for="item in items" :key="item.path">
			<template v-if="items.length > 1">
				<router-link :class="{ 'active' : path === decodeURI(item.path) || path === (decodeURI(item.path)+'/') }" :to="item.path">{{item.title}}</router-link>
			</template>
			<template v-if="item.children">
				<Menu :items="item.children"></Menu>
			</template>
		</li>
	</ul>
</template>
<script>
	export default{
		props:['items'],
		data:()=>({
			path:'/'
		}),
		created(){
			this.path = decodeURI(this.$route.fullPath);
			console.log(this.items);
		}
	}
</script>
<style>
	.menu li{ list-style: none; }
	.menu li a{ color: #999; font-size: 0.85rem; line-height: 1.5;}
	.menu li a.active{ color: #333;  }
</style>
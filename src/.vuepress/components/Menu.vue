<template>
	<div class="menu">
		<ul>
			<li v-for="item in items" :key="item.path">
				<router-link :to="item.path">{{item.title}}</router-link>
				<ul>
					<li v-for="childItem in item.children" :key="childItem.title">
						<router-link :to="childItem.path">{{childItem.title}}</router-link>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props:['items'],
		created(){
			const items = this.$props.items;
			const a = items.map( ({title,children}) =>{
				return {
					title,
					children:children.map(({title,children})=> ({
						title,
						children
					}))
				}
			});
		}
	}
</script>
<style>
	.menu{ position: fixed; }
	.menu li{ list-style: none; }
	.menu li a{ color: #333; }
</style>
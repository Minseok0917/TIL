<template>
	<div>
		<ul>
			<li v-for="item in items" :key="item.path">
				<router-link :to="item.path">{{item.title}}</router-link>
				<ul>
					<li v-for="childItem in item.children" :key="childItem.title">
						{{childItem.title}}
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
			console.log(items);

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
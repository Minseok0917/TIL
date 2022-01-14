<template>
	<div>
		MENU
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
			} );
			console.log(a);
		}
	}
</script>
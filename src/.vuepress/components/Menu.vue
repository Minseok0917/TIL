<template>
	<div>
		MENU
	</div>
</template>
<script>
	export default{
		props:['items'],
		created(){
			console.log(this.$props.items);
		}
	}
</script>
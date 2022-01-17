<template>
	<div class="anchor">
		<ul>
			<li v-for="item in items" :key="item.slug" :class="'floor'+item.level">
				<a :href="'#'+item.slug">{{item.title}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props:['items'],
		mounted(){
			if( this.$route.hash ){
				const $element = document.getElementById(this.$route.hash.slice(1));
				$element.scrollIntoView();
			}
		}
	}
</script>
<style scoped>
	.anchor{
		position: fixed;
		right: 0;
	}


	.floor2{
		font-size: 1rem;
	}
	.floor3{
		font-size: 0.75rem;
	}

	.floor2~.floor3{ padding-left: 1rem; }
</style>
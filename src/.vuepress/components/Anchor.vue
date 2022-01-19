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
			console.log(this.items);
			window.addEventListener('scroll',function(e){
				// console.l
			})
		}
	}
</script>
<style scoped>
	.anchor{
		position: fixed;
		border-left: 3px solid #e0e0e0;
	}
	.anchor li{
		list-style: none;
	}
	.anchor li a{
		color: #383838;
		opacity: 0.5;
	}
	.anchor li a.active{
		color: red;
	}


	.floor2{
		font-size: 1rem;
	}
	.floor3{
		font-size: 0.75rem;
	}

	.floor2~.floor3{ padding-left: 1rem; }
</style>
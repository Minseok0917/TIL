<template>
	<div class="anchor">
		<ul>
			<li v-for="item in items" :key="item.slug" :class="'floor'+item.level">
				<router-link :class="{ 'active' : currentScrollSlug === item.slug }" @click="clickHandle(item.slug)" :to="'#'+item.slug">{{item.title}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props:['items'],
		data:()=>({
			currentScrollSlug:''
		}),
		mounted(){
			if( this.$route.hash ){
				const $element = document.getElementById(this.$route.hash.slice(1));
				console.log('dasa');
				$element.scrollIntoView();
			}
			window.addEventListener('scroll',this.scrollHandle);
		},
		destroyed(){
			window.removeEventListener('scroll',this.scrollHandle);
		},
		methods:{
			scrollHandle(e){
				const headerTop = document.querySelector('header').classList.contains('active') ? 15 : 65; // true : header x
				const cloneItems = [...this.items];
				const pageY = window.pageYOffset;
				const item = this.items.find( ({slug,...value}) => {
					cloneItems.splice(0,1);
					const nextItem = cloneItems[0];
					const y = parseInt(document.getElementById(slug).getBoundingClientRect().top)+pageY-headerTop;
					const nextY = nextItem ? parseInt(document.getElementById(nextItem.slug).getBoundingClientRect().top)+pageY-headerTop : document.body.clientHeight;
					return y <= pageY && pageY < nextY
				});
				this.currentScrollSlug = item?.slug ?? '';
				// this.$router.replace(`${ this.currentScrollSlug == '' ? '' : '#'+this.currentScrollSlug }`)
			},
			clickHandle(slug){
				this.currentScrollSlug = slug;				
			}
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
		font-weight: bold;
	}


	.floor2{
		font-size: 1rem;
	}
	.floor3{
		font-size: 0.75rem;
	}

	.floor2~.floor3{ padding-left: 1rem; }
</style>
<template>
	<div class="anchor">
		<ul>
			<li v-for="item in items" :key="item.slug" :class="[{ 'active' : currentScrollSlug === item.slug },'floor'+item.level]">
				<a :href="'#'+item.slug" @click="clickHandle(item.slug)">{{item.title}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props:['items'],
		data:()=>({
			currentScrollSlug:'',
			timer:'',
			click:false,
		}),
		created(){
			console.log('created');
		},
		mounted(){
			if( this.$route.hash ){
				const $element = document.getElementById(this.$route.hash.slice(1));
				const $html = document.children[0];
				$element.scrollIntoView();
			}
			window.addEventListener('scroll',this.scrollHandle);
		},
		destroyed(){
			window.removeEventListener('scroll',this.scrollHandle);
		},
		methods:{
			scrollHandle(e){
				if( this.timer ){
					clearTimeout(this.timer);
				}
				this.timer = setTimeout(()=>{
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
					const slug = item?.slug ?? '';
					if( this.click ){
						this.click = false;
						if ( this.currentScrollSlug === slug || this.currentScrollSlug === this.items.slice(-1)[0].slug ){
							return;
						}
					}
					this.currentScrollSlug = slug
					history.pushState({},'',`${ this.currentScrollSlug ? "#"+this.currentScrollSlug : this.$route.path }`)
				},500)
			},
			clickHandle(slug){
				this.click = true;
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
	.anchor li.active{
		transform: scale(1.05);
		transition: 0.125s linear;
	}
	.anchor li.active a{
		color: red;
		font-weight: 900;
	}
	.anchor li:hover a{
		color:red;
	}


	.floor2{
		font-size: 1rem;
	}
	.floor3{
		font-size: 0.75rem;
	}

	.floor2~.floor3{ padding-left: 1rem; }
</style>
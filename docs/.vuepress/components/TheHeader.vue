<template>
	<header>
		<div class="fixed" ref="$header">
			<div class="container">
				<router-link to="/">HOME</router-link>
				<div class="image-box">
					<a href="https://github.com/Minseok0917" target="_blank">
						<img :src="require('@image/template/github.png')" alt="github">
					</a>
				</div>
				
			</div>
		</div>
	</header>
</template>
<script>
	import { defineComponent, ref, onMounted }  from '@vue/composition-api';
	export default defineComponent({
		props:['fullPath'],
		data:function(){
			return{
				$header:'',
				box:'100px'
			};
		},
		mounted(){
			const $html = document.children[0];
			window.addEventListener('wheel',(e)=>{
				if( this.fullPath !== '/' ){
					const y = e.deltaY > 0 ? -100 : 0;
					this.$refs.$header.style.transition = '0.5s';
					this.$refs.$header.style.transform = `translateY(${y}%)`
					this.$refs.$header.parentNode.classList[ y < 0 ? 'add' : 'remove']('active');
					$html.style.scrollPaddingTop = y == 0 ? '65px' : '15px' ;
				}
			});
		}
	});
</script>
<style>
	html{
		scroll-padding-top: 65px;
	}
</style>
<style scoped>
	.image-box img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		vertical-align: middle;
	}

	header{ height: 50px; }
	header>.fixed{
		position: fixed;
		z-index: 9999;
		width: 100%;
		height: inherit;
		background: #fff;
		box-shadow: 0 1px 3px #eaeaea;
	}
	header .container{ width: 1440px; margin: 0 auto; height: 100%; display: flex; align-items: center; justify-content: flex-end;  gap: 1rem;}
	header .container .image-box{ width: 25px; height: 25px; }
	header.show{
		animation: show_animation 0.5s linear both;
	}
	header.hidden{
		animation: hidden_animation 0.5s linear both;	
	}

	@keyframes show_animation {
		0%{ transform: translateY(-100%); }	
		100%{ transform: translateY(0%); }
	}

	@keyframes hidden_animation{
		0%{ transform: translateY(0%); }
		100%{ transform: translateY(-100%); }
	}
</style>
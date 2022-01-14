<template>
	<header ref="$header" >
		<div class="fixed">
			{{fullPath}}
		</div>
	</header>
</template>
<script>
	import { defineComponent, ref, onMounted }  from '@vue/composition-api';
	export default defineComponent({
		props:['fullPath'],
		data:function(){
			return{
				$header:''
			};
		},
		mounted(){
			window.addEventListener('wheel',(e)=>{
				if( this.fullPath !== '/' ){
					const y = e.deltaY > 0 ? -100 : 0;
					this.$refs.$header.style.transition = '0.5s';
					this.$refs.$header.style.transform = `translateY(${y}%)`
				}
			});
		}
	});
</script>
<style scoped>
	header{
		height: 65px;
	}
	header>.fixed{
		position: fixed;
		width: 100%;
		height: inherit;
		background: #383838;
	}
		
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
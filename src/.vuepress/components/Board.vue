<template>
	<article class="board-container">
		<h2>{{title}}</h2>
		<div class="item-container">
			<div class="item" v-for="board in boards" :key="board.path" :data-date="board.frontmatter.creationDate">
				<h3 class="title">{{board.frontmatter.title}}</h3>
				<pre class="description">{{board.frontmatter.description}}</pre>
				<a class="btn" :href="'.'+board.path">Read More</a>
				<ul class="tags">
					<li class="tag" v-for="tag in board.frontmatter.tags" :key="tag">#{{tag}}</li>
				</ul>
			</div>
		</div>
	</article>
</template>
<script>
	export default {
		props:['title','boards']
	};
</script>
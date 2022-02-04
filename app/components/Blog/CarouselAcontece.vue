<template>
	<div>
		<h1 class="font-500 smt-20 main-title">Acontece na Teática</h1>

		<v-layout
			style="margin: 0 calc(-8px - 0.4vw) !important"
			:class="`flickity-mobile-${id}`"
		>
			<v-flex xs12 md6 class="spx-4" v-for="(noticia, i) in noticias" :key="i">
				<BlogCard :blog="noticia"></BlogCard>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
	import flick from '@/mixins/Flickity.js'
	export default {
		mixins: [flick],
		props: ['noticias'],
	}
</script>

<style>
</style>
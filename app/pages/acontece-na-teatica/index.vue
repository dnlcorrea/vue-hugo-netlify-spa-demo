<template>
	<div class="white pt-3">
		<v-layout
			class="
				align-center
				fill-height
				justify-center
				c-info-lighten-1
				spt-24
				spb-8
			"
		>
			<h1 class="my-0"><big>ACONTECE NA&nbsp;</big></h1>
			<div>
				<v-img contain style="width: 170px" src="/teatica-logo.png"></v-img>
			</div>
		</v-layout>
		<v-layout class="flex-wrap spx-20 spt-20 spb-24">
			<v-flex
				xs12
				md4
				xl3
				class="spx-4 spy-4"
				v-for="(noticia, i) in noticias"
				:key="i"
			>
				<BlogCard :blog="noticia"></BlogCard>
			</v-flex>
		</v-layout>
		<br />
		<br />
	</div>
</template>
<script>
	import blog from '@/data/blog.js'

	export default {
		computed: {
			noticias() {
				return blog.filter((a) => a.categoria.find((c) => c.slug === 'noticia'))
			},
		},
	}
</script>
<style lang='scss'>
</style>
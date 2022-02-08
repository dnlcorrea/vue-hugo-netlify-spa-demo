<template>
	<v-layout class="spx-sm-24 spx-xs-15 white spt-10 flex-wrap">
		<v-flex xs12 lg6 class="spr-lg-13">
			<BlogCarouselAcontece :noticias="noticias"></BlogCarouselAcontece>
		</v-flex>
		<v-flex xs12 lg6 class="spl-lg-13">
			<BlogCarouselBlog :blogs="blogs"></BlogCarouselBlog>
		</v-flex>
	</v-layout>
</template>

<script>
	import blog from '@/data/blog.js'

	export default {
		computed: {
			blogs() {
				let blogs = []

				blog.forEach((element) => {
					if (!element.categoria.find((c) => c.slug === 'noticia')) {
						blogs.push(element)
					}
				})
				return blogs
			},
			noticias() {
				return blog.filter((a) => a.categoria.find((c) => c.slug === 'noticia'))
			},
		},
	}
</script>

<style>
</style>
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
			<h1 class="my-0" v-if="imageLoaded"><big>ACONTECE NA&nbsp;</big></h1>
			<div>
				<v-img
					@load="imageLoaded = true"
					contain
					style="width: 170px"
					src="/teatica-logo.png"
				></v-img>
			</div>
		</v-layout>
		<h2 class="text-center mt-5 bold" v-if="categoriaName">
			<span class="c-primary spx-5"
				><i
					class="fas fa-bookmark mr-1"
					style="font-size: 18px; margin-bottom: 1px"
				></i>
				{{ categoriaName }}</span
			>
		</h2>
		<v-layout class="spt-20 spl-24 spr-20">
			<v-flex xs12 md3 lg2 class="mt-2 font-800">
				<i class="fas fa-bookmark mr-1" style="font-size: 16px"></i>
				CATEGORIAS

				<div v-for="i in 3" :key="i" class="my-2">
					<a href="" class="no-underline c-primary-darken-3--text">
						<i class="fas fa-arrow-right mr-1" style="font-size: 16px"></i>

						Categoria {{ i }}</a
					>
				</div>
			</v-flex>
			<v-flex xs12 md9 lg10>
				<v-layout class="flex-wrap spb-24">
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
			</v-flex>
		</v-layout>
		<br />
		<br />
	</div>
</template>
<script>
	import blog from '@/data/blog.js'

	export default {
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				console.log('routeenter', to)
				vm.categoria = to.params.slug
			})
		},
		data() {
			return {
				categoria: '',
				imageLoaded: false,
			}
		},
		computed: {
			categoriaName() {
				let cat = blog.find((a) =>
					a.categoria.find((c) => c.slug === this.categoria)
				)
				let categoria = cat
					? cat.categoria.find((c) => c.slug === this.categoria).nome
					: ''
				return categoria
			},
			noticias() {
				return blog.filter(
					(a) =>
						a.categoria.find((c) => c.slug === 'noticia') &&
						a.categoria.find((c) => c.slug === this.categoria)
				)
			},
		},
	}
</script>
<style lang='scss'>
</style>
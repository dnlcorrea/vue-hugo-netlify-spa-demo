<template>
	<div>
		<h1 class="font-500 smt-20 main-title">Blog Teática</h1>

		<v-layout
			style="margin: 0 calc(-8px - 0.4vw) !important"
			:class="`flickity-mobile-${id}`"
		>
			<v-flex xs12 md6 class="spx-4" v-for="(blog, i) in blogs" :key="i">
				<BlogCard :blog="blog"></BlogCard>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
	import flick from '@/mixins/Flickity.js'
	export default {
		mixins: [flick],
		props: ['blogs'],
	}
</script>

<style>
</style>
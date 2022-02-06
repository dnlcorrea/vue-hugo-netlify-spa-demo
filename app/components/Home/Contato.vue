<template>
	<v-layout
		class="grey lighten-3 relative align-center align-center spy-24 flex-wrap"
		style="z-index: 1"
		id="contato"
	>
		<v-flex
			xs12
			md4
			lg3
			offset-lg1
			offset-xl2
			class="spx-10 titulo c-secondary--text spb-24"
		>
			<div
				data-aos="flip-right"
				data-aos-delay="300"
				class="
					spx-12
					spt-15
					spb-10
					radius
					align-center
					d-flex
					justify-center
					contato-svg-wrap
					mx-auto
				"
				style="background: linear-gradient(143deg, #ffdf42 50%, #efc912 50%)"
			>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="far"
					data-icon="comment-alt-lines"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 576 512"
				>
					<g class="fa-group">
						<path
							style="opacity: 0.4"
							fill="currentColor"
							d="M352 287.9H162.3L79.5 350a9.7 9.7 0 0 1-15.5-7.8V288a64.06 64.06 0 0 1-64-64V64A64.06 64.06 0 0 1 64 0h288a64.06 64.06 0 0 1 64 64v160a63.91 63.91 0 0 1-64 63.9z"
							class="fa-secondary"
						></path>
						<path
							fill="currentColor"
							d="M576 224v160a64.06 64.06 0 0 1-64 64h-32v54.3a9.7 9.7 0 0 1-15.5 7.8L381.7 448H256a64.06 64.06 0 0 1-64-64v-64h160a96.15 96.15 0 0 0 96-96v-64h64a64.06 64.06 0 0 1 64 64z"
							class="fa-primary"
						></path>
					</g>
				</svg>
			</div>
		</v-flex>
		<v-flex
			xs12
			md7
			offset-md1
			lg6
			offset-lg1
			xl5
			class="spx-sm-24 spx-xs-15 spb-24"
		>
			<h1 class="titulo">ENTRE EM CONTATO</h1>

			<v-form>
				<v-text-field color="c-secondary" label="Nome"></v-text-field>
				<v-text-field color="c-secondary" label="E-mail"></v-text-field>
				<v-text-field color="c-secondary" label="Telefone"></v-text-field>
				<v-textarea color="c-secondary" label="Mensagem"></v-textarea>
				<v-layout>
					<v-spacer></v-spacer>
					<v-btn color="c-primary">
						<v-icon
							style="font-size: 15px"
							class="fas fa-paper-plane mr-2"
						></v-icon>
						<b>Enviar</b></v-btn
					>
				</v-layout>
			</v-form>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {}
</script>

<style>
	.contato-svg-wrap {
		width: calc(300px + 6vw);
		height: calc(300px + 6vw);
	}
</style>
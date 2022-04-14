import Vue from 'vue'
Vue.mixin({
    methods: {
	imagine: image => {
            if (image == undefined) return '';
            let barra = image.substring(0, 1) == '/' ? '' : '/';
            return process.env.baseUrl + barra + image;
        }
    }
});
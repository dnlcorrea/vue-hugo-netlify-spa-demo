import Vue from 'vue'
Vue.mixin({


    methods: {
	imagine: image => {
            if (image == undefined) return '';
console.log(process.env.baseUrl)
        let barra = image.substring(0, 1) == '/' ? '' : '/';
        // let d = window.domain ? window.domain : '';
            return  barra + image;
        }
    }
});
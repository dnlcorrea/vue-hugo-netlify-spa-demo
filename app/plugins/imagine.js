import Vue from 'vue'
Vue.mixin({
    methods: {
	imagine: image => {
            if (image == undefined) return '';
            let barra = image.substring(0, 1) == '/' ? '' : '/';
            let url = process.env.baseUrl === 'https://multiversa.com/' ? 'https://ik.imagekit.io/cyrcl27sn/' : 'http://localhost:3000'
console.log(process.env.baseUrl)
            return url + image;
        }
    }
});

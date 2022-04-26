import Vue from 'vue'
Vue.mixin({
    methods: {
	imagine: image => {
            if (image == undefined) return '';
            let barra = image.substring(0, 1) == '/' ? '' : '/';
            let url = process.env.baseUrl === 'http://localhost:3000' ? 'http://localhost:3000' : 'https://ik.imagekit.io/cyrcl27sn/'
console.log(process)
            return url + image;
        }
    }
});

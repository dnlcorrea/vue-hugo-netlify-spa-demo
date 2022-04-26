// import Vue from 'vue'
// Vue.mixin({
//     methods: {
// 	imagine: image => {
//             if (image == undefined) return '';
//             let url = window.location.gost === 'localhost:3000' ? 'localhost:3000/' : 'https://ik.imagekit.io/cyrcl27sn/'
//             return url + image;
//         }
//     }
// });


export default (_context, inject) => {
    let imagine = (image) => {
        if (process.client) {
            if (image == undefined) return '';
            let url = window.location.host === 'localhost:3000' ? 'http://localhost:3000/' : 'https://ik.imagekit.io/cyrcl27sn/'
            return url + image;
        } else {
            return ''
        }
    }
    inject('imagine', )
}
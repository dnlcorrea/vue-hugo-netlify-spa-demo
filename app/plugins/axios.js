

export const axios = require('axios');

export default (_context, inject) => {
    if (process.client) {
        inject('axios', axios)
    }
}
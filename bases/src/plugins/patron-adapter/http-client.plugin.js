//utilizando la libreria axios
const axios = require('axios'); 

const httpClientPlugin = {

    get: async (url) => {
        const resp = await axios.get(url);
        return  resp
    },
    post: async (url, body) => { },
    put: async (url) => {},
    delete:  async(url)=>{}

};

module.exports = {http:httpClientPlugin}
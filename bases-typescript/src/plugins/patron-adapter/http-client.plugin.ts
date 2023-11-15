//utilizando la libreria axios
import  axios  from 'axios'; 

export const httpClientPlugin = {

    get: async (url:string) => {
        const resp = await axios.get(url);
        return  resp
    },
    post: async (url:string, body:any) => { },
    put: async (url:string) => {},
    delete:  async(url:string)=>{}

};


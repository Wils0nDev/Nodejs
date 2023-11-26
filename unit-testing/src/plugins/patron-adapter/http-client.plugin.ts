//utilizando la libreria axios
import  axios  from 'axios'; 

export const httpClientPlugin = {

    get: async (url:string) => {
         const resp = await axios.get(url);
         return  resp.data
    }
    // post: async (url:string, body:any) => {
    //     throw new Error('Not implemented')
    //  },
    // put: async (url:string) => {
    //     throw new Error('Not implemented')
    // },
    // delete:  async(url:string)=>{
    //     throw new Error('Not implemented')
    // }

};


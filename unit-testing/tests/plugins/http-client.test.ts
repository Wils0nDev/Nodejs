import { httpClientPlugin } from "../../src/plugins/patron-adapter/http-client.plugin";

describe('patron-adapter/http-client.plugin.ts', () => {
    test('httpClientPlugin should return a string', async() => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1')
         console.log(data)
        expect(data).toEqual({
            userId:1,
            id:1,
            title:"delectus aut autem",
            completed:  expect.any(Boolean)
        })
    });
});
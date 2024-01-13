import { HttpClient } from "./client/http-client"

console.log('hello opamp')

const opampClient = new HttpClient({
    baseUrl: 'http://127.0.0.1:4320',
});

opampClient.start();

import { HttpClient } from "./client/http-client";

const httpClient = new HttpClient({
    baseUrl: 'http://localhost:4320',
});

httpClient.start();

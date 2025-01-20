import { Flotiq } from '@flotiq/flotiq-api-sdk';
import { createNextMiddleware } from '@flotiq/nextjs-addon';


export const flotiqApiClient = new Flotiq({
    apiKey: process.env.FLOTIQ_API_KEY,
    middleware: [createNextMiddleware()],
});

export const content = flotiqApiClient.content;
export const search = flotiqApiClient.search;
export const helpers = flotiqApiClient.helpers;

import type { Actions } from './$types';

export const actions = {
    default: async ({ fetch, cookies,  request }) => {
        const apiUrl = '/api/images';
        const apiResponse = await fetch(apiUrl, request);
        const responseJson = await apiResponse.json();
        return responseJson
    }
} satisfies Actions;
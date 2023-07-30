import type { Actions } from './$types';

export const actions = {
    default: async ({ cookies,  request }) => {
        const apiUrl = 'http://localhost/api/gallery/images';
        const apiResponse = await fetch(apiUrl, request);
        const responseJson = await apiResponse.json();
        return responseJson
    }
} satisfies Actions;
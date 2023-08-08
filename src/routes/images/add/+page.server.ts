import type { Actions } from './$types';
import { error } from '@sveltejs/kit'

export const actions = {
    default: async ({ fetch, request }) => {
        const apiUrl = '/api/images';
        const apiResponse = await fetch(apiUrl, request);
        const responseJson = await apiResponse.json();
        return responseJson
    }
} satisfies Actions;
import type { Actions } from './$types';
import { error } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'

export const actions = {
    delete: async ({ fetch, params, cookies }) => {
        const apiUrl = '/api/images/' + params.id.toString()
        const apiResponse = await fetch(apiUrl, { method: 'DELETE' });
        const responseJson = await apiResponse.json();
        if (responseJson.status == 'success') {
            const returnUrl = cookies.get('returnUrl') ?? '/images'
            throw redirect(303, returnUrl)
        }
        else {
            throw error(500)
        }
    }
} satisfies Actions;
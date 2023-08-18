import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
    const image = await fetch('/api/images/' + params.id.toString())

    const imageData = await image.json();
    
    if (imageData && imageData['status'] == 'success') {
        return imageData['data']
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;

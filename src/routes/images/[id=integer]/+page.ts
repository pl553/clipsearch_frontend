import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, url, params }) => {
    const image = await fetch('/api/images/' + params.id.toString())

    const imageData = await image.json();
    
    if (imageData && imageData['status'] == 'success') {
        let data = imageData['data']
        return {
            id: data.id,
            sourceUrl: data.source_url
        }
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;

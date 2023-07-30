import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { browser } from '$app/environment';

export const load = (async ({ params }) => {
    const url = 'http://localhost/api/gallery/images';
    if (browser) {
        const url = '/api/gallery/images'
    }
    const gallery = await fetch(url);
    const gj = await gallery.json();
    
    if (gj && gj['status'] == 'success') {
        return gj['data']
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { browser } from '$app/environment';
import { galleryImagesPerPage } from '$lib/config';

export const load = (async ({ fetch, params }) => {
    const url = '/api/gallery/images'
    const countResponse = await fetch(url)
    const countResponseJson = await countResponse.json();
    const count: number = countResponseJson.data.image_count
    const pageCount = Math.ceil(count / galleryImagesPerPage)
    const page = params.page === undefined ? 1 : Number(params.page)

    if (page > pageCount || page < 1) {
        throw error(404, 'Not found')
    }

    const offset = (page - 1) * galleryImagesPerPage
    
    const gallery = await fetch(url + '?' + new URLSearchParams({
        offset: String(offset),
        limit: String(galleryImagesPerPage)
    }))

    const gj = await gallery.json();
    
    if (gj && gj['status'] == 'success') {
        let data = gj['data']
        data.paginationData = {
            currentPage: page,
            pageCount: pageCount,
            basePath: '/gallery'
        }
        return data
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;

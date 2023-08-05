import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { browser } from '$app/environment';
import { galleryImagesPerPage } from '$lib/config';
import type { PaginationData } from '$lib/pagination';

export const load = (async ({ fetch, url }) => {
    const apiPath = '/api/images'
    const countResponse = await fetch(apiPath)
    const countResponseJson = await countResponse.json();
    const count: number = countResponseJson.data.image_count
    const pageCount = Math.ceil(count / galleryImagesPerPage)
    const page = url.searchParams.get('page') === null ? 1 : Number(url.searchParams.get('page'))

    if (page > pageCount || page < 1) {
        throw error(404, 'Not found')
    }

    const offset = (page - 1) * galleryImagesPerPage
    
    const gallery = await fetch(apiPath + '?' + new URLSearchParams({
        offset: String(offset),
        limit: String(galleryImagesPerPage)
    }))

    const gj = await gallery.json();
    
    if (gj && gj['status'] == 'success') {
        let data = gj['data']
        data.paginationData = <PaginationData>{
            currentPage: page,
            pageCount: pageCount,
            baseUrl: url
        }
        return data
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;

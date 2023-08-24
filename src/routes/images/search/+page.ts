import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { browser } from '$app/environment';
import { galleryImagesPerPage } from '$lib/config';
import type { PaginationData } from '$lib/pagination';

export const load = (async ({ fetch, url }) => {
    if (url.searchParams.get('q') === null) {
        let data: any = {}
        data.paginationData = <PaginationData>{
            currentPage: 1,
            pageCount: 0,
            baseUrl: url
        }
        data.images = []
        return data
    }

    const page = url.searchParams.get('page') === null ? 1 : Number(url.searchParams.get('page'))
    const offset = (page - 1) * galleryImagesPerPage

    const images = await fetch('/api/images/search' + '?' + new URLSearchParams({
        q: url.searchParams.get('q') ?? "",
        offset: String(offset),
        limit: String(galleryImagesPerPage)
    }))
    const imagesJson = await images.json();
    
    const count: number = imagesJson.data.totalCount
    const pageCount = Math.ceil(count / galleryImagesPerPage)

    if (!(pageCount == 0 && page == 1) && (page > pageCount || page < 1)) {
        throw error(404, 'Not found')
    }
    
    if (imagesJson['status'] == 'success') {
        let data = imagesJson['data']
        data.paginationData = <PaginationData>{
            currentPage: page,
            pageCount: pageCount,
            baseUrl: url
        }
        return data
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;

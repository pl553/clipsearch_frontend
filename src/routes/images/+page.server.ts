import type { PageServerLoad } from './$types';

export const load = (async ({ cookies, url }) => {
    cookies.set('returnUrl', url.href)
}) satisfies PageServerLoad;
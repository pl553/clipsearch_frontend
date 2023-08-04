<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;

    let pageCount: number
    let page: number

	$: pageCount = data.pageCount;
	$: page = data.page;
</script>

{#each data.image_urls as image_url}
	<img src={image_url} alt={image_url} class="img-thumbnail" width="200" height="200" />
{/each}

<nav aria-label="Page navigation">
	<ul class="pagination">
        {#if page != 1}
            <li class="page-item">
                <a class="page-link" href="/gallery/{page-1}" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
        {/if}
        {#each {length: pageCount} as _, i}
		    <li class="page-item"><a class="page-link {page === i+1 ? 'active' : ''}" href="/gallery/{i+1}">{i+1}</a></li>
        {/each}
		{#if page != pageCount}
            <li class="page-item">
                <a class="page-link" href="/gallery/{page+1}" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        {/if}
	</ul>
</nav>

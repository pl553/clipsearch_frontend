<script lang="ts">
    import { base } from '$app/paths';
import type { PaginationData } from '$lib/pagination';

    export let paginationData: PaginationData;

    $: currentPage = paginationData.currentPage;
    $: pageCount = paginationData.pageCount;
    $: basePath = paginationData.basePath;
</script>

<nav aria-label="Page navigation">
	<ul class="pagination justify-content-center">
        <li class="page-item {currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="{basePath}/{currentPage-1}" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        {#each {length: pageCount} as _, i}
		    <li class="page-item"><a class="page-link {currentPage === i+1 ? 'active' : ''}" href="{basePath}/{i+1}">{i+1}</a></li>
        {/each}
        <li class="page-item {currentPage === pageCount ? 'disabled' : ''}">
            <a class="page-link" href="{basePath}/{currentPage+1}" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
	</ul>
</nav>

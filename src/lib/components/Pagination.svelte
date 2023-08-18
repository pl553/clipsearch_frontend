<script lang="ts">
	import { base } from '$app/paths';
	import type { PaginationData } from '$lib/pagination';

	export let paginationData: PaginationData;

	$: currentPage = paginationData.currentPage;
	$: pageCount = paginationData.pageCount;
	$: baseUrl = paginationData.baseUrl;

	function makePageUrl(baseUrl: URL, page: number): string {
		let pageUrl = new URL(baseUrl);
		pageUrl.searchParams.set('page', page.toString());
		return pageUrl.toString();
	}
</script>

{#if pageCount > 0}
	<nav aria-label="Page navigation">
		<ul class="pagination flex-wrap justify-content-center">
			<li class="page-item {currentPage === 1 ? 'disabled' : ''}">
				<a
					class="page-link"
					href={makePageUrl(baseUrl, currentPage - 1)}
					aria-label="Previous"
					data-sveltekit-preload-data="tap"
				>
					<span aria-hidden="true">&laquo;</span>
				</a>
			</li>
			{#each { length: pageCount } as _, i}
				<li class="page-item">
					<a
						class="page-link {currentPage === i + 1 ? 'active' : ''}"
						href={makePageUrl(baseUrl, i + 1)}
						data-sveltekit-preload-data="tap"
					>
						{i + 1}
					</a>
				</li>
			{/each}
			<li class="page-item {currentPage === pageCount ? 'disabled' : ''}">
				<a
					class="page-link"
					href={makePageUrl(baseUrl, currentPage + 1)}
					aria-label="Next"
					data-sveltekit-preload-data="tap"
				>
					<span aria-hidden="true">&raquo;</span>
				</a>
			</li>
		</ul>
	</nav>
{/if}

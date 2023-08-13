<script lang="ts">
	export let data;

	import Pagination from '$lib/components/Pagination.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import { page } from '$app/stores';
</script>

<form class="mb-3" method="GET">
	<div class="input-group rounded">
		<input
			type="search"
			name="q"
			value={$page.url.searchParams.get('q') ?? ''}
			class="form-control rounded"
			placeholder="Search"
			aria-label="Search"
			aria-describedby="search-addon"
		/>
		<button class="btn btn-outline-primary" type="submit"> Search </button>
	</div>
</form>

<Pagination paginationData={data.paginationData} />

<Gallery images={data.images} />

<Pagination paginationData={data.paginationData} />

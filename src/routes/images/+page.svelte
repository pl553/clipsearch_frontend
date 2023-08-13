<script lang="ts">
	export let data;

    import Pagination from '$lib/components/Pagination.svelte'
    import Gallery from '$lib/components/Gallery.svelte'
</script>

<Pagination paginationData={data.paginationData} />

<Gallery images={data.images} />

<Pagination paginationData={data.paginationData} />
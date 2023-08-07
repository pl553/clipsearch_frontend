<script lang="ts">
	export let data;

    import Pagination from '$lib/components/Pagination.svelte'
</script>

<Pagination paginationData={data.paginationData} />

<div class="gallery">
{#each data.images as image}
    <a href='/images/{image.id}'>
        <div class="image-box img-thumbnail">
	        <img src={image.source_url} alt={image.source_url} />
        </div>
    </a>
{/each}
</div>

<Pagination paginationData={data.paginationData} />

<style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        max-width: 940px;
        margin: 0 auto;
        padding: 10px 0px;
    }

    .image-box {
        width: 175px;
        height: 175px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image-box img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
</style>
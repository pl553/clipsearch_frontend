<script lang="ts">
	export let images: any
</script>

<div class="gallery">
    {#each images as image}
        <a href='/images/{image.id}'>
            <div class="image-box img-thumbnail">
                <img src={image.sourceUrl} alt={image.sourceUrl} />
            </div>
        </a>
    {/each}
</div>

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
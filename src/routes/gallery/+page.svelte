<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

{#each data.image_urls as image_url}
    <img src={image_url} alt={image_url} width=200px/>
{/each}

<br>
<a href="/">home</a>

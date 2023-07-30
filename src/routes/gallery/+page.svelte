<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
    export let form: any;
</script>

{#each data.image_urls as image_url}
    <img src={image_url} alt={image_url} width=200px/>
{/each}

<br>
<form method="POST" action="/gallery">
    <label>
        Add an image:
        <input
            name="url"
            autocomplete="off"
            required
        />
    </label>
</form>
<br>
{#if form?.status == "success"}
    <p>Successfully added an image</p>
{/if}
{#if form?.status == "fail"}
    <p>{form.data.url}</p>
{/if}
<a href="/">home</a>

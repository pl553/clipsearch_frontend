<script lang="ts">
    import type { PageData } from './$types';
    import { enhance } from '$app/forms';

    export let data: PageData;
    export let form: any;
</script>

{#each data.image_urls as image_url}
    <img src={image_url} alt={image_url} class="img-thumbnail" width="200" height="200"/>
{/each}

<br>
<h2>
    
</h2>
<form method="POST" use:enhance>
    <label for="url" class="form-label">Image url</label>
    <input
        type="text"
        class="form-control {form?.status == 'fail' ? 'is-invalid' : ''}"
        name="url"
        autocomplete="off"
        required
    />
    {#if form?.status == "success"}
        <p>Successfully added an image</p>
    {/if}
    {#if form?.status == "fail"}
        <div class="invalid-feedback">
            {form.data.url}
        </div>
    {/if}
</form>

<script lang="ts">
    import { enhance } from '$app/forms';

    export let form: any;
</script>

<h2>
    Add image to gallery
</h2>
<form method="POST" class="mb-3" use:enhance>
    <div>
        <label for="url" class="form-label">Image URL</label>
        <input
            type="text"
            class="form-control"
            name="url"
            autocomplete="off"
            required
        />
    </div>      
</form>

{#if form?.status == "success"}
<div class="alert alert-success" role="alert">
    Image added.
</div>
{/if}
{#if form?.status == "fail"}
<div class="alert alert-danger" role="alert">
    {form.data.url}
</div>
{/if}
{#if form?.status == "error"}
<div class="alert alert-danger" role="alert">
    Internal error. Failed to process image
</div>      
{/if}
<script lang="ts">
    import { enhance } from '$app/forms';

    export let form: any;
</script>

<h2>
    Add image to gallery
</h2>
<form method="POST" class="mb-3" use:enhance>
    <label for="url" class="form-label">Image url</label>
    <input
        type="text"
        class="form-control {form?.status == 'fail' ? 'is-invalid' : ''}"
        name="url"
        autocomplete="off"
        required
    />
    {#if form?.status == "fail"}
        <div class="invalid-feedback">
            {form.data.url}
        </div>
    {/if}
</form>

{#if form?.status == "success"}
<div class="alert alert-success" role="alert">
    Image added.
</div>
{/if}
{#if form?.status == "error"}
<div class="alert alert-danger" role="alert">
    Internal error. Failed to process image
</div>      
{/if}
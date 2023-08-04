<script lang="ts">
    import { enhance } from '$app/forms';

    export let form: any;
</script>

<h2>
    Add image to gallery
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
<script lang="ts">
	export let data;
</script>

<a href={data.sourceUrl} target="_blank">
    <img class="img-fluid" src="{data.sourceUrl}" alt="{data.sourceUrl}">
</a>

<div class="row">
    <div class="col-2">
        Image ID
    </div>
    <div class="col">
        {data.id}
    </div>
</div>
<div class="row">
    <div class="col-2">
        Source URL
    </div>
    <div class="col text-break">
        <a href={data.sourceUrl}>{data.sourceUrl}</a>
    </div>
</div>
<div class="row mb-3">
    <div class="col-2">
        SHA256 Hash
    </div>
    <div class="col text-break">
        {data.sha256}
    </div>
</div>
<form method="POST" action="?/delete">
    <button type="submit" class="btn btn-danger">Delete</button>
</form>
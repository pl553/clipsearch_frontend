<script lang="ts">
	export let data;
</script>

<div>
    <p>Image id: {data.id}</p>
    <p>Source url: <a href={data.sourceUrl}>{data.sourceUrl}</a></p>
    <p>Sha256 hash: {data.sha256}</p>
</div>

<a href={data.sourceUrl} target="_blank">
    <img class="img-fluid" src="{data.sourceUrl}" alt="{data.sourceUrl}">
</a>
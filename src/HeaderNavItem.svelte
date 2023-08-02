<script lang="ts">
	import { page } from '$app/stores';

	export let path: string;
	export let name: string;
</script>

<li class="nav-item">
	<a href={path} class="nav-link {$page.url.pathname === path ? 'active' : ''}">
		{name}
	</a>
</li>

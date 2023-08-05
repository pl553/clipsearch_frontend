<script lang="ts">
	import '../app.scss';

	import { page } from '$app/stores';

	import HeaderNavItem from '$lib/components/HeaderNavItem.svelte';
</script>

<div class="container">
	<header class="d-flex justify-content-center py-3">
		<ul class="nav nav-pills">
			<HeaderNavItem path="/" routeId="/" name="Home" />
			<HeaderNavItem path="/images" routeId="/images" name="Images" />
			<HeaderNavItem path="/images/add" routeId="/gallery/add" name="Add image" />
		</ul>
	</header>
	<slot />
</div>

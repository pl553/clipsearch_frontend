<script lang="ts">
	import '../app.scss';

  import { page } from '$app/stores';

	import HeaderNavItem from '../HeaderNavItem.svelte';
</script>

<div class="container">
  <header class="d-flex justify-content-center py-3">
    <ul class="nav nav-pills">
      <HeaderNavItem path='/' name='Home' />
			<HeaderNavItem path='/gallery' name='Gallery' />
    </header>
    <slot />
</div>

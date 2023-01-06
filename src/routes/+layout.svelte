<script>
	import '../app.css';
</script>

<div class="view-wrapper">
	<nav>
		<a prerender href="/">Home</a>
		<a prerender href="/joints-overview">Overview</a>
		<a prerender href="/editor">Editor</a>
	</nav>
	<main>
		<slot />
	</main>
</div>
<style>
	.view-wrapper {
		width: 100%;
		height: 100%;
		background-color: #fafbfc;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
	}

	nav {
		padding: 0.875rem 1.25rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 2rem;
	}

	main {
		flex-grow: 1;
		width: 100%;
		overflow: hidden;
	}

</style>
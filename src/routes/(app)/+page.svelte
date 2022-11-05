<script>
	import hands from '$lib/images/hands.png';
</script>

<svelte:head>
	<title>Helply - Home</title>
</svelte:head>

<section>
	<div class="hero">
		<div class="hero-text">
			<h1>Are you worried about your friend?</h1>
			<div class="divider"/>
			<p>
				Help a friend and send a call for help. We will reach out
				to your and ensure he gets the professional help he needs
				in order to turn his life around.
			</p>
			<button class="cto">I'm worried about a friend</button>
		</div>
		<div class="hero-image">
			<img src={hands} alt="Hero">
			<div class="img-background"/>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.hero {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: auto;
	}

	.divider {
		width: 180px;
		height: 2px;
		background-color: var(--color-theme-1);
		margin: 20px 0;
	}

	h1 {
		text-align: start;
		font-weight: bold;
		font-size: 4em;
	}

	p {
		width: 430px;
	}

	.hero-image {
		position: relative;
		margin-left: 100px;
	}

	.hero-image img {
		position: relative;
		z-index: 1;
	}

	.img-background {
		position: absolute;
		top: 15px;
		left: 15px;
		width: 100%;
		height: 100%;
		background-color: var(--color-theme-1);
		border-radius: var(--border-radius);
		z-index: 0;
	}
</style>
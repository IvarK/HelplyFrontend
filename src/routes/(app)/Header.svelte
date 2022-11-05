<script>
	import aalto from '$lib/images/aalto.png';
</script>

<header>
	<div class="corner">
		<a href="/">
			<span class="logo pink">helply.io</span>
			<div class="divider">x</div>
			<img src={aalto} alt="Aalto">
		</a>
	</div>
	<nav>
		<ul>
			<li>
				<a href="/">How does it work</a>
			</li>
			<li>
				<a href="/#">about</a>
			</li>
			<li>
				<a href="/#">for organizations</a>
			</li>
		</ul>

		<button class="cto">I'm worried about a friend</button>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		width: 50%;
		margin: auto;
		margin-top: 20px;
	}

	.corner .logo {
		font-size: 1.5em;
		font-weight: bold;
	}

	.corner .divider {
		color: black;
		margin: 0 8px;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1rem;
		color: var(--color-text);
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		color: var(--color-theme-1);
	}

	a:hover {
		color: var(--color-theme-1);
	}

	.cto {
		margin-left: 1em;
	}
</style>

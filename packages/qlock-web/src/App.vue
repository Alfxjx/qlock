<template>
	<div id="app">
		<div class="wrapper">
			<QlockTwo></QlockTwo>
		</div>
		<footer>
			QlockTwo © by
			<a
				href="https://www.abandon.work"
				target="_blank"
				rel="noopener noreferrer"
				>Alfxjx</a
			>
			with
			<a href="https://github.com/Alfxjx/qlock-web" target="_blank" rel="noopener noreferrer">
				<span>♥</span>
			</a>
		</footer>
	</div>
</template>

<script>
import QlockTwo from "./components/QlockTwo.vue";

export default {
	name: "App",
	components: {
		QlockTwo,
	},
};
</script>

<style>
body {
	margin: 0;
}
#app {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #fefefe;
	font-family: Monaco, sans-serif;
}
.wrapper {
	flex: 1;
	display: flex;
	align-items: center;
}
footer {
	flex: 0;
	padding: 1rem 0;
	color: rgb(128, 128, 128);
}
a {
	color: #0bc2bf;
	text-decoration: none;
}
span {
	color: red;
}
</style>

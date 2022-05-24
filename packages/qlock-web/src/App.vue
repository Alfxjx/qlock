<template>
	<div id="app" :style="{ background: computedBg }">
		<div class="wrapper">
			<QlockTwo></QlockTwo>
			<footer>
				<button @click="toggleTheme()">{{ icon }}</button>
				QlockTwo © by
				<a
					href="https://www.abandon.work"
					target="_blank"
					rel="noopener noreferrer"
					>Alfxjx</a
				>
				with
				<a
					href="https://github.com/Alfxjx/qlock-web"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>♥</span>
				</a>
			</footer>
		</div>
	</div>
</template>

<script>
import QlockTwo from "./components/QlockTwo.vue";

export default {
	name: "App",
	components: {
		QlockTwo,
	},
	data() {
		return {
			computedBg: "#f2f4f6", // #191919
		};
	},
	mounted() {
		this.setBg();
	},
	computed: {
		icon() {
			return this.computedBg === "#f2f4f6" ? "🌞" : "🌙";
		},
	},
	methods: {
		setBg() {
			const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
			this.computedBg = themeMedia.matches ? "#f2f4f6" : "#191919";
		},
		toggleTheme() {
			this.computedBg = this.computedBg === "#f2f4f6" ? "#191919" : "#f2f4f6";
		},
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
	justify-content: center;
	font-family: Monaco, sans-serif;
}
.wrapper {
	display: flex;
	flex-direction: column;
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
button {
	color: rgb(128, 128, 128);
	background: transparent;
	border: none;
	cursor: pointer;
	font-family: Monaco, sans-serif;
	border-radius: 4px;
	background: #0bc2bf1a;
}
button:hover {
	border: 1px solid #0bc2bf;
}
span {
	color: red;
}
</style>

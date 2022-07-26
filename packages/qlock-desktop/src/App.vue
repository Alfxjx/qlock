<script setup lang="ts">
import QlockTwo from './components/QlockTwo.vue'
</script>

<template>
  <div id="app">
    <div class="wrapper">
      <QlockTwo></QlockTwo>
      <footer>
        QlockTwo <span class="copy">©</span> by
        <a href="https://www.abandon.work" target="_blank" rel="noopener noreferrer">Alfxjx</a>
        with
        <a href="https://github.com/Alfxjx/qlock-web" target="_blank" rel="noopener noreferrer">
          <span>♥</span>
        </a>
      </footer>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}

:root {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica, Arial, sans-serif;
}

*,
::after,
::before {
  font-family: inherit;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'GoodfonT', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-image: linear-gradient(to top, #8360c3, #2ebf91);
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer {
  flex: 0;
  padding: 1rem 0;
  color: #191919;
}

a {
  color: #2ebf91;
  text-decoration: none;
}

span.copy {
  font-size: 0.75rem;
  color: #191919;
  height: 2rem;
}

span {
  color: red;
}
</style>

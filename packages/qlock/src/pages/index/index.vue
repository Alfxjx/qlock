<template>
  <div id="appClock">
    <div class="main-clock">
      <QlockTwo />
    </div>
    <div class="notes">
      <input type="text" value="此时此刻，想记住什么？"/>
      <button>确定</button>
    </div>
  </div>
</template>

<script>
import QlockTwo from "./components/QlockTwo.vue";

export default {
  data() {
    return {
      notes: ''
    };
  },
  methods: {},
  components: {
    QlockTwo,
  },
};
</script>

<style>
body {
  margin: 0;
}
#appClock {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.about {
  /* position: absolute;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%; */
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.2rem;
  color: #222;
}
</style>

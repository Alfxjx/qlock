<template>
  <div id="appClock">
    <div class="main-clock">
      <QlockTwo />
    </div>
    <div>Times on Flagstone</div>
    <div class="notes">
      <input 
        class="input" 
        type="text" 
        ref="input" 
        placeholder="此时此刻，想立个flag?" 
        v-model="text" 
        :selection-start="0" 
        :selection-end="text.length" 
        @click="selectAll"
      />
      <button @click="saveText()" :class="{active: buttonText==='已保存'}">{{buttonText}}</button>
    </div>
    <div class="explain">
      <p>石板时钟，英文名称是 Time on Flagstone;</p>
      <p>希望你也可以在这里立一个flag。</p>
      <p>注意一次只立一个就好啦。</p>
      <p>最重要的是要完成它。加油^^</p>
    </div>
  </div>
</template>

<script>
import QlockTwo from "./components/QlockTwo.vue";

export default {
  data() {
    return {
      text: '',
      buttonText: '确定'
    };
  },
  mounted() {
    wx.showShareMenu({ menus: ['shareAppMessage', 'shareTimeline'] });
    const store = wx.getStorageSync("text");
    if (store !== null) {
      console.log("getStorageSync: " + store);
      this.text = store;
    }
  },
  methods: {
    saveText() {
      console.log("text: " + this.text);
      wx.setStorageSync("text", this.text);
      this.buttonText = "已保存";
      setTimeout(() => {
        this.buttonText = "确定"
      }, 2000);
    },
    clearText() {
      this.text = "";
      wx.removeStorageSync("text");
      this.buttonText = "已清除";
      setTimeout(() => {
        this.buttonText = "清除"
      }, 2000);
    },
    selectAll() {},
  },
  onShareAppMessasge() {
    return {
      title: "石板钟",
      path: "/pages/index/main"
    }
  },
  onShareTimeLine() {
    return {
      title: "石板钟",
      path: "/pages/index/main"
    }
  },
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
  background: rgb(250,250,250);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0.5rem 0; */
}
.main-clock {
  margin: 0.5rem 0;
}
.notes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input {
  width: 100%;
  padding: 10px 15px;
  margin: 0.25rem 0;
  border: 1px solid #f3f5f6;
  background: #fff;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
}
button {
  padding: 2px 1rem;
  border-radius: 3px;
  box-shadow: 0px 0px 20px rgba(150,150,150,0.1);
}
.active {
  background: rgb(38, 172, 12);
  color: #f3f5f7;
}
.explain {
  padding: 1rem 0.25rem 0;
  text-align: center;
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

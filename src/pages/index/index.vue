<template>
  <div id="appClock" :class="[isSimple?'center':'start', isDark?'dark':'light']">
    <div class="main-clock">
      <QlockTwo />
    </div>
    <div v-show="!isSimple" :class="[isDark?'dark-font':'light-font']">Times on Flagstone</div>
    <div v-show="!isSimple" class="notes">
      <input
        class="input"
        type="text"
        ref="input"
        placeholder="此时此刻，想立个flag?"
        v-model="text"
        :selection-start="0"
        :selection-end="text.length"
        @click="selectAll"
        :class="[isDark?'dark-input':'']"
      />
      <button @click="saveText()" :class="[buttonText==='已保存'?'active':'', isDark?'dark dark-font':'light light-font']">{{buttonText}}</button>
    </div>
    <div v-show="!isSimple" class="explain" :class="[isDark?'dark-font':'light-font']">
      <p>石板时钟，英文名称是 Time on Flagstone;</p>
      <p>希望你也可以在这里立一个flag。</p>
      <p>注意一次只立一个就好啦。</p>
      <p>最重要的是要完成它。加油^^</p>
    </div>
    <div class="btn-group">
      <button class="btn-simple" :class="[isDark?'dark dark-font':'light light-font']" @click="toggleSimple()">{{isSimple?"简":"全"}}</button>
      <button class="btn-simple" :class="[isDark?'dark dark-font':'light light-font']" @click="toggleDark()">{{isDark?"月":"日"}}</button>
    </div>
  </div>
</template>

<script>
import QlockTwo from "./components/QlockTwo.vue";

export default {
  data() {
    return {
      text: '',
      buttonText: '确定',
      isSimple: false,
      isDark: true
    };
  },
  mounted() {
    wx.showShareMenu({ menus: ['shareAppMessage', 'shareTimeline'] });
    const store = wx.getStorageSync("text");
    const simple = wx.getStorageSync("isSimple");
    const dark = wx.getStorageSync("isDark");
    if (simple !== null) {
      this.isSimple = simple
    }
    if (dark !== null) {
      this.isDark = dark
    }
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
    toggleSimple() {
      this.isSimple = !this.isSimple
      wx.setStorageSync("isSimple", this.isSimple);
    },
    toggleDark() {
      this.isDark = !this.isDark
      wx.setStorageSync("isDark", this.isDark);
    }
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

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0.5rem 0; */
}
.light {
  background: rgb(250,250,250);
}
.light-font {
  color: #000;
}
.dark {
  background-color: #191919;
}
.dark-font {
  color: rgb(128,128,128);
}
.dark-input {
  background-color: rgb(55,55,55)!important;
  border: none!important;
}
.center {
  justify-content: center;
}
.start {
  justify-content: flex-start;
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
.btn-group {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.btn-simple {
  font-size: 0.25rem;
}
</style>

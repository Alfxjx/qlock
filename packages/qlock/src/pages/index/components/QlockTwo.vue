<template>
  <div class="main">
    <div class="clock-wrapper">
      <div class="clock-row" v-for="(item, idx) in matrix" :key="item">
        <div
          class="clock"
          v-for="(letter, index) in item"
          :key="letter + index"
          :class="{ white: white[idx][index] === 1 }"
        >
          {{ letter }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let interval;
export default {
  data() {
    return {
      origin: [
        "itlisasampm",
        "acquarterdc",
        "twentyfivex",
        "halfstenfto",
        "pasterunine",
        "onesixthree",
        "fourfivetwo",
        "eighteleven",
        "seventwelve",
        "tenseoclock",
      ],
      white: new Array(10).fill(new Array(11).fill(0)),
      active: {
        min: "",
        prep: "",
        outHour: "",
        state: "",
      },
      minT: "",
    };
  },
  created() {
    // for (let i = 0; i < 10; i++) {
    // 	this.white[i] = new Array(11).fill(0);
    // }
  },
  mounted() {
    interval = setInterval(() => {
      this.minT = new Date().getMinutes();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(interval);
  },
  computed: {
    matrix() {
      let res = [];
      this.origin.forEach((i) => {
        res.push([...i.toUpperCase()]);
      });
      return res;
    },
  },
  methods: {
    // 用于修改分钟数的方法
    update234(type) {
      let toLine = [];
      switch (type) {
        case "0":
          this.$set(this.white, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 3, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
        case "five":
          this.$set(this.white, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 2, [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0]);
          toLine = [...this.white[3]];
          for (let i = 0; i < toLine.length; i++) {
            if (i < 9) {
              toLine[i] = 0;
            }
          }
          this.$set(this.white, 3, toLine);
          break;
        case "ten":
          this.$set(this.white, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          toLine = [...this.white[3]];
          for (let i = 0; i < toLine.length; i++) {
            if (i < 9) {
              toLine[i] = 0;
            }
          }
          toLine[5] = 1;
          toLine[6] = 1;
          toLine[7] = 1;
          this.$set(this.white, 3, toLine);
          break;
        case "quarter":
          this.$set(this.white, 1, [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]);
          this.$set(this.white, 2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          toLine = [...this.white[3]];
          for (let i = 0; i < toLine.length; i++) {
            if (i < 9) {
              toLine[i] = 0;
            }
          }
          this.$set(this.white, 3, toLine);
          break;
        case "twenty":
          this.$set(this.white, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 2, [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]);
          toLine = [...this.white[3]];
          for (let i = 0; i < toLine.length; i++) {
            if (i < 9) {
              toLine[i] = 0;
            }
          }
          this.$set(this.white, 3, toLine);
          break;
        case "twentyfive":
          this.$set(this.white, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 2, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]);
          toLine = [...this.white[3]];
          for (let i = 0; i < toLine.length; i++) {
            if (i < 9) {
              toLine[i] = 0;
            }
          }
          this.$set(this.white, 3, toLine);
          break;
        case "half":
          this.$set(this.white, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 3, [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
          break;
      }
    },
  },
  watch: {
    minT: function () {
      let hour = new Date().getHours();
      if (hour < 12) {
        this.active.state = "am";
        this.$set(this.white, 0, [1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0]);
        if (hour === 0) {
          this.active.outHour = 12;
        } else {
          this.active.outHour = hour;
        }
      } else if (hour === 12) {
        this.active.state = "pm";
        this.$set(this.white, 0, [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1]);
        this.active.outHour = hour;
      } else {
        this.active.state = "pm";
        this.$set(this.white, 0, [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1]);
        this.active.outHour = hour - 12;
      }
      let min = new Date().getMinutes();
      console.log(min);
      if (0 <= min && min < 5) {
        this.active.min = "0";
        this.update234(this.active.min);
        this.active.prep = "oclock";
      } else if (5 <= min && min < 10) {
        this.active.min = "five";
        this.update234(this.active.min);
        this.active.prep = "past";
        let toLine = [...this.white[3]];
        for (let j = 9; j < 11; j++) {
          toLine[j] = 0;
        }
        this.$set(this.white, 3, toLine);
        let pastLine = [...this.white[4]];
        for (let i = 0; i < 4; i++) {
          pastLine[i] = 1;
        }
        this.$set(this.white, 4, pastLine);
      } else if (10 <= min && min < 15) {
        this.active.min = "ten";
        this.update234(this.active.min);
        this.active.prep = "past";
        let toLine = [...this.white[3]];
        for (let j = 9; j < 11; j++) {
          toLine[j] = 0;
        }
        this.$set(this.white, 3, toLine);
        let pastLine = [...this.white[4]];
        for (let i = 0; i < 4; i++) {
          pastLine[i] = 1;
        }
        this.$set(this.white, 4, pastLine);
      } else if (15 <= min && min < 20) {
        this.active.min = "quarter";
        this.update234(this.active.min);
        this.active.prep = "past";
        let toLine = [...this.white[3]];
        for (let j = 9; j < 11; j++) {
          toLine[j] = 0;
        }
        this.$set(this.white, 3, toLine);
        let pastLine = [...this.white[4]];
        for (let i = 0; i < 4; i++) {
          pastLine[i] = 1;
        }
        this.$set(this.white, 4, pastLine);
      } else if (20 <= min && min < 25) {
        this.active.min = "twenty";
        this.update234(this.active.min);
        this.active.prep = "past";
        let toLine = [...this.white[3]];
        for (let j = 9; j < 11; j++) {
          toLine[j] = 0;
        }
        this.$set(this.white, 3, toLine);
        let pastLine = [...this.white[4]];
        for (let i = 0; i < 4; i++) {
          pastLine[i] = 1;
        }
        this.$set(this.white, 4, pastLine);
      } else if (25 <= min && min < 30) {
        this.active.min = "twentyfive";
        this.update234(this.active.min);
        this.active.prep = "past";
        let toLine = [...this.white[3]];
        for (let j = 9; j < 11; j++) {
          toLine[j] = 0;
        }
        this.$set(this.white, 3, toLine);
        let pastLine = [...this.white[4]];
        for (let i = 0; i < 4; i++) {
          pastLine[i] = 1;
        }
        this.$set(this.white, 4, pastLine);
      } else if (30 <= min && min < 35) {
        this.active.min = "half";
        this.update234(this.active.min);
        this.active.prep = "past";
        let toLine = [...this.white[3]];
        for (let j = 9; j < 11; j++) {
          toLine[j] = 0;
        }
        this.$set(this.white, 3, toLine);
        let pastLine = [...this.white[4]];
        for (let i = 0; i < 4; i++) {
          pastLine[i] = 1;
        }
        this.$set(this.white, 4, pastLine);
      } else if (35 <= min && min < 40) {
        this.active.min = "twentyfive";
        this.update234(this.active.min);
        this.active.prep = "to";
        if (this.active.outHour === 12) {
					this.active.outHour = 1;
				} else {
					this.active.outHour += 1;
				}
        let toLine = [...this.white[3]];
        for (let j = 9; j < 11; j++) {
          toLine[j] = 1;
        }
        this.$set(this.white, 3, toLine);
        let pastLine = [...this.white[4]];
        for (let i = 0; i < 4; i++) {
          pastLine[i] = 0;
        }
        this.$set(this.white, 4, pastLine);
      } else if (40 <= min && min < 45) {
        this.active.min = "twenty";
        this.update234(this.active.min);
        this.active.prep = "to";
        if (this.active.outHour === 12) {
					this.active.outHour = 1;
				} else {
					this.active.outHour += 1;
				}
        let toLine = [...[...this.white[3]]];
        for (let j = 9; j < 11; j++) {
          toLine[j] = 1;
        }
        this.$set(this.white, 3, toLine);
        let pastLine = [...this.white[4]];
        for (let i = 0; i < 4; i++) {
          pastLine[i] = 0;
        }
        this.$set(this.white, 4, pastLine);
      } else if (45 <= min && min < 50) {
        this.active.min = "quarter";
        this.update234(this.active.min);
        this.active.prep = "to";
        if (this.active.outHour === 12) {
					this.active.outHour = 1;
				} else {
					this.active.outHour += 1;
				}
        let toLine = [...[...this.white[3]]];
        for (let j = 9; j < 11; j++) {
          toLine[j] = 1;
        }
        this.$set(this.white, 3, toLine);
        let pastLine = [...this.white[4]];
        for (let i = 0; i < 4; i++) {
          pastLine[i] = 0;
        }
        this.$set(this.white, 4, pastLine);
      } else if (50 <= min && min < 55) {
        this.active.min = "ten";
        this.update234(this.active.min);
        this.active.prep = "to";
        if (this.active.outHour === 12) {
					this.active.outHour = 1;
				} else {
					this.active.outHour += 1;
				}
        let toLine = [...[...this.white[3]]];
        for (let j = 9; j < 11; j++) {
          toLine[j] = 1;
        }
        this.$set(this.white, 3, toLine);
        let pastLine = [...this.white[4]];
        for (let i = 0; i < 4; i++) {
          pastLine[i] = 0;
        }
        this.$set(this.white, 4, pastLine);
      } else if (55 <= min && min < 60) {
        this.active.min = "five";
        this.update234(this.active.min);
        this.active.prep = "to";
 				if (this.active.outHour === 12) {
					this.active.outHour = 1;
				} else {
					this.active.outHour += 1;
				}
        let toLine = [...[...this.white[3]]];
        for (let j = 9; j < 11; j++) {
          toLine[j] = 1;
        }
        this.$set(this.white, 3, toLine);
        let pastLine = [...this.white[4]];
        for (let i = 0; i < 4; i++) {
          pastLine[i] = 0;
        }
        this.$set(this.white, 4, pastLine);
      }
      switch (this.active.outHour) {
        case 1:
          this.$set(this.white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 5, [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
        case 2:
          this.$set(this.white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]);
          this.$set(this.white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
        case 3:
          this.$set(this.white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 5, [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
          this.$set(this.white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
        case 4:
          this.$set(this.white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 6, [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
        case 5:
          this.$set(this.white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 6, [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]);
          this.$set(this.white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
        case 6:
          this.$set(this.white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 5, [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]);
          this.$set(this.white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
        case 7:
          this.$set(this.white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 8, [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
        case 8:
          this.$set(this.white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 7, [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
        case 9:
          this.$set(this.white, 4, [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]);
          this.$set(this.white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
        case 10:
          this.$set(this.white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 9, [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
        case 11:
          this.$set(this.white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 7, [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
          this.$set(this.white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
        case 12:
          this.$set(this.white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.$set(this.white, 8, [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
          this.$set(this.white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          break;
      }
      let clockLine, pastLine, toLine;
      switch (this.active.prep) {
        case "oclock":
          toLine = [...this.white[3]];
          toLine[10] = 0;
          toLine[9] = 0;
          this.$set(this.white, 3, toLine);
          pastLine = [...this.white[4]];
          pastLine[0] = 0;
          pastLine[1] = 0;
          pastLine[2] = 0;
          pastLine[3] = 0;
          this.$set(this.white, 4, pastLine);
          clockLine = [...this.white[9]];
          for (let i = 0; i < clockLine.length; i++) {
            if (i >= 5) {
              clockLine[i] = 1;
            }
          }
          this.$set(this.white, 9, clockLine);
          break;
        case "past":
          toLine = [...this.white[3]];
          toLine[10] = 0;
          toLine[9] = 0;
          this.$set(this.white, 3, toLine);
          pastLine = [...this.white[4]];
          pastLine[0] = 1;
          pastLine[1] = 1;
          pastLine[2] = 1;
          pastLine[3] = 1;
          this.$set(this.white, 4, pastLine);
          clockLine = [...this.white[9]];
          for (let i = 0; i < clockLine.length; i++) {
            if (i >= 5) {
              clockLine[i] = 0;
            }
          }
          this.$set(this.white, 9, clockLine);
          break;
        case "to":
          toLine = [...this.white[3]];
          toLine[10] = 1;
          toLine[9] = 1;
          this.$set(this.white, 3, toLine);
          pastLine = [...this.white[4]];
          pastLine[0] = 0;
          pastLine[1] = 0;
          pastLine[2] = 0;
          pastLine[3] = 0;
          this.$set(this.white, 4, pastLine);
          clockLine = [...this.white[9]];
          for (let i = 0; i < clockLine.length; i++) {
            if (i >= 5) {
              clockLine[i] = 0;
            }
          }
          this.$set(this.white, 9, clockLine);
          break;
      }
      console.log(
        `${this.active.min}-${this.active.prep}-${this.active.outHour}-${this.active.state}`
      );
      // console.log(this.white);
      // this.$set(this.white, 9, [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
    },
  },
};
</script>

<style>
.main {
  /* flex: 1; */
  display: flex;
  align-items: center;
}
.clock-wrapper {
  /* position: absolute;
  left: 50%;
  top: 50%; */
  padding: 0.3rem;
  border-radius: 0.3rem;
  width: 5rem;
  height: 5rem;
  background: #222;
  /* transform: translate(-50%, -50%); */
  /* box-shadow: 0px 0px 8px 8px #666; */
  animation: box 2s ease-in-out infinite;
}
.clock-row {
  display: flex;
  flex-direction: row;
}
.clock {
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.3rem;
  vertical-align: middle;
  text-align: center;
  color: #000;
}
.white {
  color: #e3e3e3;
}

@keyframes box {
  0% {
    box-shadow: 0px 0px 2px 0px rgba(128,128,128,0.2);
  }
  50% {
    box-shadow: 0px 0px 2px 2px rgba(128,128,128,0.2);
  }
  100% {
    box-shadow: 0px 0px 2px 0px rgba(128,128,128,0.2);
  }
}
</style>

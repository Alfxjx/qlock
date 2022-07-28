class Block {}

class Clock {
    origin = [
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
    ]
    white = new Array(10).fill(new Array(11).fill(0));

    active = {
        min: "",
        prep: "",
        outHour: "",
        state: "",
    };

    minT = new Proxy({
        time: new Date().getMinutes()
    }, {
        get: function (target, key) {
            console.log(`get target: ${target}: ${key}`);
            return target[key];
        },
        set: function (target, key, value) {
            console.log(`set target: ${target}: ${key}-${value}`);
            target[key] = value;
            return true;
        }
    });
    interval = 0;
    get matrix() {
        let res = [];
        this.origin.forEach((i, idx) => {
            const arr = [...i.toUpperCase()].map((x, xx) => {
                return {
                    name: x,
                    value: idx * 11 + xx,
                    isWhite: false
                };
            });
            res.push(arr);
        });
        return res;
    }
    constructor() {
        this.minT.time = new Date().getMinutes();
        this.interval = window.setInterval(() => {
            this.minT.time = new Date().getMinutes();
        }, 5000);
    }
}
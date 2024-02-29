'use client';

import { useEffect, useRef, useState } from 'react';

declare module 'react' {
    interface CSSProperties {
        '--block'?: string;
        // 你可以在这里添加更多的自定义 CSS 属性
    }
}

interface MatItem {
    name: string;
    value: number;
}

const ORIGIN_MAP = [
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

export default function QlockDemo() {

    const [matrix, setMatrix] = useState<MatItem[][]>([]);
    const [computedWidth, setComputedWidth] = useState('1.75rem');
    const white = new Array(10).fill(new Array(11).fill(0));

    const [active, setActive] = useState({
        min: "",
        prep: "",
        outHour: 0,
        state: "",
    });

    const interval = useRef<number>();

    const [minT, setMinT] = useState(0);

    useEffect(() => {
        interval.current = window.setInterval(() => {
            setMinT(new Date().getMinutes());
        }, 1000);
        return () => {
            window.clearInterval(interval.current);
        }
    }, []);

    useEffect(() => {
        let res: MatItem[][] = [];
        ORIGIN_MAP.forEach((i, idx) => {
            const arr = i.toUpperCase().split('').map((x, xx) => {
                return { name: x, value: idx * 11 + xx } as MatItem;
            });
            res.push(arr);
        });
        setMatrix(res);
    }, []);

    useEffect(() => {
        function handleResize() {
            let width = document.documentElement.clientWidth;
            if (width > 1920) {
                setComputedWidth("4rem");
            } else if (width > 1280) {
                setComputedWidth("3rem");
            } else if (width > 600) {
                setComputedWidth("2rem");
            } else {
                setComputedWidth("1.75rem");
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // 初始化时也需要调用一次

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        let hour = new Date().getHours();
        if (hour < 12) {
            setActive({ ...active, state: "am" });
            setFunc(white, 0, [1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0]);
            if (hour === 0) {
                setActive({ ...active, outHour: 12 })
            } else {
                setActive({ ...active, outHour: hour })
            }
        } else if (hour === 12) {
            setActive({ ...active, state: "pm" });
            setFunc(white, 0, [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1]);
            setActive({ ...active, outHour: hour })
        } else {
            setActive({ ...active, state: "pm" });
            setFunc(white, 0, [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1]);
            setActive({ ...active, outHour: hour - 12 })

        }
        let min = new Date().getMinutes();
        if (0 <= min && min < 5) {
            setActive({ ...active, min: "0" })
            update234(active.min);
            setActive({ ...active, prep: "oclock"})
        } else if (5 <= min && min < 10) {
            setActive({ ...active, min: "five" })
            update234(active.min);
            setActive({ ...active, prep: "past" })
            let toLine = [...white[3]];
            for (let j = 9; j < 11; j++) {
                toLine[j] = 0;
            }
            setFunc(white, 3, toLine);
            let pastLine = [...white[4]];
            for (let i = 0; i < 4; i++) {
                pastLine[i] = 1;
            }
            setFunc(white, 4, pastLine);
        } else if (10 <= min && min < 15) {
            setActive({ ...active, min: "ten" });
            update234(active.min);
            setActive({ ...active, prep: "past" })
            let toLine = [...white[3]];
            for (let j = 9; j < 11; j++) {
                toLine[j] = 0;
            }
            setFunc(white, 3, toLine);
            let pastLine = [...white[4]];
            for (let i = 0; i < 4; i++) {
                pastLine[i] = 1;
            }
            setFunc(white, 4, pastLine);
        } else if (15 <= min && min < 20) {
            setActive({ ...active, min: "quarter" });
            update234(active.min);
            setActive({ ...active, prep: "past" })
            let toLine = [...white[3]];
            for (let j = 9; j < 11; j++) {
                toLine[j] = 0;
            }
            setFunc(white, 3, toLine);
            let pastLine = [...white[4]];
            for (let i = 0; i < 4; i++) {
                pastLine[i] = 1;
            }
            setFunc(white, 4, pastLine);
        } else if (20 <= min && min < 25) {
            setActive({ ...active, min: "twenty" })
            update234(active.min);
            setActive({ ...active, prep: "past" })
            let toLine = [...white[3]];
            for (let j = 9; j < 11; j++) {
                toLine[j] = 0;
            }
            setFunc(white, 3, toLine);
            let pastLine = [...white[4]];
            for (let i = 0; i < 4; i++) {
                pastLine[i] = 1;
            }
            setFunc(white, 4, pastLine);
        } else if (25 <= min && min < 30) {
            setActive({ ...active, min: "twentyfive" })
            update234(active.min);
            setActive({ ...active, prep: "past" })
            let toLine = [...white[3]];
            for (let j = 9; j < 11; j++) {
                toLine[j] = 0;
            }
            setFunc(white, 3, toLine);
            let pastLine = [...white[4]];
            for (let i = 0; i < 4; i++) {
                pastLine[i] = 1;
            }
            setFunc(white, 4, pastLine);
        } else if (30 <= min && min < 35) {
            setActive({ ...active, min: "half" })
            update234(active.min);
            setActive({ ...active, prep: "past" })
            let toLine = [...white[3]];
            for (let j = 9; j < 11; j++) {
                toLine[j] = 0;
            }
            setFunc(white, 3, toLine);
            let pastLine = [...white[4]];
            for (let i = 0; i < 4; i++) {
                pastLine[i] = 1;
            }
            setFunc(white, 4, pastLine);
        } else if (35 <= min && min < 40) {
            setActive({ ...active, min: "twentyfive" })
            update234(active.min);
            setActive({ ...active, prep: "to" })
            if (active.outHour === 12) {
                setActive({ ...active, outHour: 1 });
            } else {
                setActive({ ...active, outHour: active.outHour + 1 });
            }
            let toLine = [...white[3]];
            for (let j = 9; j < 11; j++) {
                toLine[j] = 1;
            }
            setFunc(white, 3, toLine);
            let pastLine = [...white[4]];
            for (let i = 0; i < 4; i++) {
                pastLine[i] = 0;
            }
            setFunc(white, 4, pastLine);
        } else if (40 <= min && min < 45) {
            setActive({ ...active, min: "twenty" });
            update234(active.min);
            setActive({ ...active, prep: "to" })
            if (active.outHour === 12) {
                setActive({ ...active, outHour: 1 })
            } else {
                setActive({ ...active, outHour: active.outHour })
            }
            let toLine = [...[...white[3]]];
            for (let j = 9; j < 11; j++) {
                toLine[j] = 1;
            }
            setFunc(white, 3, toLine);
            let pastLine = [...white[4]];
            for (let i = 0; i < 4; i++) {
                pastLine[i] = 0;
            }
            setFunc(white, 4, pastLine);
        } else if (45 <= min && min < 50) {
            setActive({ ...active, min: "quarter" })
            update234(active.min);
            setActive({ ...active, prep: "to" })
            if (active.outHour === 12) {
                setActive({ ...active, outHour: 1 })
            } else {
                setActive({ ...active, outHour: active.outHour })
            }
            let toLine = [...[...white[3]]];
            for (let j = 9; j < 11; j++) {
                toLine[j] = 1;
            }
            setFunc(white, 3, toLine);
            let pastLine = [...white[4]];
            for (let i = 0; i < 4; i++) {
                pastLine[i] = 0;
            }
            setFunc(white, 4, pastLine);
        } else if (50 <= min && min < 55) {
            setActive({ ...active, min: "ten" })
            update234(active.min);
            
            if (active.outHour === 12) {
                setActive({ ...active, outHour: 1 })
            } else {
                setActive({ ...active, outHour: active.outHour })
            }
            let toLine = [...[...white[3]]];
            for (let j = 9; j < 11; j++) {
                toLine[j] = 1;
            }
            setFunc(white, 3, toLine);
            let pastLine = [...white[4]];
            for (let i = 0; i < 4; i++) {
                pastLine[i] = 0;
            }
            setFunc(white, 4, pastLine);
        } else if (55 <= min && min < 60) {
            setActive({ ...active, min: "five" })
            update234(active.min);
            setActive({ ...active, prep: "to" })
            if (active.outHour === 12) {
                setActive({ ...active, outHour: 1 })
            } else {
                setActive({ ...active, outHour: active.outHour })
            }
            let toLine = [...[...white[3]]];
            for (let j = 9; j < 11; j++) {
                toLine[j] = 1;
            }
            setFunc(white, 3, toLine);
            let pastLine = [...white[4]];
            for (let i = 0; i < 4; i++) {
                pastLine[i] = 0;
            }
            setFunc(white, 4, pastLine);
        }
        switch (active.outHour) {
            case 1:
                setFunc(white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 5, [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
            case 2:
                setFunc(white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]);
                setFunc(white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
            case 3:
                setFunc(white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 5, [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
                setFunc(white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
            case 4:
                setFunc(white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 6, [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
            case 5:
                setFunc(white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 6, [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]);
                setFunc(white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
            case 6:
                setFunc(white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 5, [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]);
                setFunc(white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
            case 7:
                setFunc(white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 8, [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
            case 8:
                setFunc(white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 7, [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
            case 9:
                setFunc(white, 4, [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]);
                setFunc(white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
            case 10:
                setFunc(white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 9, [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
            case 11:
                setFunc(white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 7, [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
                setFunc(white, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
            case 12:
                setFunc(white, 4, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 8, [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
                setFunc(white, 9, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
        }
        let clockLine, pastLine, toLine;
        switch (active.prep) {
            case "oclock":
                toLine = [...white[3]];
                toLine[10] = 0;
                toLine[9] = 0;
                setFunc(white, 3, toLine);
                pastLine = [...white[4]];
                pastLine[0] = 0;
                pastLine[1] = 0;
                pastLine[2] = 0;
                pastLine[3] = 0;
                setFunc(white, 4, pastLine);
                clockLine = [...white[9]];
                for (let i = 0; i < clockLine.length; i++) {
                    if (i >= 5) {
                        clockLine[i] = 1;
                    }
                }
                setFunc(white, 9, clockLine);
                break;
            case "past":
                toLine = [...white[3]];
                toLine[10] = 0;
                toLine[9] = 0;
                setFunc(white, 3, toLine);
                pastLine = [...white[4]];
                pastLine[0] = 1;
                pastLine[1] = 1;
                pastLine[2] = 1;
                pastLine[3] = 1;
                setFunc(white, 4, pastLine);
                clockLine = [...white[9]];
                for (let i = 0; i < clockLine.length; i++) {
                    if (i >= 5) {
                        clockLine[i] = 0;
                    }
                }
                setFunc(white, 9, clockLine);
                break;
            case "to":
                toLine = [...white[3]];
                toLine[10] = 1;
                toLine[9] = 1;
                setFunc(white, 3, toLine);
                pastLine = [...white[4]];
                pastLine[0] = 0;
                pastLine[1] = 0;
                pastLine[2] = 0;
                pastLine[3] = 0;
                setFunc(white, 4, pastLine);
                clockLine = [...white[9]];
                for (let i = 0; i < clockLine.length; i++) {
                    if (i >= 5) {
                        clockLine[i] = 0;
                    }
                }
                setFunc(white, 9, clockLine);
                break;
        }
        console.log(
            `${active.min}-${active.prep}-${active.outHour}-${active.state}`
        );
    }, [minT])

    function setFunc(arr: number[][], idx: number, val: number[]) { }

    function update234(type: "0" | "five" | "ten" | "quarter" | "twenty" | "twentyfive" | "half" | string) {
        let toLine = [];
        switch (type) {
            case "0":
                setFunc(white, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 3, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                break;
            case "five":
                setFunc(white, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 2, [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0]);
                toLine = [...white[3]];
                for (let i = 0; i < toLine.length; i++) {
                    if (i < 9) {
                        toLine[i] = 0;
                    }
                }
                setFunc(white, 3, toLine);
                break;
            case "ten":
                setFunc(white, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                toLine = [...white[3]];
                for (let i = 0; i < toLine.length; i++) {
                    if (i < 9) {
                        toLine[i] = 0;
                    }
                }
                toLine[5] = 1;
                toLine[6] = 1;
                toLine[7] = 1;
                setFunc(white, 3, toLine);
                break;
            case "quarter":
                setFunc(white, 1, [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]);
                setFunc(white, 2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                toLine = [...white[3]];
                for (let i = 0; i < toLine.length; i++) {
                    if (i < 9) {
                        toLine[i] = 0;
                    }
                }
                setFunc(white, 3, toLine);
                break;
            case "twenty":
                setFunc(white, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 2, [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]);
                toLine = [...white[3]];
                for (let i = 0; i < toLine.length; i++) {
                    if (i < 9) {
                        toLine[i] = 0;
                    }
                }
                setFunc(white, 3, toLine);
                break;
            case "twentyfive":
                setFunc(white, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 2, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]);
                toLine = [...white[3]];
                for (let i = 0; i < toLine.length; i++) {
                    if (i < 9) {
                        toLine[i] = 0;
                    }
                }
                setFunc(white, 3, toLine);
                break;
            case "half":
                setFunc(white, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setFunc(white, 3, [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
                break;
        }
    }

    return (
        <div className="main" style={{ '--block': computedWidth }}>
            <div className="clock-wrapper">
                {matrix.map((item, idx) => (
                    <div className="clock-row" key={JSON.stringify(item)}>
                        {item.map((letter, index) => (
                            <div
                                className={`clock ${white[idx][index] === 1 ? 'white' : ''}`}
                                key={letter.value}
                            >
                                {letter.name}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )

}
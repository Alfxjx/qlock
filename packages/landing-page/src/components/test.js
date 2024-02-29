// my-component.js
import { ref } from 'vue'

export const testC = {
    setup() {
        const count = ref(114)
        return { count }
    },
    template: `<div>count is {{ count }}</div>`
}
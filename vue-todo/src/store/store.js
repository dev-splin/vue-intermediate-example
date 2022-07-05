import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
    created() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                const item = localStorage.getItem(localStorage.key(i));
                const parsedItem = JSON.parse(item);

                arr.push(parsedItem);
            }
        }

        return arr;
    },
}

export const store = new Vuex.Store({
    state: {
        todoItems : storage.created(),
    }
});
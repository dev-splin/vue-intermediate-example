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
    },
    getters: {
      storedTodoItems(state) {
          return state.todoItems;
      },
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {completed: false, item: todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },

        removeOneItem(state, todoItem) {
            localStorage.removeItem(todoItem.todoItem.item);
            state.todoItems.splice(todoItem.index, 1);
        },

        toggleOneItem(state, todoItem) {
            state.todoItems[todoItem.index].completed = !state.todoItems[todoItem.index].completed;
            localStorage.removeItem(todoItem.todoItem.item);
            localStorage.setItem(todoItem.todoItem.item, JSON.stringify(todoItem.todoItem));
        },

        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
});
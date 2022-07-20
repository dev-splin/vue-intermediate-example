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

const state = {
    todoItems : storage.created(),
}

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    },
}

const mutations = {
    addOneItem(state, todoItem) {
        console.log(state.todoItems);
        alert(todoItem);
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
        console.log(state.todoItems);
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

export default {
    state,
    getters,
    mutations,
};
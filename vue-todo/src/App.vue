<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @addTodoItem=addOneItem></TodoInput>
    <TodoList :propsData=todoItems @removeTodoItem=removeOneItem @toggleTodoItem=toggleOneItem></TodoList>
    <TodoFooter @clearTodoItems=clearAllItems></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";

export default {
  components: {
    TodoFooter,
    TodoList,
    TodoInput,
    TodoHeader
  },

  data: function () {
    return {
      todoItems: [],
    }
  },

  created: function () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage.getItem(localStorage.key(i));
        const parsedItem = JSON.parse(item);

        this.todoItems.push(parsedItem);
      }
    }
  },

  methods: {
    addOneItem: function (item) {
      const obj = {completed: false, item: item};
      localStorage.setItem(item, JSON.stringify(obj));
      this.todoItems.push(obj);
    },

    removeOneItem: function (item, index) {
      localStorage.removeItem(item);
      this.todoItems.splice(index, 1);
    },

    toggleOneItem: function (item, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item, JSON.stringify(item));
    },

    clearAllItems: function () {
      localStorage.clear();
      this.todoItems = [];
    }
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: #f3f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

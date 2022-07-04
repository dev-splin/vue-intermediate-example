<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer">
      <i class="fa-solid fa-plus addBtn" @click="addTodo"></i>
    </span>

    <Modal v-if="showModal">
      <h3 slot="header">
        {{ modalHeader }}
        <i class="fa-solid fa-xmark" @click="showModal = false"></i>
      </h3>

      <div slot="body">
        {{ modalBody }}
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/common/Modal";

export default {
  components: {
    Modal
  },

  data: function () {
    return {
      newTodoItem: '',
      modalHeader: '경고!',
      modalBody: '',
      showModal: false,
    }
  },

  methods: {
    addTodo: function () {
      if(!this.validateItem()) {
        this.showModal = true;
        return;
      }

      this.$emit('addTodoItem', this.newTodoItem);
      this.clearInput();
    },

    clearInput: function () {
      this.newTodoItem = '';
    },

    validateItem() {
      if (this.newTodoItem === '') {
        this.modalBody = '값이 없습니다.';
        return false;
      }

      return true;
    },
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}

</style>
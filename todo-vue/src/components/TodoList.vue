<template>
  <div class="list">
    <h3 class="list-header">Todo List</h3>
    <div class="list-inputs">
      <input class="list-inputs-input" v-model="newTodo" ref="todoInput" />
      <button class="list-inputs-button" v-on:click="addTodoItem">+</button>
    </div>
    <div v-if="todoItems && todoItems.length > 0" class="list-todoitems">
      <TodoItem
        v-for="todoItem in todoItems"
        v-bind:key="todoItem.id"
        v-bind:title="todoItem.title"
        v-bind:id="todoItem.id"
        v-on:removeClicked="removeClicked"
      />
    </div>
    <div v-else class="list-todoitems-placeholder-container">
      <div>Add items to see them here!</div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

let items = 0;

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: {},
  data: function() {
    return {
      todoItems: [],
      newTodo: ""
    };
  },
  mounted() {
    const localStorageItems = localStorage.getItem("catch-todoitems");
    this.todoItems = JSON.parse(localStorageItems) ?? [];
  },
  methods: {
    addTodoItem: function() {
      const tempTodo = this.newTodo && this.newTodo.trim();
      if (tempTodo && tempTodo.length > 0) {
        this.todoItems.push({
          title: tempTodo,
          id: ++items
        });
        this.saveToStorage();
        this.newTodo = "";
      }

      this.$refs.todoInput.focus();
    },
    removeClicked: function(id) {
      this.todoItems = this.todoItems.filter(t => t.id != id);
      this.saveToStorage();
    },
    saveToStorage: function() {
      const json = JSON.stringify(this.todoItems);
      if (json) {
        localStorage.setItem("catch-todoitems", json);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
}

.list-header {
  text-align: center;
}
.list-inputs {
  display: flex;
}
.list-inputs-input {
  width: 100%;
}

.list-todoitems-placeholder-container {
  text-align: center;
  color: #ccc;
  border: 1px dashed cornflowerblue;
  padding: 10px;
  margin-top: 5px;
}
</style>

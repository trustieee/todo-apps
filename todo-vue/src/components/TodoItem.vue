<template>
  <div class="todoitem">
    <span class="todoitem-title">{{title}}</span>
    <button class="todoitem-remove" v-on:click="handleRemove">x</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    title: String,
    id: Number
  },
  methods: {
    handleRemove: function() {
      this.$emit("removeClicked", this.id);
    }
  }
};
</script>

<style scoped>
.todoitem {
  display: flex;
  margin: 5px auto;
}

.todoitem:hover {
  background-color: #eee;
}

.todoitem-title {
  width: 100%;
}
</style>
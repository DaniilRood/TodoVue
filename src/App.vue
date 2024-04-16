<script setup>
  import { ref } from 'vue';
  import { v4 as uuidv4 } from 'uuid';

  // work with todo
  
  const todos = ref([
    {
      id: 'id1',
      content: "learn JS",
      done: false,
    },
    {
      id: 'id2',
      content: "learn Vue",
      done: false,
    },
  ]);

  const newTodoContent = ref('');

  const addTodo = () => {
      const newTodo = {
        id: uuidv4(),
        content: newTodoContent.value,
        done: false,
      };
      todos.value.push(newTodo);
      newTodoContent.value = '';
  }
</script>

<template>
  <div class="wrapper-todo">
    <div class="title has-text-centered">Todo List</div>
    <form @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
      <p class="control is-expanded">
        <input v-model="newTodoContent" class="input" type="text" placeholder="input todo">
      </p>
      <p class="control">
        <button :disabled="!newTodoContent" class="button is-info">
          Add
        </button>
      </p>
    </div>
    </form>
    
    <div v-for="todo in todos" :key="todo.id" class="card mb-5">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column">{{ todo.content }}</div>
            <div class="column is-5 has text-tight">
              <button class="button is-light">&check;</button>
              <button class="button is-danger ml-2">&cross;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "D:/app2course/TodoList/node_modules/bulma/css/bulma.min.css";
.wrapper-todo {
  margin: 0 auto;
  max-width: 400px;
}
</style>
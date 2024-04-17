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
      done: true,
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
  };

  const removeTodo = id => {
    todos.value = todos.value.filter(todo => {
      return todo.id !== id;
    });
  };

  const toggleTodo = id => {
    const index = todos.value.findIndex(todo => todo.id === id);
    todos.value[index].done = !todos.value[index].done;
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
    
    <div v-for="todo in todos"
    :key="todo.id"
    class="card mb-5"
    :class="{'has-background-success-light': todo.done}"
    
    >
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div
            class="column"
            :class="{'has-text-success line-through': todo.done}"
            >{{ todo.content }}</div>
            <div class="column is-5 has text-tight">
              <button
              @click="(toggleTodo(todo.id))"
              class="button is-light"
              :class="todo.done ? 'is-success' : 'is-light'"
              >&check;</button>
              <button
              @click="removeTodo(todo.id)"
              class="button is-danger ml-2">&cross;</button>
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

.line-through {
  text-decoration: line-through;
}
</style>
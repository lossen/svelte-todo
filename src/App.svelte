<script>
  import { onDestroy, onMount } from 'svelte';
  import { getTodos } from './utils/getTodos';
  import AddTodo from './components/AddTodo.svelte';
  import ToDosList from './components/ToDosList.svelte';
  import { todoItemApi } from './utils/todoItemApi';
  import { todoItems } from './store/store';
  let items = [];
  const unsubscribe = todoItems.subscribe((value) => {
    items = value;
  });

  onMount(() => {
    const getData = async () => {
      let res = await getTodos();
      todoItems.update((items) => [...items, res]);
    };
    getData();
  });

  onDestroy(() => {
    unsubscribe();
  });
  const addItem = async (event) => {
    const createdTodo = await todoItemApi.create(event.detail);
    todoItems.update((items) => [...items, createdTodo]);
  };

  const deleteItem = ({ detail }) => {
    items = items.filter((item) => item.id !== detail.id);
  };
</script>

<main>
  <AddTodo {items} on:ADD_TODO={addItem} label="What do you want to do?" />
  <ToDosList {items} on:DELETE_TODO={deleteItem} />
</main>

<svelte:head>
  <!-- Fonts -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />

  <!-- Material Typography -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"
  />

  <!-- SMUI -->
  <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>

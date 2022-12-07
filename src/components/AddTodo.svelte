<script lang="ts">
  import Textfield from '@smui/textfield';
  let todoText = '';
  import Button, { Label } from '@smui/button';
  export let label = '';
  export let items;
  import { createEventDispatcher } from 'svelte';
  import { ADD_TODO } from '../constants';

  let dispatch = createEventDispatcher();
  const addItem = () => {
    dispatch(ADD_TODO, todoText);
  };

  //   $: console.log(items);
</script>

<div class="main-container">
  <h3 class="title">ToDo svelte app</h3>
  <div>
    <Textfield
      style="margin-bottom: 24px;"
      variant="outlined"
      bind:value={todoText}
      {label}
    />
  </div>
  <Button on:click={addItem} variant="raised">
    <Label>Add todo</Label>
  </Button>
</div>

<style>
  .main-container {
    background-color: #fff;
    padding: 1em;
    max-width: 540px;
    margin: 0 auto;
  }
  .todo-input {
    margin-bottom: 24px;
  }
</style>

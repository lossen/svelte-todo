<script lang="ts">
  import Card, { Content, Actions } from '@smui/card';
  import IconButton, { Icon } from '@smui/icon-button';
  export let title, index, id;

  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import { todoItemApi } from '../utils/todoItemApi';

  export let checked;
  import { createEventDispatcher } from 'svelte';
  import { DELETE_TODO } from '../constants';

  const dispatch = createEventDispatcher();

  const handleCheck = () => {
    todoItemApi.update(id, 'completed', !checked);
  };

  const handleRemove = async () => {
    await todoItemApi.delete(id);
    dispatch(DELETE_TODO, { id });
  };
</script>

<div class="card-container">
  <Card style="margin-bottom: 24px; flex-direction: row;">
    <FormField>
      <Checkbox bind:checked on:click={handleCheck} />
    </FormField>
    <Content style="flex:1; text-align: left;"
      >{`${index + 1}. ${title}`}</Content
    >
    <Actions>
      <IconButton on:click={handleRemove} aria-label="Remove" title="Remove">
        <Icon class="material-icons">clear</Icon>
      </IconButton>
    </Actions>
  </Card>
</div>

<style>
  .todo-item {
    display: flex;
    background-color: red;
  }
</style>

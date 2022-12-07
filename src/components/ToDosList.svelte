<script lang="ts">
  import ToDoItem from './ToDoItem.svelte';
  export let items;
</script>

<div class="list">
  {#each items as { id, title, completed }, index (id)}
    <ToDoItem {title} {index} checked={completed} {id} on:DELETE_TODO />
  {:else}
    <span>No items yet</span>
  {/each}
</div>

<style>
  .list {
    height: 500px;
    overflow: auto;
  }
</style>

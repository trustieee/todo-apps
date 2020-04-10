<script>
	import { createEventDispatcher } from 'svelte';
	export let title;
	export let id;
	
	const dispatch = createEventDispatcher();
	
	function remove() {
		dispatch('removed', { id });
	}
</script>

<div class="todoitem">
	<span class="todoitem-title">{title}</span>
	<button class="todoitem-remove" on:click={remove}>x</button>
</div>

<style>
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
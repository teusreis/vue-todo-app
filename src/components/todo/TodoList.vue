<template>
    <ui v-if="hasTodo" class="list-none flex flex-col gap-2">
        <div class="bg-green-300">
            <div class="grid grid-cols-4 font-bold rounded px-2 py-2 w-11/12">
                <p>Title</p>
                <p>Description</p>
                <p>Status</p>
                <p>Expiration</p>
            </div>
        </div>
        <todo-item
            v-for="todo in todos"
            @toggle-status="toggleStatus"
            :key="todo.id"
            :id="todo.id"
            :title="todo.title"
            :description="todo.description"
            :status="todo.status"
            :expiration="todo.expiration"
        />
    </ui>
    <div v-else class="text-black">
        <p>No todo was created yet!</p>
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
    components: { TodoItem },
    emits: ["toggle-status"],
    props: {
        todos: {
            required: true,
            type: Array,
        },
    },
    computed: {
        hasTodo() {
            return this.todos.length > 0;
        },
    },
    methods: {
        toggleStatus(id) {
            this.$emit("toggle-status", id);
        },
    },
};
</script>

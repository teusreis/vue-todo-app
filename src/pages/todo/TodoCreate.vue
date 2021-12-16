<template>
    <header class="my-3">
        <h2 class="text-xl text-green-400">New todo</h2>
    </header>

    <!-- <todo-form -->
    <TodoForm @submit-handler="createTodo" />
</template>

<script>
import TodoForm from "../../components/todo/TodoForm.vue";

export default {
    components: {
        TodoForm,
    },
    props: {},
    data() {
        return {};
    },
    methods: {
        async createTodo(data) {
            const url = "/api/todo";

            data = await this.$axios.post(url, data);

            if (data.status === 201) {
                this.$router.push({ name: "todo.index" });
            }
        },
    },
};
</script>

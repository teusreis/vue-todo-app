<template>
    <header class="my-3">
        <the-title>New todo</the-title>
    </header>

    <!-- <todo-form -->
    <TodoForm @submit-handler="createTodo" />
</template>

<script>
import TodoForm from "../../components/todo/TodoForm.vue";
import TheTitle from "../../ui/TheTitle.vue";

export default {
    components: {
        TodoForm,
        TheTitle,
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
        }
    },
};
</script>

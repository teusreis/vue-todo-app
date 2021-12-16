<template>
    <h2 class="text-xl">Edit page</h2>

    <main>
        <todo-form
            v-if="!isLoading"
            :isNewTodo="false"
            :title-prop="title"
            :description-prop="description"
            :expiration-prop="expiration"
            :status-prop="status"
            @submit-handler="submit"
        />
    </main>
</template>

<script>
import TodoForm from "../../components/todo/TodoForm.vue";

export default {
    components: { TodoForm },
    data() {
        return {
            isLoading: true,
            id: this.$route.params.id,
            title: "",
            description: "",
            expiration: "",
            status: "",
        };
    },
    methods: {
        async loadTodo() {
            const url = "/api/todo/" + this.id;
            const data = await this.$axios.get(url);

            if (data.status === 200) {
                this.title = data.data.title;
                this.description = data.data.description;
                this.expiration = data.data.expiration;
                this.status = data.data.status;
                this.isLoading = false;
            }
        },
        async submit(body) {
            const url = "/api/todo/" + this.id;
            const data = await this.$axios.put(url, body);
            if (data.status === 200) {
                this.$router.push({ name: "todo.index" });
            }
        },
    },
    mounted() {
        this.loadTodo();
    },
};
</script>

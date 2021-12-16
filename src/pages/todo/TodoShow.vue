<template>
    <header class="py-2 flex justify-end gap-2 items-center">
        <router-link
            :to="{ name: 'todo.index' }"
            class="
                font-semibold
                text-green-400
                hover:text-green-500
                transition-all
            "
        >
            Go back
        </router-link>
        <router-link :to="{ name: 'todo.edit', params: { id: id } }">
            <the-button variant="primary-outline">Edit it</the-button>
        </router-link>
    </header>

    <main class="">
        <h2 class="text-lg font-semibold mb-2 tracking-wider">
            {{ title }}
            <span class="bg-green-400 text-white rounded px-2 py-1">
                {{ capitalizeWords(status) }}
            </span>
        </h2>

        <h3 class="text-md border-b font-medium mb-1">Description</h3>

        <p class="mb-2">{{ description }}</p>

        <p>Expiration date: {{ expiration }}</p>
    </main>
</template>

<script>
export default {
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

            console.log(data);

            if (data.status === 200) {
                this.title = data.data.title;
                this.description = data.data.description;
                this.expiration = data.data.expiration;
                this.status = data.data.status;
                this.isLoading = false;
            }
        },
        capitalizeWords(string) {
            return string.replace(/(?:^|\s)\S/g, function (a) {
                return a.toUpperCase();
            });
        },
    },
    mounted() {
        this.loadTodo();
    },
};
</script>

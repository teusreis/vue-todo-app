<template>
    <div>
        <div class="my-3 flex gap-3">
            <router-link :to="{ name: 'todo.create' }">
                <the-button variant="primary-outline">New todo</the-button>
            </router-link>

            <the-button
                variant="primary-outline"
                @click="toggleFilterVisibility"
            >
                {{ showFilters ? "Hide" : "Show" }} Filter</the-button
            >
        </div>
        <todo-filters
            v-show="showFilters"
            :title-prop="title"
            :description-prop="description"
            :status-prop="status"
            :orderby-prop="orderBy"
            @filter-todos="filterTodos"
        />
        <todo-list :todos="todos" @toggle-status="toggleStatus" />

        <div class="flex justify-center py-2">
            <loader-icon v-if="isLoading" />

            <the-button
                v-if="hasMoreTodo && !isLoading"
                @click="loadTasks(true)"
                >Load more</the-button
            >
            <p
                v-if="!hasMoreTodo && !isLoading"
                class="text-blacl text-opacity-20 font-semibold"
            >
                End of the road!
            </p>
        </div>
    </div>
</template>

<script>
import TodoList from "../../components/todo/TodoList.vue";
import TodoFilters from "../../components/todo/TodoFilters.vue";
import api from "./../../api/api";
import LoaderIcon from "../../assets/icons/LoaderIcon.vue";

export default {
    components: { TodoList, TodoFilters, LoaderIcon },
    data() {
        return {
            // Filters
            title: "",
            description: "",
            status: "",
            orderBy: "",
            todos: [],
            hasMoreTodo: false,
            showFilters: false,
            page: 1,
            isLoading: true,
        };
    },
    methods: {
        async loadTasks(isLoadMore = false) {
            if (isLoadMore) {
                this.page++;
            } else {
                this.page = 1;
            }

            this.isLoading = true;

            const url = `/api/todo?page=${this.page}&title=${this.title}&description=${this.description}&status=${this.status}&orderby=${this.orderBy}`;
            const data = await api.get(url);

            if (isLoadMore) {
                this.todos = [...this.todos, ...data.data.data];
            } else {
                this.todos = data.data.data;
            }

            this.hasMoreTodo = !!data.data.next_page_url;
            this.isLoading = false;
        },
        filterTodos(title, description, status, orderby) {
            this.title = title;
            this.description = description;
            this.status = status;
            this.orderBy = orderby;

            this.loadTasks();
        },
        async toggleStatus(id) {
            const url = `/api/todo/${id}/toggle`;
            const data = await this.$axios.put(url);

            if (data.status === 200) {
                this.todos.map((todo) => {
                    if (todo.id !== id) {
                        return todo;
                    }

                    todo.status = data.data.data.status;

                    return todo;
                });
            }
        },
        toggleFilterVisibility() {
            this.showFilters = !this.showFilters;
        },
    },
    mounted() {
        this.loadTasks();
    },
};
</script>

<style lang="scss" scoped></style>

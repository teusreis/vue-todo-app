<template>
    <header class="grid grid-cols-4 gap-2 my-2">
        <input
            @change="submitFilters"
            class="base-input"
            v-model="title"
            placeholder="Todo's title"
        />
        <input
            @change="submitFilters"
            class="base-input"
            v-model="description"
            placeholder="Todo's description"
        />
        <select @change="submitFilters" v-model="status" class="base-input">
            <option value>Both</option>
            <option value="completed">Completed</option>
            <option value="undone">Undone</option>
        </select>
        <select @change="submitFilters" class="base-input" v-model="orderby">
            <option value="" disabled selected>Order by</option>
            <option value="title">Title</option>
            <option value="description">Description</option>
            <option value="expiration-asc">Expiration asc</option>
            <option value="expiration-desc">Expiration desc</option>
            <option value="created_at-asc">Creation date - asc</option>
            <option value="created_at-desc">Creation date - desc</option>
        </select>
    </header>
</template>

<script>
export default {
    emits: ["filter-todos"],
    props: {
        titleProp: {
            type: String,
            required: true,
        },
        descriptionProp: {
            type: String,
            required: true,
        },
        statusProp: {
            type: String,
            required: true,
        },
        orderbyProp: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            title: this.titleProp,
            description: this.descriptionProp,
            status: this.statusProp,
            orderby: this.orderbyProp,
        };
    },
    methods: {
        submitFilters() {
            this.$emit(
                "filter-todos",
                this.title,
                this.description,
                this.status,
                this.orderby
            );
        },
    },
};
</script>

<style lang="scss" scoped></style>

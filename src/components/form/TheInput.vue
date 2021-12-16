<template>
    <input
        class="
            w-full
            rounded
            border border-gray-500
            px-2
            py-1
            focus:outline-none focus:shadow-s focus:border-green-500
        "
        :value="value"
        :type="type"
        :placeholder="placeholder"
        @input="updateValue($event.target.value)"
    />
</template>

<script>
export default {
    props: {
        value: {
            require: true,
        },
        type: {
            type: String,
            required: false,
            default: "text",
        },
        placeholder: {
            type: String,
            required: false,
            default: "",
        },
        hasError: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    methods: {
        updateValue(value) {
            this.$emit("input", value);
        },
    },
};
</script>

<style lang="scss" scoped></style>

<template>
    <select
        class="
            w-full
            rounded
            border border-gray-500
            px-2
            py-1
            focus:outline-none focus:shadow-sm focus:border-green-500
        "
        @input="updateValue($event.target.value)"
    >
        <option value="" disabled v-if="placeholder">{{ placeholder }}</option>
        <slot />
    </select>
</template>

<script>
export default {
    props: {
        value: {
            require: true,
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

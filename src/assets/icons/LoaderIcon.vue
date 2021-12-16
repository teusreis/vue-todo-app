<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="animate-spin h-7 w-7 text-green-500 bi bi-arrow-clockwise"
        viewBox="0 0 16 16"
    >
        <path
            fill-rule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
        />
        <path
            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
        />
    </svg>
</template>

<script>
export default {
    props: {
        class: {
            type: String,
            required: false,
            default: "",
        },
    },
};
</script>

<style lang="scss" scoped>
</style>

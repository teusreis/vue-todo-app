<template>
    <div class="flex justify-end items-center gap-2 py-2">
        <router-link :to="cancelLink" class="text-gray-800 font-semibold">
            Cancel
        </router-link>
        <the-button type="submit">
            <plus-icon />
            {{ submitText }}
        </the-button>
    </div>
</template>

<script>
import PlusIcon from "../../assets/icons/PlusIcon.vue";
import TheButton from "../../ui/TheButton.vue";
export default {
    components: { TheButton, PlusIcon },
    props: {
        submitText: {
            type: String,
            required: false,
            default: "Submit",
        },
        cancelLink: {
            typeof: Object,
            required: false,
            default: { name: "todo.index" },
        },
    },
};
</script>

<style lang="scss" scoped>
</style>

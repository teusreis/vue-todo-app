<template>
    <div
        v-bind="$attrs"
        :class="styles"
        class="p-2 bg-opacity-50 rounded shadow hover:shadow-md transition-all"
    >
        <header
            :class="border"
            class="flex justify-between items-center mb-2 pb-1"
        >
            <h2 class="text-lg font-semibold">Title</h2>
            <close-icon @click="$emit('close-alert')" v-if="dismissible" />
        </header>
        <div>
            <slot />
        </div>
    </div>
</template>

<script>
import CloseIcon from "../assets/icons/CloseIcon.vue";

export default {
    components: { CloseIcon },
    emits: ["close-alert"],
    props: {
        type: {
            type: String,
            required: false,
            default: "success",
        },
        dismissible: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: {
        styles() {
            return {
                "alert-success": this.type === "success",
                "alert-danger": this.type === "danger",
                "alert-info": this.type === "info",
            };
        },
        border() {
            return {
                "alert-success-border": this.type === "success",
                "alert-danger-border": this.type === "danger",
                "alert-info-border": this.type === "info",
            };
        },
    },
};
</script>

<style lang="postcss" scoped>
.alert-success {
    @apply bg-green-500 text-green-600 hover:text-green-700 bg-opacity-50;
}

.alert-danger {
    @apply bg-red-500 text-red-600 hover:text-red-700  bg-opacity-50;
}

.alert-info {
    @apply bg-gray-400 text-gray-600 hover:text-gray-700  bg-opacity-40;
}

.alert-success-border {
    @apply border-b border-green-600;
}

.alert-danger-border {
    @apply border-b border-red-600;
}

.alert-info-border {
    @apply border-b border-gray-400;
}
</style>

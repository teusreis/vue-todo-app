<template>
    <button
        :type="type"
        :class="classes"
        class="font-semibold rounded-md transition-all flex gap-1 items-center"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: false,
            default: "button"
        },
        variant: {
            type: String,
            required: false,
            default: "primary"
        },
        size: {
            type: String,
            required: false,
            default: "sm"
        }
    },
    computed: {
        classes() {
            return {
                btnSm: this.size === "sm",
                btnMd: this.size === "md",
                btnLg: this.size === "lg",

                "btn-primary": this.variant === "primary",
                "btn-primary-outine": this.variant === "primary-outline",
                "btn-secondary": this.variant === "secondary",
                "btn-secondary-outline": this.variant === "secondary-outline"
            };
        }
    }
};
</script>

<style scoped lang="postcss">
/* Btn sizes  */
.btnSm {
    @apply px-2 py-1;
}

.btnMd {
    @apply px-4 py-2;
}

.btnLg {
    @apply px-8 py-4 text-lg;
}

/* Btn colors variant */
.btn-primary {
    @apply bg-green-500 hover:bg-green-700 text-white;
}

.btn-primary-outine {
    @apply border border-green-500 text-green-500 hover:bg-green-500 hover:text-white;
}

.btn-secondary {
    @apply bg-gray-500 hover:bg-gray-700 text-white;
}

.btn-secondary-outline {
    @apply border border-black text-gray-900 hover:bg-gray-700 hover:text-white;
}
</style>

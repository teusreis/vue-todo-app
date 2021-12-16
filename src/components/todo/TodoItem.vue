<template>
    <div class="bg-gray-100 hover:bg-gray-200 flex">
        <li
            class="
                px-2
                py-2
                w-11/12
                transition-all
                rounded
                grid grid-cols-4
                text-gray-800
                font-semibold
            "
        >
            <div>{{ title }}</div>
            <div>{{ descriptionSlice }}</div>
            <div>
                <the-button
                    variant="primary-outline"
                    @mouseenter="showActionLable"
                    @mouseleave="btnStatus = status"
                    @click="$emit('toggle-status', id)"
                >
                    {{ btnStatus }}
                </the-button>
            </div>
            <div>{{ expiration }}</div>
        </li>
        <span class="w-1/12 flex gap-2 items-center">
            <router-link :to="{ name: 'todo.show', params: { id: id } }">
                <eye-icon
                    class="text-green-400 hover:text-green-500 transition-all"
                />
            </router-link>
            <router-link :to="{ name: 'todo.edit', params: { id: id } }">
                <pencil-icon
                    class="text-green-400 hover:text-green-500 transition-all"
                />
            </router-link>
        </span>
    </div>
</template>

<script>
import EyeIcon from "../../assets/icons/EyeIcon.vue";
import PencilIcon from "../../assets/icons/PencilIcon.vue";

export default {
    components: { EyeIcon, PencilIcon },
    emits: ["toggle-status"],
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: true,
        },
        expiration: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            btnStatus: this.status,
        };
    },
    computed: {
        descriptionSlice() {
            if (!this.description) {
                return "";
            }
            let d =
                this.description.length > 10
                    ? this.description.slice(0, 15) + "..."
                    : this.description;

            return d;
        },
    },
    watch: {
        status(value) {
            this.btnStatus = value;
        },
    },
    methods: {
        showActionLable() {
            let newLabel =
                this.status === "completed"
                    ? "Mask as undone"
                    : "Mask as completed";
            this.btnStatus = newLabel;
        },
    },
};
</script>

<style lang="scss" scoped></style>

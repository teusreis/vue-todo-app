<template>
    <form @submit.prevent="submit" class="grid gap-2">
        <div class="flex flex-col gap-1">
            <label for="title">Title</label>
            <input
                class="base-input"
                type="text"
                id="title"
                v-model="title.value"
                @blur="validateTitle"
            />
            <div @show="title.error" class="text-red-500 mb-2">
                {{ title.error }}
            </div>
        </div>

        <div class="flex flex-col gap-1">
            <label for="description">Description</label>
            <textarea
                @blur="validateDescription"
                class="base-input"
                id="description"
                v-model="description.value"
            ></textarea>
            <div @show="description.error" class="text-red-500 mb-2">
                {{ description.error }}
            </div>
        </div>

        <div class="flex flex-col gap-1">
            <label for="expiration">Expiration date</label>
            <input
                @blur="validateExpiraion"
                class="base-input"
                type="date"
                id="expiration"
                v-model="expiration.value"
            />
            <div @show="expiration.error" class="text-red-500 mb-2">
                {{ expiration.error }}
            </div>
        </div>

        <div v-if="!isNewTodo">
            <label for="status">Status</label>
            <select
                @blur="validateStatus"
                class="base-input"
                type="date"
                id="status"
                v-model="status.value"
            >
                <option value="completed">Completed</option>
                <option value="undone">Undone</option>
            </select>
            <div @show="status.error" class="text-red-500 mb-2">
                {{ status.error }}
            </div>
        </div>

        <div class="flex justify-end items-center gap-2 py-3">
            <router-link :to="cancelLink">
                <TheButton variant="secondary-outline"> Cancel </TheButton>
            </router-link>
            <TheButton type="submit">
                <PlusIcon />
                {{ btnSubmitText }}
            </TheButton>
        </div>
    </form>
</template>

<script>
import PlusIcon from "../../assets/icons/PlusIcon.vue";
export default {
    components: { PlusIcon },
    props: {
        isNewTodo: {
            required: false,
            type: Boolean,
            default: true,
        },
        titleProp: {
            type: String,
            required: false,
            default: "",
        },
        descriptionProp: {
            type: String,
            required: false,
            default: "",
        },
        expirationProp: {
            type: String,
            required: false,
            default: "",
        },
        statusProp: {
            type: String,
            required: false,
            default: "",
        },
        cancelLink: {
            type: String,
            required: false,
            default: "/todo",
        },
    },
    data() {
        return {
            hasError: false,
            title: {
                value: this.titleProp,
                error: "",
            },
            description: {
                value: this.descriptionProp,
                error: "",
            },
            expiration: {
                value: this.expirationProp,
                error: "",
            },
            status: {
                value: this.statusProp,
                error: "",
            },
        };
    },
    computed: {
        btnSubmitText() {
            return this.isNewTodo ? "Create" : "Update";
        },
    },
    methods: {
        validateTitle() {
            if (this.title.value.trim() === "") {
                this.title.error = "The title field is required!";
                this.hasError = true;
            } else if (this.title.value.trim().length > 50) {
                this.hasError = true;
                this.title.error =
                    "The title can not be graiter than 50 caracteres!";
            } else {
                this.title.error = "";
            }
        },
        validateDescription() {
            if (
                this.description.value.trim() !== "" &&
                this.description.value.length > 255
            ) {
                this.hasError = true;
                this.description.error =
                    "The description can not be graiter than 255 caracteres!";
            } else {
                this.description.error = "";
            }
        },
        validateStatus() {
            const availableTypes = ["active", "disabled"];
            if (this.status.value === "" && this.isNewTodo) {
                this.status.error = "Status is required";
                this.hasError = true;
            } else if (!availableTypes.includes(this.status.value)) {
                this.status.error = "Invalid status";
                this.hasError = true;
            } else {
                this.status.error = "";
            }
        },
        validateExpiraion() {
            if (this.expiration.value === "") {
                this.expiration.error = "Expiration date is required";
                this.hasError = true;
            }
        },
        validate() {
            this.hasError = false;
            this.validateTitle();
            this.validateDescription();
            this.validateStatus();
        },
        submit() {
            let data = {
                title: this.title.value,
                description: this.description.value,
                expiration: this.expiration.value,
            };

            if (!this.isNewTodo) {
                data.status = this.status.value;
            }

            this.$emit("submitHandler", data);
        },
    },
};
</script>

<style lang="scss" scoped></style>

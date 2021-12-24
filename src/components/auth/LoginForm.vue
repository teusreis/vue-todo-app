<template>
    <form @submit.prevent="submit" class="flex flex-col gap-2">
        <div :class="{ 'text-red-500': !!email.error }">
            <label for="email">Email</label>
            <input
                v-model.trim="email.value"
                @blur="validateEmail"
                class="base-input"
                type="text"
                id="email"
            />

            <div v-if="email.error">{{ email.error }}</div>
        </div>

        <div :class="{ 'text-red-500': !!password.error }">
            <label for="password">Password</label>
            <input
                v-model.trim="password.value"
                @blur="validatePassword"
                class="base-input"
                type="password"
                id="password"
            />
            <div v-if="password.error">{{ password.error }}</div>
        </div>

        <div class="flex justify-between items-center">
            <router-link :to="{ name: 'signup' }" class="text-green-500">
                Sign up
            </router-link>
            <action-button />
        </div>
    </form>
</template>

<script>
import ActionButton from "../form/ActionButton.vue";

export default {
    components: { ActionButton },
    emits: ["submit-handler"],
    data() {
        return {
            hasError: false,
            email: {
                value: "",
                error: "",
            },
            password: {
                value: "",
                error: "",
            },
        };
    },
    methods: {
        validateEmail() {
            let validEmail =
                /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (this.email.value === "") {
                this.email.error = "Email field is required!";
                this.hasError = true;
            } else if (!this.email.value.match(validEmail)) {
                this.email.error = "Invalid email address!";
                this.hasError = true;
            } else {
                this.email.error = "";
            }
        },
        validatePassword() {
            if (this.password.value === "") {
                this.password.error = "Password field is required!";
                this.hasError = true;
            } else {
                this.password.error = "";
            }
        },
        validate() {
            this.hasError = false;
            this.validateEmail();
            this.validatePassword();
        },
        submit() {
            this.validate();
            if (this.hasError) return;

            this.$emit("submit-handler", {
                email: this.email.value,
                password: this.password.value,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
</style>

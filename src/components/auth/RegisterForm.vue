<template>
    <form @submit.prevent="submit" class="flex flex-col gap-2">
        <div :class="{ 'text-red-500': !!name.error }">
            <label for="name">Name</label>
            <input
                v-model.trim="name.value"
                @blur="validateName"
                class="base-input"
                type="text"
                id="name"
            />

            <div v-if="name.error">{{ name.error }}</div>
        </div>
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
            <div class="relative">
                <input
                    v-model.trim="password.value"
                    @blur="validatePassword"
                    class="base-input"
                    :type="passwordType"
                    id="password"
                />
                <eye-icon
                    class="absolute top-2 right-2 text-green-500"
                    v-if="!showPassword"
                    @click="showPassword = !showPassword"
                />
                <eye-off-icon
                    class="absolute top-2 right-2 text-green-500"
                    v-else
                    @click="showPassword = !showPassword"
                />
            </div>
            <div v-if="password.error">{{ password.error }}</div>
        </div>

        <div :class="{ 'text-red-500': !!passwordConfirmation.error }">
            <label for="passwordConfirmation">Confirm password</label>
            <input
                v-model.trim="passwordConfirmation.value"
                @blur="validatePassword"
                class="base-input"
                type="password"
                id="passwordConfirmation"
            />
            <div v-if="passwordConfirmation.error">
                {{ passwordConfirmation.error }}
            </div>
        </div>

        <div class="flex justify-between items-center">
            <router-link :to="{ name: 'signin' }" class="text-green-500">
                Sign in
            </router-link>
            <action-button />
        </div>
    </form>
</template>

<script>
import EyeIcon from "../../assets/icons/EyeIcon.vue";
import EyeOffIcon from "../../assets/icons/EyeOffIcon.vue";
import ActionButton from "../form/ActionButton.vue";

export default {
    components: { EyeIcon, EyeOffIcon, ActionButton },
    emits: ["submit-handler"],
    data() {
        return {
            hasError: false,
            showPassword: false,
            name: {
                value: "",
                error: "",
            },
            email: {
                value: "",
                error: "",
            },
            password: {
                value: "",
                error: "",
            },
            passwordConfirmation: {
                value: "",
                error: "",
            },
        };
    },
    computed: {
        passwordType() {
            return this.showPassword ? "text" : "password";
        },
    },
    methods: {
        validateName() {
            if (this.name.value === "") {
                this.name.error = "Name is required!";
                this.hasError = true;
            } else if (this.name.value.length > 50) {
                this.name.error = "Name must not be graiter than 50 characters";
                this.hasError = true;
            } else {
                this.name.error = "";
            }
        },
        async validateEmail() {
            let validEmail =
                /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (this.email.value === "") {
                this.email.error = "Email field is required!";
                this.hasError = true;
            } else if (!this.email.value.match(validEmail)) {
                this.email.error = "Invalid email address!";
                this.hasError = true;
                return;
            }

            let url = `/api/user/${this.email.value}/exists`;
            let data = await this.$axios.get(url);

            if (data.data.data) {
                this.email.error =
                    "This email address has already been taken by another user!";
                this.hasError = true;
            } else {
                this.email.error = "";
            }
        },
        validatePassword() {
            if (this.password.value === "") {
                this.password.error = "Password field is required!";
                this.hasError = true;
            } else if (this.password.value.length < 6) {
                this.password.error =
                    "The password must not be graiter than 6 characters!";
                this.hasError = true;
            } else if (
                this.password.value !== this.passwordConfirmation.value
            ) {
                this.password.error = "The password does not match!";
                this.hasError = true;
            } else {
                this.password.error = "";
            }
        },
        async validate() {
            this.hasError = false;
            await this.validateEmail();
            this.validatePassword();
        },
        async submit() {
            await this.validateEmail();

            if (!this.hasError) {
                return;
            }

            let data = {
                name: this.name.value,
                email: this.email.value,
                password: this.password.value,
                password_confirmation: this.passwordConfirmation.value,
            };

            this.$emit("submit-handler", data);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>

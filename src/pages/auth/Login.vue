<template>
    <div>
        <the-title>Login</the-title>
        <login-form @submit-handler="submit" />
    </div>
</template>

<script>
import TheTitle from "../../ui/TheTitle.vue";
import LoginForm from "./../../components/auth/LoginForm.vue";

export default {
    components: { LoginForm, TheTitle },
    methods: {
        async submit(body) {
            const data = await this.$store.dispatch("login", body);

            if (data.status === 'ok') {
                this.$router.push({ name: "todo.index" });
            }
        },
    },
};
</script>

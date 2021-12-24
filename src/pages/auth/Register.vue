<template>
    <the-title>Sign up</the-title>

    <register-form @submit-handler="submit" />
</template>

<script>
import RegisterForm from "../../components/auth/RegisterForm.vue";
import TheTitle from "../../ui/TheTitle.vue";

export default {
    components: { RegisterForm, TheTitle },
    methods: {
        async submit(body) {
            const data = await this.$store.dispatch("signup", body);

            if (data.status === "ok") {
                this.$router.push({ name: "todo.index" });
            }
        },
    },
};
</script>

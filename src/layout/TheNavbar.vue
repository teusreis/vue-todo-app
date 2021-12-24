<template>
    <nav class="grid grid-cols-3 items-center">
        <div></div>

        <h2
            class="
                text-2xl
                font-semibold
                tracking-wider
                text-green-600 text-center
            "
        >
            Laravue todo
        </h2>

        <div v-if="isLogin" class="flex gap-2 justify-end">
            <the-button variant="primary-outline" @click="logout">
                Sign out
            </the-button>
        </div>
        <div class="flex gap-2 justify-end" v-else>
            <router-link
                :to="{ name: 'signin' }"
                class="
                    text-green-400
                    hover:text-green-500
                    transition-all
                    px-2
                    py-1
                    font-semibold
                "
            >
                Sign in
            </router-link>
            <router-link :to="{ name: 'signup' }">
                <the-button variant="primary-outline"> Sign up </the-button>
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        isLogin() {
            return this.$store.getters.isAuthenticated;
        },
    },

    methods: {
        async logout() {
            const data = await this.$store.dispatch("logout");

            if (data.status === "ok") {
                this.$router.push({ name: "signin" });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
</style>

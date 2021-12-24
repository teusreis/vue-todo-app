<template>
    <router-view></router-view>
</template>

<script>
export default {
    computed: {
        isAuth() {
            return this.$store.getters.isAuthenticated;
        },
    },
    watch: {
        "$store.state.token": function (value) {
            console.log(value);
            if (!value) {
                this.$router.push({ name: "auth" });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
</style>

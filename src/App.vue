<template>
    <div class="w-full max-w-3xl mx-auto px-2 py-5">
        <the-navbar />
        <router-view />
    </div>
</template>

<script>
import TheNavbar from "./layout/TheNavbar.vue";
export default {
    components: { TheNavbar },
    async mounted() {
        await this.$store.dispatch("vefiryToken");
    },
};
</script>

<style lang="postcss">
.base-input {
    @apply w-full rounded border border-gray-500 px-2 py-1 focus:outline-none focus:border-green-500;
}
</style>

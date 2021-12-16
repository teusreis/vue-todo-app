<template>
    <div class="w-full max-w-3xl mx-auto px-2 py-5">
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
        <router-view />
    </div>
</template>

<style lang="postcss">
.base-input {
    @apply w-full rounded border border-gray-500 px-2 py-1 focus:outline-none focus:border-green-500;
}
</style>

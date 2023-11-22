<template>
    <button class="btn btn-ghost btn-block grid p-0 justify-start items-center transition-all duration-300"
        :class="displayText ? 'grid-cols-[44px_1fr]' : 'grid-cols-[44px_0fr]'">
        <div class="place-self-center">
            <slot />
        </div>
        <label class="overflow-hidden grow whitespace-nowrap text-start">
            {{ label }}
        </label>
    </button>
</template>

<script setup lang="ts">
defineProps<{ displayText: boolean, label: string }>()
</script>

<style scoped></style>
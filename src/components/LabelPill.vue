<template>
    <button class="text-xs rounded-full px-2 font-semibold align-text-top lowercase pb-[2px]" :style="{ background: labelValue.color }">
            {{ labelValue.label }}
    </button>
</template>

<script setup lang="ts">
import { ComputedRef, computed } from 'vue';

const props = defineProps<{ label: string }>()

const labelValue: ComputedRef<Label> = computed(() => tmpDB.find((e) => e.label === props.label))

interface Label {
    label: string
    color: string
}

const tmpDB: Array<Label> = [
    {
        label: "dev",
        color: "#991b1b"
    },
    {
        label: "demo",
        color: "#8551d2"
    },
    {
        label: "app",
        color: "#ffb902"
    }
]

</script>
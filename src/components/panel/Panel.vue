<template>
    <div class="bg-base-300 card p-2" :class="spacing">
        <div class="flex mb-3">
            <h1 class="grow font-bold">{{ title }}</h1>
            <details class="dropdown dropdown-end">
                <summary class="btn btn-ghost btn-sm btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                    </svg>
                </summary>
                <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                    <li><button>Klein</button></li>
                    <li><button>Mittel</button></li>
                    <li><button>Breit</button></li>
                    <li><button>Vertikal</button></li>
                    <li><button>Entfernen</button></li>
                </ul>
            </details>
        </div>
        <FacilityOperationsPanel />
        <!-- {{ content }} -->
    </div>
</template>

<script setup lang="ts">
import FacilityOperationsPanel from "./FacilityOperationsPanel.vue"
defineProps<{ spacing: "col-span-2" | "col-span-full" | "row-span-2" | "row-span-full", content: string, title: string }>()

</script>
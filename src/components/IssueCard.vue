<template>
    <div
        class="bg-base-400 rounded-lg h-24 hover:outline hover:outline-1 hover:outline-primary grid grid-rows-[24px_1fr_minmax(0,_auto)] gap-1 px-2 pt-1 pb-2 transition-colors duration-300">
        <div id="card-title">
            <div class="flex items-center gap-2 text-gray-400 text-sm">
                <span v-if="cardValues.state === 0" id="draft"
                    class="outline-dashed outline-2 rounded-full aspect-square outline-offset-4 h-1 mx-1" />
                <span v-else-if="cardValues.state === 1" id="open"
                    class="aspect-square h-1 bg-green-600 rounded-full outline outline-2 outline-green-600 outline-offset-4 mx-1" />
                <span v-else-if="cardValues.state === 2" id="close"
                    class="aspect-square h-4 flex items-center justify-center rounded-full border-2 border-purple-600" >
                    <span class="aspect-square h-1 w-1 bg-purple-600 rounded-sm"/>
                </span>
                />
                <h1>{{ cardValues.headline }}</h1>
                <h1>{{ cardValues.id }}</h1>
            </div>
        </div>
        <p id="card-body" class="text-sm h-fit" :class="cardValues.labels ? 'line-clamp-1' : 'line-clamp-2'">
            {{ cardValues.body }}
        </p>
        <div v-if="cardValues.labels" class="flex gap-2">
            <LabelPill v-for="label in cardValues.labels" :label="label" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import LabelPill from './LabelPill.vue';

interface Card {
    id: string
    headline: string
    body: string
    state: number
    labels?: Array<string>
    progress?: number
}

const props = defineProps<{
    id: string
}>()

//TODO: feherlafll, wenn keine daten gefunden werden können!
const cardValues: ComputedRef<Card> = computed(() => tmpDB.find((e) => e.id === props.id))

const tmpDB: Array<Card> = [
    {
        id: "#11",
        headline: "Todo App schreiben",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio molestias voluptate at sapiente, veniam facere laborum tempora, quis, rerum quo! Ad iusto voluptates nihil magnam ratione reprehenderit quam nulla.",
        state: 1,
        labels: ['demo', 'app']
    },
    {
        id: "#12",
        headline: "Todo App schreiben",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio molestias voluptate at sapiente, veniam facere laborum tempora, quis, rerum quo! Ad iusto voluptates nihil magnam ratione reprehenderit quam nulla.",
        state: 0,
    },
    {
        id: "#13",
        headline: "Todo App schreiben",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio molestias voluptate at sapiente, veniam facere laborum tempora, quis, rerum quo! Ad iusto voluptates nihil magnam ratione reprehenderit quam nulla.",
        state: 2,
        labels: ['demo', 'dev']
    }
]
</script>
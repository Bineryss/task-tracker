<template>
    <div id="row" class="bg-base-600 rounded-xl overflow-auto flex flex-col">
        <div id="row-headline" class="pl-4 pr-2 py-2 flex gap-2 items-center sticky top-0 bg-base-600">
            <h1 class="font-bold">{{ progressValues.title }}</h1>
            <div class="bg-primary rounded-full aspect-square w-4 place-self-start">
                <h4 class="text-center text-xs">{{ progressValues.issues?.length }}</h4>
            </div>
            <div class="grow" />
            <button class="button flex justify-center items-center gap-1 w-6">
                <span v-for="i in 3" class="rounded-full aspect-square h-1 bg-base-100" :key="i" />
            </button>
        </div>

        <ul class="grid gap-2 mx-2 my-4 grow content-start">
            <li v-for="id in progressValues.issues" :key="id">
                <IssueCard :id="id" />
            </li>
        </ul>
        <button class="w-full py-1 bg-base-600 rounded-xl border border-transparent hover:border-primary sticky bottom-0">
            + Add Item
        </button>
    </div>
</template>

<script setup lang="ts">
import { ComputedRef, computed } from "vue";
import IssueCard from "../components/IssueCard.vue"

const props = defineProps<{
    id: string
}>()

const progressValues: ComputedRef<List> = computed(() => {

    return tmpDB.find((e) => e.id === props.id)
})

interface List {
    id: string,
    title: string,
    issues: Array<string>
}

const tmpDB: Array<List> = [
    {
        id: 'todo',
        title: "ToDo",
        issues: ['#11', '#12', '#12', '#12']
    },
    {
        id: 'in-progress',
        title: "In Progress",
        issues: ['#11']
    },
    {
        id: 'done',
        title: "Done",
        issues: ['#11', '#12', '#13']
    }
]
</script>
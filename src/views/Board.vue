<template>
    <nav class="sticky top-0 h-16 bg-base-300 flex items-center gap-8 px-4">
        <div class="aspect-square h-12 bg-primary justify-self-start" />
        <ul class="grow flex gap-2">
            <li>
                <a>Projekte</a>
            </li>
            <li>
                <a>Boards</a>
            </li>
        </ul>
        <button class="bg-primary button">New Issue</button>
    </nav>
    <div class="grid grid-cols-3 gap-4 mt-12 mx-8">
        <div id="row" v-for="i in 3" :key="i" class="bg-base-300 rounded-xl h-[800px] overflow-auto">
            <div id="row-headline" class="px-4 py-2 flex gap-2 items-center sticky top-0 bg-base-300">
                <h1 class="font-bold">Todo</h1>
                <div class="bg-primary rounded-full aspect-square w-4 place-self-start">
                    <h4 class="text-center text-xs">5</h4>
                </div>
                <div class="grow" />
                <button class="flex justify-center items-center gap-1 w-6">
                    <span v-for="i in 3" class="rounded-full aspect-square h-1 bg-base-100" />
                </button>
            </div>

            <ul class="grid gap-2 mx-2 my-4">
                <li v-for="id in issues" :key="id">
                    <IssueCard :id="id" />
                </li>
            </ul>
            <button
                class="w-full py-1 bg-base-300 rounded-b-xl border border-transparent hover:border-primary sticky bottom-0">
                + Add Item
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import IssueCard from "../components/IssueCard.vue"

const issues = ['#11', '#12', '#13']
</script>

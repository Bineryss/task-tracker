<template>
    <nav class="sticky top-0 inset-y-0 h-16 bg-base-600 flex items-center gap-4 px-4 z-50 ">
        <div class="aspect-square h-12 bg-primary justify-self-start" />
        <h1 class="font-bold">Sebastian's Planer</h1>
        <ul class="ml-4 grow flex gap-2">
            <li>
                <a>Projekte</a>
            </li>
            <li>
                <a>Boards</a>
            </li>
            <li>
                <a>About</a>
            </li>
        </ul>
        <button class="button outline outline-2 outline-primary focus:bg-primary transition-colors duration-300">New Issue</button>
    </nav>
    <div class="grid grid-cols-[repeat(3,1fr)] gap-4 mx-4 fixed bottom-2 top-20">
        <ProgressColumn id="todo" />
        <ProgressColumn id="in-progress" />
        <ProgressColumn id="done" />
    </div>
</template>

<script setup lang="ts">
import ProgressColumn from '../components/ProgressColumn.vue';

</script>

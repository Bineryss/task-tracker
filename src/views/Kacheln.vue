<template>
    <div class="grid grid-rows-[min-content_1fr] h-screen duration-300 transition-all p-2 gap-2"
        :class="showSideBar ? 'grid-cols-[1fr_4fr_0fr]' : 'grid-cols-[0fr_4fr_0fr]'">
        <Navbar @click="showSideBar = !showSideBar" />

        <NavigationDrawer :display-text="showSideBar" />

        <div class="col-start-2 grid grid-cols-4 grid-rows-3 gap-4 p-2">
            <Panel v-for="panel in template" :content="panel.content" :spacing="panel.spacing" :title="panel.title" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Panel from "../components/panel/Panel.vue";
import Navbar from "../components/navigation/Navbar.vue";
import NavigationDrawer from "../components/navigation/NavigationDrawer.vue"
import { ref } from 'vue';

const template: Array<any> = [
    {
        title: "Panel A",
        position: 2,
        spacing: "col-span-2"
    },
    {
        title: "Facility Operations",
        position: 1,
        spacing: ""
    },
    {
        title: "Panel C",
        position: 3,
        spacing: "col-span-1"
    },
    {
        title: "Panel D",
        position: 4,
        spacing: "col-span-full row-span-2"
    }
]

template.sort((a, b) => a.position - b.position)

const showSideBar = ref(true)

</script>

<style scoped></style>
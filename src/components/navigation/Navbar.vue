<template>
    <div class="col-span-full navbar bg-base-300 border-primary border-2 gap-4 text-primary-content rounded-box">
        <button @click="emit('click')" class="btn btn-square btn-ghost">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

        <h1 class="font-bold normal-case text-xl">Kunden & Vertragssicht</h1>
        <div class="ml-auto flex gap-1">
            <input class="input" placeholder="Search">
            <div class="join">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost join-item">
                        <span class="hidden lg:inline-block">
                            Calendar
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                    </label>
                    <div class="dropdown-content z-10 card card-compact bg-base-100 shadow border-primary border-2">
                        <div class="card-body">

                            <h2 class="font-bold text-lg">Todays Meetings</h2>
                            <ul>
                                <li class="">
                                    <button class="btn btn-ghost btn-block flex flex-nowrap items-center gap-4">
                                        <span class="badge badge-primary badge-xs"></span>
                                        <p class="whitespace-nowrap text-start">10:30 - Meet & Greet</p>
                                    </button>
                                </li>
                                <li class="">
                                    <button class="btn btn-ghost btn-block flex flex-nowrap items-center gap-4">
                                        <span class="badge badge-accent badge-xs badge-outline"></span>
                                        <p class="whitespace-nowrap text-start">12:00 - Lunch</p>
                                    </button>
                                </li>
                                <li class="">
                                    <button class="btn btn-ghost btn-block flex flex-nowrap items-center gap-4">
                                        <span class="badge badge-primary badge-xs badge-outline"></span>
                                        <p class="whitespace-nowrap text-start">14:00 - Next Steps in...</p>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="card-actions p-1">
                            <button class="btn btn-primary btn-block">Open Calendar</button>
                        </div>
                    </div>
                </div>
                <div class="dropdown dropdown-end">
                    <div class="indicator">
                        <span class="indicator-item badge badge-error">12</span>
                        <label tabindex="0" class="btn btn-ghost join-item">
                            <span class="hidden lg:inline-block">
                                Inbox
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                            </svg>
                        </label>
                    </div>
                    <div class="dropdown-content z-10">
                        <div class="card card-compact bg-base-100 shadow border-primary border-2">

                            <div class="card-body w-96">
                                <h2 class="card-title">Latest Email</h2>
                                <h3 class="font-bold text-sm">Discussions about productivity increases</h3>
                                <p>12:30</p>
                                <p>Hey there, I'd like to discuss with you the potential that lies in R-NEXT.</p>
                                <p> Is 12:30 a good time for you?</p>
                                <br />
                                <p>Kind Regards Jerry</p>
                            </div>
                            <div class="card-actions p-1">
                                <button class="btn btn-ghost btn-square"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <button class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </button>
                                <button class="btn btn-primary grow">Open Inbox</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider-horizontal divider mx-0" />
            <button class="btn btn-ghost flex gap-2 px-2">
                <span>
                    I014600
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])
</script>

<style scoped></style>
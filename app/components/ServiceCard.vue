<script setup>
defineProps({
    service: {
        type: Object,
        required: true,
    }
});
</script>

<template>
    <div class="service-card bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col">
        <div class="w-16 h-16 bg-jade-100 rounded-full flex items-center justify-center mb-6">
            <slot name="icon"></slot>
        </div>

        <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ service.title }}</h3>
        <p class="text-gray-600 mb-6 flex-grow">{{ service.description }}</p>

        <ul class="text-gray-600 mb-6 space-y-2">
            <li v-for="item in service.features" :key="item" class="flex items-center">
                <svg class="w-4 h-4 text-jade-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
                <span>{{ item }}</span>
            </li>
        </ul>

        <div class="text-2xl font-bold text-jade-600 mb-4">Starting at {{ service.price }}</div>

        <!-- Use NuxtLink for internal navigation -->
        <NuxtLink :to="service.link"
            class="block w-full text-center bg-jade-500 hover:bg-jade-600 text-white py-3 rounded-lg font-semibold transition-colors mt-auto">
            Learn More
        </NuxtLink>
    </div>
</template>
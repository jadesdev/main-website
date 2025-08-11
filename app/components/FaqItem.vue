<script setup>
const props = defineProps({
    faq: {
        type: Object,
        required: true,
    },
});
const emit = defineEmits(['toggle']);
</script>

<template>
    <div class="faq-item bg-white rounded-lg shadow-md">

        <button @click="emit('toggle')" class="faq-question w-full text-left p-6 focus:outline-none">
            <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold text-gray-800">{{ faq.question }}</h3>
                <svg class="w-5 h-5 text-gray-500 transform transition-transform duration-300 faq-icon" :class="{ 'rotate-180': faq.open }"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
        </button>

        <div v-show="faq.open" class="faq-answer px-6 pb-6">
            <p class="text-gray-600">{{ faq.answer }}</p>
        </div>
    </div>
</template>
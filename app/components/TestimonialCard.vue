<script setup>
defineProps({
    testimonial: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col justify-between w-auto">
        <div class="mb-6">
            <svg class="w-12 h-12 text-jade-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
            <p class="text-gray-600 text-lg leading-relaxed italic">
                "{{ testimonial.quote }}"
            </p>
        </div>
        <div class="border-t pt-6">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div class="order-1 sm:order-2 flex text-yellow-400 mb-2 sm:mb-0">
                    ⭐⭐⭐⭐⭐
                </div>
                <div class="order-2 sm:order-1 flex items-center">
                    <div class="w-12 h-12 bg-jade-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {{ testimonial.initials }}
                    </div>
                    <div>
                        <div class="font-semibold text-gray-800">{{ testimonial.name }}</div>
                        <div class="text-gray-600 text-sm">{{ testimonial.title }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
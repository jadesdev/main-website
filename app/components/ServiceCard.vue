<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <div class="service-card p-8 rounded-2xl shadow-lg h-full flex flex-col relative overflow-hidden"
    :class="isPopular ? 'featured-service text-white' : 'bg-white'">
    <div v-if="isPopular" class="absolute top-4 right-4">
      <span class="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
        Most Popular
      </span>
    </div>

    <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6" :class="isPopular ? 'bg-white/90' : 'bg-jade-100'">
      <Icon :name="service.heroIcon || 'uil:server-network'" class="w-8 h-8 text-jade-600 text-2xl"> </Icon>
    </div>

    <h3 class="text-2xl font-bold mb-4" :class="isPopular ? 'text-white' : 'text-gray-800'">
      {{ service.title }}
    </h3>

    <p class="mb-6 flex-grow" :class="isPopular ? 'opacity-90' : 'text-gray-600'">
      {{ service.description }}
    </p>

    <ul class="mb-6 space-y-2" :class="isPopular ? 'opacity-90' : 'text-gray-600'">
      <li v-for="item in service.keyBenefits" :key="item" class="flex items-center">
        <svg class="w-4 h-4 mr-2 flex-shrink-0" :class="isPopular ? 'text-white' : 'text-jade-500'" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"></path>
        </svg>
        <span>{{ item }}</span>
      </li>
    </ul>

    <NuxtLink :to="`/services/${service.slug}`" class="block w-full text-center py-3 rounded-lg font-semibold transition-colors mt-auto"
      :class="isPopular ? 'bg-white text-jade-600 hover:bg-gray-100' : 'bg-jade-500 hover:bg-jade-600 text-white'">
      Learn More
    </NuxtLink>
  </div>
</template>
<script setup>

defineProps({
  pkg: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <div>

    <div class="package-card bg-white p-8 rounded-2xl shadow-lg relative" :class="{ 'ring-2 ring-jade-500': pkg.popular }">
      <div v-if="pkg.popular" class="absolute top-4 right-4">
        <span class="bg-jade-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
      <h3 class="text-2xl font-bold mb-2 text-gray-800">{{ pkg.name }}</h3>
      <p class="text-gray-600 mb-6">{{ pkg.description }}</p>
      <div class="text-4xl font-bold text-jade-600 mb-6" v-if="pkg.price">{{ pkg.price }}</div>
      <ul class="space-y-3 mb-8">
        <li v-for="feature in pkg.features" :key="feature" class="flex items-center text-gray-600">
          <Icon name="heroicons:check" class="w-5 h-5 text-jade-500 mr-3" />
          {{ feature }}
        </li>
      </ul>
      <NuxtLink :to="`/contact?service=${pkg.contactParam}`"
        class="block w-full text-center bg-jade-500 hover:bg-jade-600 text-white py-3 rounded-lg font-semibold transition-colors">
        Get Started
      </NuxtLink>
    </div>
  </div>
</template>
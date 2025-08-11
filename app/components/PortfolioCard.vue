<script setup>

defineProps({
	project: {
		type: Object,
		required: true,
	}
});
</script>

<template>
	<div class="portfolio-card bg-white rounded-2xl shadow-lg">
		<div
			class="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-2xl flex items-center justify-center text-white font-bold text-2xl">
			{{ project.title }}
			<div class="overlay rounded-t-2xl">
				<div class="text-center">
					<h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
					<p class="text-white opacity-90 mb-4">{{ project.shortDesc }}</p>
					<div class="flex gap-3">
						<button class="bg-white text-jade-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							View Details
						</button>
						<button class="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-jade-600 transition-colors">
							Live Demo
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="p-6">
			<h3 class="text-xl font-bold mb-2 text-gray-800">{{ project.title }}</h3>
			<p class="text-gray-600 mb-4">{{ project.description }}</p>
			<div class="flex flex-wrap gap-2 mb-4">
				<span v-for="tag in project.tags" :key="tag" class="bg-jade-100 text-jade-700 px-3 py-1 rounded-full text-sm font-semibold">{{ tag
				}}</span>
			</div>
			<div class="flex justify-between items-center">
				<div class="text-sm text-gray-500">Completed: {{ project.date }}</div>
				<div class="text-jade-600 font-semibold">{{ project.industry }}</div>
			</div>
		</div>
	</div>
</template>
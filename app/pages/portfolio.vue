<template>
	<!-- Hero Section -->
	<section class="gradient-bg py-20">
		<div class="container mx-auto px-6">
			<div class="max-w-4xl mx-auto text-center text-white">
				<h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
					Our <span class="text-jade-500">Portfolio</span>
				</h1>
				<p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style="animation-delay: 0.2s">
					Explore our collection of successful projects and see how we've helped businesses transform their
					digital presence.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style="animation-delay: 0.4s">
					<a href="#portfolio" class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all">
						View Our Work
					</a>
					<NuxtLink to="/contact"
						class="border-2 border-white hover:bg-white hover:text-jade-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
						Start Your Project
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>

	<!-- Stats Section -->
	<section class="py-20 bg-white">
		<div class="container mx-auto px-6">
			<div ref="statsContainer" class="grid md:grid-cols-4 gap-8">
				<div class="text-center stats-counter">
					<div class="text-4xl font-bold text-jade-600 mb-2">{{ projectsCompleted }}</div>
					<div class="text-gray-600 font-medium">Projects Completed</div>
				</div>
				<div class="text-center stats-counter">
					<div class="text-4xl font-bold text-jade-600 mb-2">{{ clientSatisfaction }}%</div>
					<div class="text-gray-600 font-medium">Client Satisfaction</div>
				</div>
				<div class="text-center stats-counter">
					<div class="text-4xl font-bold text-jade-600 mb-2">{{ yearsExperience }}</div>
					<div class="text-gray-600 font-medium">Years Experience</div>
				</div>
				<div class="text-center stats-counter">
					<div class="text-4xl font-bold text-jade-600 mb-2">{{ countriesServed }}</div>
					<div class="text-gray-600 font-medium">Countries Served</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Portfolio Filter -->
	<section id="portfolio" class="py-20">
		<div class="container mx-auto px-6">
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our <span class="text-jade-600">Work</span></h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
					From e-commerce platforms to custom web applications, see how we've helped businesses achieve their
					digital goals.
				</p>
				<div class="flex flex-wrap justify-center gap-4 mb-12">
					<button v-for="category in categories" :key="category" @click="setCategory(category)"
						:class="{ 'active': activeCategory === category }"
						class="filter-btn px-6 py-3 rounded-full border-2 border-gray-300 text-gray-600 font-semibold hover:border-jade-500 hover:text-jade-600 capitalize">
						{{ category === 'webapp' ? 'Web Apps' : category }}
					</button>
				</div>
			</div>
			<!-- Portfolio Grid -->
			<div class="portfolio-grid" id="portfolio-grid">
				<PortfolioCard v-for="project in filteredProjects" :key="project.id" :project="project" v-intersect />
			</div>
		</div>
	</section>

	<!-- Client Testimonials -->
	<section class="py-20 bg-gray-100">
		<div class="container mx-auto px-6">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold mb-4 text-gray-800">
					What Our <span class="text-jade-600">Clients Say</span>
				</h2>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">
					Don't just take our word for it. Here's what our clients have to say about working with us.
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-8">

				<div v-for="testimonial in testimonialData" class="testimonial-card bg-white p-8 rounded-2xl shadow-lg">
					<div class="flex items-center mb-6">
						<div class="w-12 h-12 bg-jade-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
							{{ testimonial.initials }}
						</div>
						<div>
							<div class="font-semibold text-gray-800">{{ testimonial.name }}</div>
							<div class="text-gray-600 text-sm">{{ testimonial.title }}</div>
						</div>
					</div>
					<p class="text-gray-600 mb-6 italic">
						"{{ testimonial.quote }}"
					</p>
					<div class="flex text-yellow-400">
						<Icon v-for="rating in testimonial.rating" name="tabler:star-filled" class="text-lg"></Icon>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Process Overview -->
	<section class="py-20">
		<div class="container mx-auto px-6">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold mb-4 text-gray-800">How We <span class="text-jade-600">Work</span></h2>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">
					Our proven process ensures every project is delivered on time and exceeds expectations.
				</p>
			</div>

			<div class="max-w-4xl mx-auto">
				<div class="grid md:grid-cols-2 gap-8">
					<div class="flex items-start space-x-4">
						<div class="w-12 h-12 bg-jade-500 rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
								</path>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">Discovery & Strategy</h3>
							<p class="text-gray-600">We start by understanding your business goals, target audience, and
								project requirements to create a strategic roadmap.</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="w-12 h-12 bg-jade-500 rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z">
								</path>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">Design & Prototyping</h3>
							<p class="text-gray-600">Our design team creates wireframes and interactive prototypes to
								visualize the user experience before development begins.</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="w-12 h-12 bg-jade-500 rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4">
								</path>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">Development & Testing</h3>
							<p class="text-gray-600">We build your solution using modern technologies and conduct
								thorough testing to ensure quality and performance.</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="w-12 h-12 bg-jade-500 rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
								</path>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">Launch & Support</h3>
							<p class="text-gray-600">We handle the deployment and provide ongoing support to ensure your
								project continues to perform optimally.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 gradient-bg">
		<div class="container mx-auto px-6 text-center">
			<div class="max-w-3xl mx-auto text-white">
				<h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Create Something Amazing?</h2>
				<p class="text-xl mb-8 opacity-90">
					Let's discuss your project and bring your vision to life. Get a free consultation and see how we can
					help your business grow.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<NuxtLink to="/contact"
						class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center justify-center">
						<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
							</path>
						</svg>
						Start Your Project
					</NuxtLink>
					<NuxtLink to="/services"
						class="border-2 border-white hover:bg-white hover:text-jade-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
						View Our Services
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { SITE_NAME, SITE_URL } from '~/constants/site';
import projectsData from '~/content/portfolio-data.json'
import testimonialData from '~/content/testimonials.json';

const route = useRoute()
// --- SEO Metadata ---
useSeoMeta({
	title: `Portfolio - Our Work & Success Stories`,
	description: 'Explore our portfolio of custom web development projects, e-commerce solutions, and UI/UX designs. See how we\'ve helped businesses transform their digital presence.',
	ogTitle: `Portfolio | ${SITE_NAME} - Our Work & Success Stories`,
	ogUrl: `${SITE_URL}${route.fullPath}`,
	keywords: 'web development portfolio, custom websites, e-commerce projects, UI UX design examples',
});

const categories = ['all', 'ecommerce', 'webapp', 'website', 'mobile'];

const activeCategory = ref('all');

const projects = ref(projectsData);

const filteredProjects = computed(() => {
	if (activeCategory.value === 'all') {
		return projects.value;
	}
	return projects.value.filter(project => project.category === activeCategory.value);
});

function setCategory(category) {
	activeCategory.value = category;
}


const projectsCompleted = ref(0);
const clientSatisfaction = ref(0);
const yearsExperience = ref(0);
const countriesServed = ref(0);

const statsContainer = ref(null);
let observer = null;

function animateCounter(targetRef, finalValue) {
	let current = 0
	const increment = finalValue / 100
	const timer = setInterval(() => {
		current += increment
		if (current >= finalValue) {
			current = finalValue
			clearInterval(timer)
		}
		targetRef.value = Math.floor(current)
	}, 20)
}

onMounted(() => {
	observer = new IntersectionObserver(([entry]) => {
		if (entry.isIntersecting && !statsContainer.value.classList.contains('visible')) {
			statsContainer.value.classList.add('visible');
			animateCounter(projectsCompleted, 150);
			animateCounter(clientSatisfaction, 98);
			animateCounter(yearsExperience, 5);
			animateCounter(countriesServed, 24);
			observer.unobserve(statsContainer.value);
		}
	}, { threshold: 0.5 });

	if (statsContainer.value) {
		observer.observe(statsContainer.value);
	}
});

onUnmounted(() => {
	if (observer) observer.disconnect();
});
</script>

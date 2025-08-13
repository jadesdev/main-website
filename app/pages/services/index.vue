<template>
  <!-- Hero Section -->
  <section class="gradient-bg py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
          Web Development <span class="text-jade-500">Services</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style="animation-delay: 0.2s">
          Transform your business with custom web solutions that drive results and exceed expectations.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style="animation-delay: 0.4s">
          <a href="#services" class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all">
            Explore Services
          </a>
          <NuxtLink to="/contact"
            class="border-2 border-white hover:bg-white hover:text-jade-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
            Start Your Project
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Overview -->
  <section id="services" class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our <span class="text-jade-600">Services</span></h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer comprehensive web development solutions tailored to your business needs. From concept to deployment, we've got you covered.
        </p>
      </div>
      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard v-for="(service, index) in services" :key="service.title" :service="service" :is-popular="service.isPopular">
        </ServiceCard>
      </div>
    </div>
  </section>

  <!-- Additional Services -->
  <section class="py-20 bg-gray-100">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-16 text-gray-800">Additional <span class="text-jade-600">Services</span></h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div v-for="service in additionalServices" class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-jade-100 rounded-lg flex items-center justify-center mb-4">
            <Icon :name="service.heroIcon" class="text-jade-600 text-xl w-6 h-6"></Icon>
          </div>
          <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ service.title }}</h3>
          <p class="text-gray-600 text-sm mb-3">
            {{ service.description }}
          </p>

          <NuxtLink :to="`/services/${service.slug}`"
            class="block w-full text-center mt-3 py-2 rounded-lg font-semibold transition-colors mt-auto bg-jade-500 hover:bg-jade-600 text-white">
            Learn More
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Our <span class="text-jade-600">Process</span></h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          We follow a proven methodology to ensure your project is delivered on time, on budget, and exceeds
          expectations.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8">
          <div v-intersect class="process-step text-center">
            <div class="w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-xl">1</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Discovery</h3>
            <p class="text-gray-600">Understanding your business goals, target audience, and project requirements.</p>
          </div>

          <div v-intersect class="process-step text-center">
            <div class="w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-xl">2</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Design</h3>
            <p class="text-gray-600">Creating wireframes, mockups, and prototypes that bring your vision to life.</p>
          </div>

          <div v-intersect class="process-step text-center">
            <div class="w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-xl">3</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Development</h3>
            <p class="text-gray-600">Building your solution using modern technologies and best practices.</p>
          </div>

          <div v-intersect class="process-step text-center">
            <div class="w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-xl">4</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Launch</h3>
            <p class="text-gray-600">Testing, deployment, and ongoing support to ensure your success.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-20 bg-gray-100">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Frequently Asked <span class="text-jade-600">Questions</span></h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">Get answers to common questions about our web development services.</p>
      </div>
      <div class="max-w-3xl mx-auto">
        <FaqAccordion :faqs="servicesPageFaqs" />
      </div>
    </div>
  </section>>

  <!-- CTA Section -->
  <section class="py-20 gradient-bg">
    <div class="container mx-auto px-6 text-center">
      <div class="max-w-3xl mx-auto text-white">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl mb-8 opacity-90">
          Let's discuss your vision and create something amazing together. Get a free consultation and project
          estimate.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="contact"
            class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
              </path>
            </svg>
            Start Free Consultation
          </NuxtLink>
          <NuxtLink to="portfolio"
            class="border-2 border-white hover:bg-white hover:text-jade-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
            View Our Portfolio
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { SITE_NAME, SITE_URL } from '~/constants/site';
import faqsData from '~/content/faqs.json'
import servicesData from '~/content/services-data.json'
const route = useRoute()
// --- SEO Metadata ---
useSeoMeta({
  title: 'Software Development Services, Websites & Applications',
  description: 'Professional software development services including custom websites, e-commerce solutions, UI/UX design, and performance optimization. Get a quote today.',
  ogTitle: `Professional Softare Development Services | ${SITE_NAME}`,
  ogDescription: 'Transform your business with our expert web development services. Custom websites, e-commerce, and digital solutions.',
  ogUrl: `${SITE_URL}+${route.fullPath}`,
  keywords: 'software development, custom websites, e-commerce, UI UX design, responsive design, web applications, web development, softwares, jadesdev',
});
const services = ref(servicesData.filter(service => service.type === 'main'))
const additionalServices = ref(servicesData.filter(service => service.type === 'others'))

const servicesPageFaqs = ref(faqsData.services);
</script>
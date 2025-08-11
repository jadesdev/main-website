<template>
  <div>
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
          <ServiceCard v-for="(service, index) in services" :key="service.title" :service="service">
            <template #icon>
              <svg v-if="index === 0" class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              <svg v-if="index === 1" class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z">
                </path>
              </svg>
              <svg v-if="index === 2" class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"></path>
              </svg>
            </template>
          </ServiceCard>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16 text-gray-800">Additional <span class="text-jade-600">Services</span></h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-jade-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800">Performance Optimization</h3>
            <p class="text-gray-600 text-sm mb-3">Speed up your website and improve search rankings with our
              optimization services.</p>
            <div class="text-jade-600 font-semibold">From $800</div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-jade-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                </path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800">Security & Maintenance</h3>
            <p class="text-gray-600 text-sm mb-3">Keep your website secure and up-to-date with our maintenance
              packages.</p>
            <div class="text-jade-600 font-semibold">From $200/month</div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-jade-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z">
                </path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800">SEO & Analytics</h3>
            <p class="text-gray-600 text-sm mb-3">Improve your search rankings and track your website's
              performance.</p>
            <div class="text-jade-600 font-semibold">From $600</div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-jade-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800">Mobile App Development</h3>
            <p class="text-gray-600 text-sm mb-3">Cross-platform mobile applications that complement your web
              presence.</p>
            <div class="text-jade-600 font-semibold">From $8,000</div>
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
            <a href="/contact"
              class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                </path>
              </svg>
              Start Free Consultation
            </a>
            <a href="/portfolio"
              class="border-2 border-white hover:bg-white hover:text-jade-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
              View Our Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// --- SEO Metadata ---
useSeoMeta({
  title: 'Web Development Services | JadesDev - Custom Websites & Applications',
  description: 'Professional web development services including custom websites, e-commerce solutions, UI/UX design, and performance optimization. Get a quote today.',
  ogTitle: 'Professional Web Development Services | JadesDev',
  ogDescription: 'Transform your business with our expert web development services. Custom websites, e-commerce, and digital solutions.',
  ogUrl: 'https://jadesdev.com/services',
  keywords: 'web development, custom websites, e-commerce, UI UX design, responsive design, web applications',
});

const services = ref([
  {
    title: 'Custom Web Development',
    description: 'Tailored websites and web applications built with cutting-edge technologies for optimal performance and user experience.',
    features: ['Responsive Design', 'Modern Frameworks', 'API Integration', 'Database Integration'],
    price: '$2,500',
    link: '/services/web-development' // Link to the detailed page
  },
  {
    title: 'UI/UX Design & Development',
    description: 'Beautiful, intuitive interfaces combined with seamless development for the complete package.',
    features: ['User Research & Analysis', 'Wireframes & Prototypes', 'Visual Design & Dev', 'Usability Testing'],
    price: '$3,500',
    link: '/services/ui-ux-design'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete online stores with payment processing, inventory management, and analytics integration.',
    features: ['Payment Gateway Integration', 'Inventory Management', 'Order Management', 'Analytics & Reporting'],
    price: '$5,000',
    link: '/services/ecommerce'
  }
]);

const servicesPageFaqs = ref([
  { question: 'How long does a typical web development project take?', answer: 'Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while complex web applications can take 8-16 weeks.' },
  { question: 'Do you provide ongoing maintenance and support?', answer: 'Yes! We offer comprehensive maintenance packages that include security updates, performance monitoring, content updates, and technical support.' },
  { question: 'Can you work with our existing hosting provider?', answer: 'Absolutely! We can work with any hosting provider and can also recommend optimal solutions.' },
  { question: 'What technologies do you use for development?', answer: 'We use modern technologies including React, Vue.js, Next.js, and Node.js. We select the best technology stack for your specific project requirements.' }
]);
</script>
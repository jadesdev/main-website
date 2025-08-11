<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-28 bg-gray-50 overflow-hidden">
      <div class="absolute inset-0 hero-bg-pattern opacity-50"></div>
      <div class="container mx-auto px-6 relative">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left">
            <h1 class="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              We Build Digital Products <span class="text-jade-600">That Drive Growth.</span>
            </h1>
            <p class="text-lg lg:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              From stunning websites to complex web applications, our team delivers high-performance solutions engineered for success.
              Let's build your future, together.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink to="/contact"
                class="bg-jade-500 hover:bg-jade-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Your Project
              </NuxtLink>
              <NuxtLink to="/portfolio"
                class="bg-white hover:bg-gray-100 text-jade-600 px-8 py-4 rounded-full font-semibold transition-all border border-gray-200">
                See Our Work
              </NuxtLink>
            </div>
          </div>
          <div class="relative hidden lg:block">
            <img src="https://placehold.co/800x600/059669/FFFFFF?text=Project+Mockup" alt="Modern web application dashboard mockup"
              class="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div class="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-2xl">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-jade-100 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-6 h-6 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-bold text-gray-800">45% Faster</p>
                  <p class="text-sm text-gray-500">Performance increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Trusted By Section -->
    <div class="py-12 bg-gray-100">
      <div class="container mx-auto px-6">
        <h3 class="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Trusted by Innovative
          Companies</h3>
        <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          <span class="font-bold text-gray-400 text-lg">Innovate Inc.</span>
          <span class="font-bold text-gray-400 text-lg">Quantum</span>
          <span class="font-bold text-gray-400 text-lg">Apex Solutions</span>
          <span class="font-bold text-gray-400 text-lg">NextGen Co</span>
          <span class="font-bold text-gray-400 text-lg">Stellar</span>
        </div>
      </div>
    </div>


    <!-- Services Section -->
    <section id="services" class="py-20 section-fade-in">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Solutions for <span class="text-jade-600">Every
              Ambition</span></h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a complete suite of services to take your digital product from concept to launch and
            beyond.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="glow-card bg-white p-8 rounded-2xl border border-gray-200">
            <h3 class="text-2xl font-bold mb-3">Product Strategy</h3>
            <p class="text-gray-600 mb-6">We help you define your vision, understand your users, and create a
              roadmap that ensures your product succeeds in the market.</p>
            <ul class="text-sm space-y-2 text-gray-500">
              <li>- Market Research</li>
              <li>- User Personas</li>
              <li>- Feature Prioritization</li>
            </ul>
          </div>
          <div class="glow-card bg-white p-8 rounded-2xl border border-gray-200">
            <h3 class="text-2xl font-bold mb-3">UI/UX Design</h3>
            <p class="text-gray-600 mb-6">Our design process focuses on creating beautiful, functional, and
              intuitive interfaces that users love to interact with.</p>
            <ul class="text-sm space-y-2 text-gray-500">
              <li>- Wireframing</li>
              <li>- High-Fidelity Prototypes</li>
              <li>- Design Systems</li>
            </ul>
          </div>
          <div class="glow-card bg-white p-8 rounded-2xl border border-gray-200">
            <h3 class="text-2xl font-bold mb-3">Engineering</h3>
            <p class="text-gray-600 mb-6">We build fast, secure, and scalable applications using the best
              technologies for the job, from front-end to back-end.</p>
            <ul class="text-sm space-y-2 text-gray-500">
              <li>- Web & Mobile Apps</li>
              <li>- API Development</li>
              <li>- Cloud Deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Process Section -->
    <section id="process" class="py-20 bg-gray-100 section-fade-in">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-jade-600 font-semibold uppercase">Our Method</span>
          <h2 class="text-4xl md:text-5xl font-bold mt-2 mb-4">A Proven Path to Success</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Our transparent, four-step process ensures we deliver
            outstanding results on time, every time.</p>
        </div>
        <div class="grid md:grid-cols-4 gap-4 text-center">
          <!-- Step 1 -->
          <div class="p-6">
            <div class="flex items-center justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-jade-500 text-white flex items-center justify-center text-2xl font-bold">
                1</div>
            </div>
            <h3 class="text-lg font-bold mb-2">Discover</h3>
            <p class="text-sm text-gray-600">We start with a deep dive into your vision, goals, and audience to
              define the project scope and strategy.</p>
          </div>
          <!-- Step 2 -->
          <div class="p-6">
            <div class="flex items-center justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-jade-600 text-white flex items-center justify-center text-2xl font-bold">
                2</div>
            </div>
            <h3 class="text-lg font-bold mb-2">Design</h3>
            <p class="text-sm text-gray-600">Our team creates wireframes and high-fidelity, interactive
              prototypes to perfect the user experience.</p>
          </div>
          <!-- Step 3 -->
          <div class="p-6">
            <div class="flex items-center justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-jade-700 text-white flex items-center justify-center text-2xl font-bold">
                3</div>
            </div>
            <h3 class="text-lg font-bold mb-2">Develop</h3>
            <p class="text-sm text-gray-600">We write clean, scalable code and conduct rigorous testing to build
              a high-quality, bug-free product.</p>
          </div>
          <!-- Step 4 -->
          <div class="p-6">
            <div class="flex items-center justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-jade-900 text-white flex items-center justify-center text-2xl font-bold">
                4</div>
            </div>
            <h3 class="text-lg font-bold mb-2">Deploy</h3>
            <p class="text-sm text-gray-600">We manage a seamless launch and provide ongoing support to ensure
              your product's long-term success.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section v-intersect id="portfolio" class="py-20 bg-gray-50 section-fade-in">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Proof is in the <span class="text-jade-600">Portfolio</span></h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">We've helped businesses of all sizes launch and scale their digital products.</p>
          <p class="text-md">Here are a few of our favorite projects.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-10">
          <PortfolioCard v-for="project in portfolioHighlights" :key="project.id" :project="project" class="hover-lift" />
        </div>
        <div class="text-center mt-12">
          <NuxtLink to="/portfolio" class="bg-jade-500 hover:bg-jade-600 text-white px-8 py-3 rounded-full font-semibold transition-all">
            Explore All Projects
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-100 section-fade-in">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">What Our <span class="text-jade-600">Clients Say</span></h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">See what our clients are saying about their experience with JadesDev.</p>
        </div>

        <div class="relative max-w-4xl mx-auto">
          <div class="overflow-hidden">
            <div class="testimonial-track flex transition-transform duration-500 ease-in-out" :style="trackStyle">
              <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-slide w-full flex-shrink-0 px-4">
                <TestimonialCard :testimonial="testimonial" />
              </div>
            </div>
          </div>
          <button @click="prevSlide"
            class="prev-btn absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white hover:bg-jade-500 hover:text-white text-jade-500 p-3 rounded-full shadow-lg transition-all duration-300 z-10">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button @click="nextSlide"
            class="next-btn absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white hover:bg-jade-500 hover:text-white text-jade-500 p-3 rounded-full shadow-lg transition-all duration-300 z-10">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          <div class="flex justify-center mt-8 space-x-3">
            <button v-for="(testimonial, index) in testimonials" :key="`dot-${index}`" @click="goToSlide(index)"
              class="dot w-3 h-3 rounded-full transition-all duration-300" :class="currentSlide === index ? 'bg-jade-500' : 'bg-gray-300'"></button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- SEO Metadata ---
useSeoMeta({
  title: 'JadesDev - Custom Web & App Development That Drives Growth',
  description: 'JadesDev builds high-performance, custom websites and applications that drive business growth. Partner with us to transform your digital presence.',
  ogTitle: 'JadesDev - Custom Web & App Development That Drives Growth',
  ogUrl: 'https://jadesdev.com/',
  keywords: 'web development, app development, custom software, digital products, UI/UX design, saas development',
});

// --- Data for Components ---
// In a real app, this would come from an API
const portfolioHighlights = ref([
  { id: 1, title: 'Quantum Analytics Platform', description: 'A powerful SaaS dashboard that helps businesses make data-driven decisions with real-time insights.', tags: ['React', 'D3.js'], category: 'webapp', link: '/portfolio/quantum' },
  { id: 2, title: 'Stellar Goods E-commerce', description: 'A high-end, bespoke e-commerce site focused on providing a seamless and luxury shopping experience.', tags: ['Next.js', 'Shopify Plus'], category: 'ecommerce', link: '/portfolio/stellar' },
]);

const testimonials = ref([
  { id: 1, quote: 'JadesDev transformed our vision into a stunning e-commerce platform. The attention to detail and user experience is exceptional. Sales increased by 300% in the first quarter!', name: 'Sarah Mitchell', title: 'CEO, LuxeShop', initials: 'SM' },
  { id: 2, quote: 'The team delivered exactly what we envisioned and more. Their technical expertise and project management skills are outstanding. The web app they built has streamlined our operations.', name: 'Michael Rodriguez', title: 'Founder, TaskFlow Pro', initials: 'MR' },
  { id: 3, quote: 'Our new website has completely transformed our business. Online orders increased by 400% and customer feedback has been incredible. Thank you JadesDev!', name: 'Jennifer Chen', title: 'Owner, RestaurantPro', initials: 'JC' },
]);

// --- Testimonial Carousel Logic ---
const currentSlide = ref(0);
let autoPlayInterval = null;

const trackStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`
}));

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % testimonials.value.length;
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + testimonials.value.length) % testimonials.value.length;
}

function goToSlide(index) {
  currentSlide.value = index;
}

onMounted(() => {
  autoPlayInterval = setInterval(nextSlide, 6000);
});

onUnmounted(() => {
  clearInterval(autoPlayInterval);
});

</script>

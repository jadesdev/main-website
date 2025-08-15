<template>
  <div>
    <!-- Hero Section -->
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            About <span class="text-jade-500">{{ SITE_NAME }}</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style="animation-delay: 0.2s">
            We're passionate developers and designers committed to creating exceptional digital experiences that
            drive your business forward.
          </p>
          <div class="animate-fade-up" style="animation-delay: 0.4s">
            <a href="#journey" class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all">
              Our Journey
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6 text-gray-800">Our <span class="text-jade-600">Story</span>
              </h2>
              <p class="text-lg text-gray-600 mb-6">
                Founded in 2020, {{ SITE_NAME }} emerged from a simple belief: every business deserves a powerful
                digital presence that reflects their unique value and drives real results.
              </p>
              <p class="text-lg text-gray-600 mb-6">
                What started as a small team of passionate developers has grown into a full-service web
                development agency, serving clients across various industries. We've helped startups launch
                their first websites, supported growing businesses scale their online presence, and
                partnered with established companies to modernize their digital infrastructure.
              </p>
              <p class="text-lg text-gray-600">
                Today, we continue to push the boundaries of what's possible on the web, combining
                cutting-edge technology with thoughtful design to create solutions that not only look great
                but perform exceptionally.
              </p>
            </div>
            <div ref="statsContainer" class="bg-jade-50 p-8 rounded-2xl">
              <div class="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div class="stat-counter">{{ projectsCompleted }}</div>
                  <p class="text-gray-600 font-semibold">Projects Completed</p>
                </div>
                <div>
                  <div class="stat-counter">{{ clientSatisfaction }}%</div>
                  <p class="text-gray-600 font-semibold">Client Satisfaction %</p>
                </div>
                <div>
                  <div class="stat-counter">{{ yearsExperience }}</div>
                  <p class="text-gray-600 font-semibold">Years Experience</p>
                </div>
                <div>
                  <div class="stat-counter">{{ happyClients }}</div>
                  <p class="text-gray-600 font-semibold">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">Our <span class="text-jade-600">Values</span></h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            These core principles guide everything we do and shape the way we work with our clients.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="value-card bg-white p-8 rounded-2xl text-center">
            <div class="w-16 h-16 bg-jade-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                </path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Innovation</h3>
            <p class="text-gray-600">
              We stay at the forefront of web technology, constantly learning and implementing the latest
              tools and techniques to deliver cutting-edge solutions.
            </p>
          </div>

          <div class="value-card bg-white p-8 rounded-2xl text-center">
            <div class="w-16 h-16 bg-jade-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                </path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Collaboration</h3>
            <p class="text-gray-600">
              We believe the best results come from working closely with our clients, treating every project
              as a true partnership built on trust and communication.
            </p>
          </div>

          <div class="value-card bg-white p-8 rounded-2xl text-center">
            <div class="w-16 h-16 bg-jade-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                </path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Quality</h3>
            <p class="text-gray-600">
              Excellence is non-negotiable. We take pride in delivering polished, high-performance solutions
              that exceed expectations and stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="py-20" v-if="team.length > 3">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">Meet Our <span class="text-jade-600">Team</span></h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know the talented individuals who bring your digital visions to life.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="(member, index) in team" :key="member.name" class="team-member bg-white p-6 rounded-2xl shadow-lg text-center">
            <div v-if="member.image" class="w-24 h-24 bg-jade-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img :src="`${member.image}`" class="rounded-full w-23 h-23 " :alt="member.name">
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800">{{ member.name }}</h3>
            <p class="text-jade-600 font-semibold mb-3">{{ member.role }}</p>
            <p class="text-gray-600 text-sm mb-4">{{ member.bio }}</p>
            <div class="flex justify-center space-x-3">
              <a v-for="(social, sIndex) in member.socials" :key="sIndex" :href="social.url"
                class="text-gray-400 hover:text-jade-500 transition-colors">
                <Icon :name="`simple-icons:${social.icon || 'facebook'}`" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Timeline -->
    <section id="journey" class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">Our <span class="text-jade-600">Journey</span></h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Key milestones that have shaped {{ SITE_NAME }} into the company we are today.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div v-for="(item, index) in timeline" :key="index" v-intersect class="timeline-item flex items-center">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">{{ item.year }}</span>
                </div>
              </div>
              <div class="ml-6 bg-white p-6 rounded-xl shadow-md flex-1">
                <h3 class="text-xl font-bold mb-2 text-gray-800">{{ item.title }}</h3>
                <p class="text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">Why Choose <span class="text-jade-600">{{ SITE_NAME }}</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            We're more than just developers – we're your partners in digital success.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div class="space-y-6">
            <div v-for="(feature, index) in features.slice(0, Math.ceil(features.length / 2))" :key="feature.title"
              class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-jade-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-jade-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd">
                  </path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ feature.title }}</h3>
                <p class="text-gray-600">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div v-for="(feature, index) in features.slice(Math.ceil(features.length / 2))" :key="feature.title" class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-jade-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-jade-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd">
                  </path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ feature.title }}</h3>
                <p class="text-gray-600">{{ feature.description }}</p>
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
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
          <p class="text-xl mb-8 opacity-90">
            Let's discuss your project and discover how our team can help bring your vision to life.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact"
              class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center justify-center">
              <Icon name=""></Icon>
              Get In Touch
            </NuxtLink>
            <NuxtLink to="/services"
              class="border-2 border-white hover:bg-white hover:text-jade-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
              View Our Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { SITE_URL, SITE_NAME } from '~/constants/site';
import timeline from '~/content/timeline.json'
import features from '~/content/features.json'
import team from '~/content/team.json'

const route = useRoute()
// --- SEO Metadata ---
useSeoMeta({
  title: `About Us | ${SITE_NAME} - Our Story, Values, and Team`,
  description: `Learn about ${SITE_NAME}, a passionate team of developers and designers committed to creating exceptional digital experiences that drive your business forward.`,
  ogTitle: `About ${SITE_NAME} | Our Story, Values, and Team`,
  ogDescription: `Meet the team behind ${SITE_NAME} and discover our commitment to innovation, collaboration, and quality in web development.`,
  ogUrl: `${SITE_URL}${route.fullPath}`
});

// --- Stat Counter Logic ---
const projectsCompleted = ref(0);
const clientSatisfaction = ref(0);
const yearsExperience = ref(0);
const happyClients = ref(0);

// We need a reference to the container element to observe it
const statsContainer = ref(null);
let observer = null;

// The animation function for a single counter
function animateCounter(targetRef, finalValue, suffix = '') {
  let current = 0;
  const increment = finalValue / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= finalValue) {
      current = finalValue;
      clearInterval(timer);
    }
    targetRef.value = Math.floor(current);
  }, 20);
}

onMounted(() => {
  const options = {
    threshold: 0.5
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsContainer.value.classList.contains('animated')) {
        statsContainer.value.classList.add('animated');

        animateCounter(projectsCompleted, 150);
        animateCounter(clientSatisfaction, 98, '%');
        animateCounter(yearsExperience, 5);
        animateCounter(happyClients, 50);

        observer.unobserve(statsContainer.value);
      }
    });
  }, options);

  if (statsContainer.value) {
    observer.observe(statsContainer.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

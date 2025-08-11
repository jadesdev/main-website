<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div>
          <div class="text-2xl font-bold mb-4">
            Jades<span class="text-jade-500">Dev</span>
          </div>
          <p class="text-gray-400 mb-4">
            Creating exceptional web experiences that drive business growth and user engagement.
          </p>
          <div class="flex space-x-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" class="text-gray-400 hover:text-jade-500 transition-colors"
              :aria-label="social.name" target="_blank" rel="noopener noreferrer">
              <Icon :name="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Services Section -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Services</h3>
          <ul class="space-y-2 text-gray-400">
            <li v-for="service in services" :key="service.path">
              <NuxtLink :to="service.path" class="hover:text-jade-500 transition-colors">
                {{ service.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company Section -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-gray-400">
            <li v-for="link in companyLinks" :key="link.path">
              <NuxtLink :to="link.path" class="hover:text-jade-500 transition-colors">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <ul class="space-y-2 text-gray-400">
            <li v-for="contact in contactInfo" :key="contact">
              {{ contact }}
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ currentYear }} JadesDev. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

// Current year for copyright
const currentYear = computed(() => new Date().getFullYear())

// Social media links data
const socialLinks = [
  {
    name: 'Facebook',
    url: '#',
    icon: 'simple-icons:facebook'
  },
  {
    name: 'Twitter',
    url: '#',
    icon: 'simple-icons:twitter'
  },
  {
    name: 'Instagram',
    url: '#',
    icon: 'simple-icons:instagram'
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: 'simple-icons:linkedin'
  }
]

// Services data
const services = [
  { name: 'Web Development', path: '#service/web-development' },
  { name: 'UI/UX Design', path: '#service/ui-ux-design' },
  { name: 'E-commerce', path: '#service/ecommerce' },
  { name: 'Mobile Apps', path: '#service/mobile-apps' }
]

// Company links data
const companyLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '#' },
  { name: 'Careers', path: '#' }
]

// Contact information
const contactInfo = [
  'hello@jadesdev.com',
  '+1 (555) 123-4567',
  'Remote Team',
  'Global Reach'
]
</script>

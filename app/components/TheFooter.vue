<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div>
          <div class="font-bold mb-2 flex items-center">
            <img src="/logo.png" class="h-18" alt="">
            <span v-if="isLocal" class="mb-1 justify-cemter">RC: {{ COMPANY_RC }}</span>
          </div>
          <p class="text-gray-400 mb-4">
            {{ SITE_TAGLINE }}
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              class="text-gray-400 hover:text-jade-500 transition-colors"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon :name="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Services Section -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Services</h3>
          <ul class="space-y-2 text-gray-400">
            <li v-for="service in services" :key="service.path">
              <NuxtLink :to="`/services/${service.slug}`" class="hover:text-jade-500 transition-colors">
                {{ service.shortTitle }}
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
            <li v-for="contact in footerContact" :key="contact">
              {{ contact }}
            </li>
            <li v-if="!isLocal">
              <a
                :href="CALENDLY_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-jade-500 transition-colors"
              >
                Book a call
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8">
        <div class="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:items-end">
          <RegionSwitcher />
          <p class="text-gray-400 text-sm text-center lg:text-right">
            &copy; {{ currentYear }} {{ SITE_NAME }}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import {
  SITE_NAME,
  SITE_TAGLINE,
  COMPANY_RC,
  CALENDLY_URL,
  getFooterContact,
  getSocialLinks,
} from '~/constants/site'
import servicesData from '~/content/services-data.json'

const { isLocal } = useRegion()

const currentYear = computed(() => new Date().getFullYear())
const services = servicesData.filter(service => service.type == "main")
const footerContact = computed(() => getFooterContact(isLocal.value))
const socialLinks = computed(() => getSocialLinks(isLocal.value))

const companyLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Careers', path: '/careers' }
]
</script>

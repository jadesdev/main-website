<template>
  <div>
    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-gray-800">
            Jades<span class="text-jade-500">Dev</span>
          </NuxtLink>

          <div class="hidden md:flex space-x-8">
            <NuxtLink v-for="item in navigationItems" :key="item.path" :to="item.path" class="text-gray-600 hover:text-jade-500 transition-colors"
              :class="{ 'text-jade-600 font-semibold': isCurrentRoute(item.path) }">
              {{ item.name }}
            </NuxtLink>
          </div>

          <NuxtLink to="/contact"
            class="hidden md:block bg-jade-500 hover:bg-jade-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
            Get Quote
          </NuxtLink>

          <button @click="toggleMobileMenu" class="md:hidden text-gray-600" aria-label="Toggle mobile menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-40 bg-white" @click="closeMobileMenu">
        <div class="flex flex-col items-center justify-center h-full space-y-8 text-gray-800 text-xl">
          <NuxtLink v-for="item in navigationItems" :key="item.path" :to="item.path" class="hover:text-jade-500 transition-colors"
            :class="{ 'text-jade-600 font-semibold': isCurrentRoute(item.path) }" @click="closeMobileMenu">
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Navigation items
const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

// Get current route
const route = useRoute()

// Methods
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const isCurrentRoute = (path) => {
  return route.path === path
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})

// Prevent body scroll when mobile menu is open
watch(isMobileMenuOpen, (isOpen) => {
  if (process.client) {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

// Clean up on unmount
onUnmounted(() => {
  if (process.client) {
    document.body.style.overflow = ''
  }
})
</script>
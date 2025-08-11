<template>
  <div>
    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <a href="/" class="text-2xl font-bold text-gray-800">
            Jades<span class="text-jade-500">Dev</span>
          </a>
          <div class="hidden md:flex space-x-8">
            <a href="/" class="text-gray-600 hover:text-jade-500 transition-colors">Home</a>
            <a href="/services" class="text-gray-600 hover:text-jade-500 transition-colors">Services</a>
            <a href="/portfolio" class="text-gray-600 hover:text-jade-500 transition-colors">Portfolio</a>
            <a href="/about" class="text-gray-600 hover:text-jade-500 transition-colors">About</a>
            <a href="/contact" class="text-jade-600 font-semibold">Contact</a>
          </div>
          <a href="/contact" class="hidden md:block bg-jade-500 hover:bg-jade-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
            Get Quote
          </a>
          <button id="mobile-menu-btn" class="md:hidden text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="fixed inset-0 z-40 bg-white hidden">
      <div class="flex flex-col items-center justify-center h-full space-y-8 text-gray-800 text-xl">
        <a href="/" class="hover:text-jade-500 transition-colors">Home</a>
        <a href="/services" class="hover:text-jade-500 transition-colors">Services</a>
        <a href="/portfolio" class="hover:text-jade-500 transition-colors">Portfolio</a>
        <a href="/about" class="hover:text-jade-500 transition-colors">About</a>
        <a href="/contact" class="text-jade-600 font-semibold">Contact</a>
      </div>
    </div>
  </div>
</template>
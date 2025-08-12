<template>
  <div>
    <!-- Breadcrumb -->
    <div class="bg-gray-100 py-4">
      <div class="container mx-auto px-6">
        <nav class="text-sm text-gray-600">
          <NuxtLink to="/" class="hover:text-jade-600">Home</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/services" class="hover:text-jade-600">Services</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-gray-800">{{ service.title }}</span>
        </nav>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-white">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              {{ service.heroTitle }} <span class="text-jade-500">{{ service.heroHighlight }}</span>
            </h1>
            <p class="text-xl mb-8 opacity-90">
              {{ service.heroDescription }}
            </p>
            <div class="flex flex-wrap gap-4 mb-8">
              <span v-for="benefit in service.keyBenefits" :key="benefit" class="bg-white/20 px-4 py-2 rounded-full text-sm">
                {{ benefit }}
              </span>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#packages" class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all text-center">
                View Packages
              </a>
              <NuxtLink to="/contact"
                class="border-2 border-white hover:bg-white hover:text-jade-900 text-white px-8 py-4 rounded-full font-semibold transition-all text-center">
                Get Free Quote
              </NuxtLink>
            </div>
          </div>
          <div class="relative">
            <div class="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div class="space-y-4">
                <div class="h-6 bg-white/30 rounded w-3/4"></div>
                <div class="h-4 bg-white/20 rounded w-full"></div>
                <div class="h-4 bg-white/20 rounded w-5/6"></div>
                <div class="grid grid-cols-2 gap-4 mt-6">
                  <div class="h-20 bg-white/20 rounded"></div>
                  <div class="h-20 bg-white/20 rounded"></div>
                </div>
              </div>
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center">
                <Icon :name="`heroicons:${service.heroIcon}`" class="w-8 h-8 text-white text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Overview -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4 text-gray-800">
              {{ service.overviewTitle }} <span class="text-jade-600">{{ service.overviewHighlight }}</span> Services?
            </h2>
            <p class="text-xl text-gray-600">
              {{ service.overviewDescription }}
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div v-for="feature in service.features" :key="feature.title" class="feature-card bg-white p-6 rounded-xl shadow-lg">
              <div class="w-12 h-12 bg-jade-100 rounded-lg flex items-center justify-center mb-4">
                <Icon :name="`heroicons:${feature.icon}`" class="w-6 h-6 text-jade-600 text-xl" />
              </div>
              <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ feature.title }}</h3>
              <p class="text-gray-600 text-sm">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Used -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">
            {{ service.technologiesTitle }} <span class="text-jade-600">{{ service.technologiesHighlight }}</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ service.technologiesDescription }}
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <span v-for="tech in service.technologies" :key="tech"
            class="tech-badge bg-white px-6 py-3 rounded-full font-semibold text-gray-700 shadow-md cursor-pointer hover:shadow-lg transition-shadow">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- Development Process -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">
            {{ service.processTitle }} <span class="text-jade-600">{{ service.processHighlight }}</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ service.processDescription }}
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-12">
            <div v-for="step in service.processSteps" :key="step.step" v-intersect class=" timeline-item flex items-start">
              <div class="flex-shrink-0 w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center mr-6">
                <span class="text-white font-bold text-xl">{{ step.step }}</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-2 text-gray-800">{{ step.title }}</h3>
                <p class="text-gray-600 mb-4">{{ step.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in step.tags" :key="tag" class="bg-jade-100 text-jade-700 px-3 py-1 rounded-full text-sm">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Packages Section -->
    <section id="packages" class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">
            {{ service.packagesTitle }} <span class="text-jade-600">{{ service.packagesHighlight }}</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ service.packagesDescription }}
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="pkg in service.packages" :key="pkg.name" class="package-card bg-white p-8 rounded-2xl shadow-lg relative"
            :class="{ 'ring-2 ring-jade-500': pkg.popular }">
            <div v-if="pkg.popular" class="absolute top-4 right-4">
              <span class="bg-jade-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <h3 class="text-2xl font-bold mb-2 text-gray-800">{{ pkg.name }}</h3>
            <p class="text-gray-600 mb-6">{{ pkg.description }}</p>
            <div class="text-4xl font-bold text-jade-600 mb-6">{{ pkg.price }}</div>
            <ul class="space-y-3 mb-8">
              <li v-for="feature in pkg.features" :key="feature" class="flex items-center text-gray-600">
                <Icon name="heroicons:check" class="w-5 h-5 text-jade-500 mr-3" />
                {{ feature }}
              </li>
            </ul>
            <NuxtLink :to="`/contact?service=${pkg.contactParam}`"
              class="block w-full text-center bg-jade-500 hover:bg-jade-600 text-white py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio/Case Studies -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">
            {{ service.projectsTitle }} <span class="text-jade-600">{{ service.projectsHighlight }}</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ service.projectsDescription }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <PortfolioCard v-for="project in service.featuredProjects" :key="project.title" :project="project" class="hover-lift" />
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/portfolio" class="bg-jade-500 hover:bg-jade-600 text-white px-8 py-4 rounded-full font-semibold transition-colors">
            View All Projects
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">
            {{ service.faqTitle }} <span class="text-jade-600">{{ service.faqHighlight }}</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ service.faqDescription }}
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <FaqAccordion :faqs="service.faqs" />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 gradient-bg">
      <div class="container mx-auto px-6 text-center">
        <div class="max-w-3xl mx-auto text-white">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">{{ service.ctaTitle }}</h2>
          <p class="text-xl mb-8 opacity-90">
            {{ service.ctaDescription }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink :to="`/contact?service=${service.slug}`"
              class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center justify-center">
              <Icon name="heroicons:chat-bubble-left-ellipsis" class="w-5 h-5 mr-2 text-lg" />
              {{ service.ctaButton }}
            </NuxtLink>
            <a href="tel:+15551234567"
              class="border-2 border-white hover:bg-white hover:text-jade-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
              {{ service.ctaPhone }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import servicesData from '~/content/services-data.json'

// Get the route parameter
const route = useRoute()
const slug = route.params.slug
console.log(slug)

// Find the service data
const service = computed(() => {
  const serviceData = servicesData[slug]
  if (!serviceData) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Service not found'
    })
  }
  return serviceData
})


// SEO Meta
useSeoMeta({
  title: () => `${service.value.title} | JadesDev Services`,
  description: () => service.value.description,
  ogTitle: () => `${service.value.title} | JadesDev Services`,
  ogDescription: () => service.value.description,
  ogUrl: () => `https://jadesdev.com/services/${service.value.slug}`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${service.value.title} | JadesDev Services`,
  twitterDescription: () => service.value.description,
})

// Structured Data for SEO
// useSchemaOrg([
//   defineService({
//     name: () => service.value.title,
//     description: () => service.value.description,
//     provider: {
//       name: 'JadesDev',
//       url: 'https://jadesdev.com'
//     },
//     areaServed: 'Worldwide',
//     hasOfferCatalog: {
//       name: () => `${service.value.title} Packages`,
//       itemListElement: () => service.value.packages.map(pkg => ({
//         name: pkg.name,
//         description: pkg.description,
//         price: pkg.price
//       }))
//     }
//   })
// ])
</script>

<style>
.gradient-bg {
  background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%);
}

.tech-badge:hover {
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  transition: all 0.3s ease;
}

.package-card:hover {
  transform: translateY(-5px);
  transition: all 0.3s ease;
}

.popular-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #fbbf24;
  color: #1f2937;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
}

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 2rem;
  top: 4rem;
  bottom: -3rem;
  width: 2px;
  background: #d1d5db;
}

.timeline-item {
  position: relative;
}
</style>
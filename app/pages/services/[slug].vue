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
                <Icon :name="`${service.heroIcon}`" class="w-8 h-8 text-white text-3xl" />
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
                <Icon :name="`${feature.icon}`" class="w-6 h-6 text-jade-600 text-xl" />
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
    <section id="packages" class="py-20 bg-gray-100" v-if="service.packages.length > 0">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">
            {{ service.packagesTitle }} <span class="text-jade-600">{{ service.packagesHighlight }}</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ service.packagesDescription }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PackageCard v-for="pkg in service.packages" :key="pkg.name" :pkg="pkg"></PackageCard>
        </div>
      </div>
    </section>

    <!-- Portfolio -->
    <section class="py-20" v-if="featuredProjects.length > 0">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">
            {{ service.projectsTitle }} <span class="text-jade-600">{{ service.projectsHighlight }}</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ service.projectsDescription }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <PortfolioCard v-for="project in featuredProjects" :key="project.title" :project="project" class="hover-lift" />
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
            <a :href="`${CONTACT_PHONE_TEL}`"
              class="border-2 border-white hover:bg-white hover:text-jade-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
              {{ CONTACT_PHONE }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { SITE_NAME, SITE_URL, CONTACT_PHONE_TEL, CONTACT_PHONE } from '~/constants/site'
import servicesData from '~/content/services-data.json'
import portfolioData from '~/content/portfolio-data.json'

const route = useRoute()
const slug = route.params.slug
const service = servicesData.find(s => s.slug === slug);
if (!service) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Service not found',
    fatal: true
  })
}
const featuredProjects = computed(() => {
  return portfolioData.filter(project => project.service === service.slug)
})
useSeoMeta({
  title: `${service.title} | ${SITE_NAME} Services`,
  description: service.description,
  ogTitle: `${service.title} | ${SITE_NAME} Services`,
  ogDescription: service.description,
  ogUrl: `${SITE_URL}/services/${service.slug}`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: `${service.title} | ${SITE_NAME} Services`,
  twitterDescription: service.description,
})
</script>

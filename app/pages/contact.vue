<template>
  <!-- Hero Section -->
  <section class="gradient-bg py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
          Contact <span class="text-jade-500">Us</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style="animation-delay: 0.2s">
          Ready to start your project? Get in touch for a free consultation and discover how we can help
          transform your digital presence.
        </p>
        <div class="animate-fade-up" style="animation-delay: 0.4s">
          <a href="#contact-form" class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all">
            Get Free Quote
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Information -->
  <section class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Get In <span class="text-jade-600">Touch</span></h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear about your project. Choose the best way to reach us and we'll get back to you
          promptly.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div class="contact-card bg-white p-6 rounded-xl shadow-lg text-center">
          <div class="w-16 h-16 bg-jade-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
              </path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2 text-gray-800">Email Us</h3>
          <p class="text-gray-600 mb-3">Send us an email anytime</p>
          <a :href="`mailto:${CONTACT_EMAIL}`" class="text-jade-600 hover:text-jade-700 font-semibold">
            {{ CONTACT_EMAIL }}
          </a>
        </div>

        <div class="contact-card bg-white p-6 rounded-xl shadow-lg text-center">
          <div class="w-16 h-16 bg-jade-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
              </path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2 text-gray-800">Call Us</h3>
          <p class="text-gray-600 mb-3">Mon-Fri 9AM-6PM EST</p>
          <a :href="`${CONTACT_PHONE_TEL}`" class="text-jade-600 hover:text-jade-700 font-semibold">
            {{ CONTACT_PHONE }}
          </a>
        </div>

        <div class="contact-card bg-white p-6 rounded-xl shadow-lg text-center">
          <div class="w-16 h-16 bg-jade-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
              </path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2 text-gray-800">Live Chat</h3>
          <p class="text-gray-600 mb-3">Chat with our team</p>
          <a :href="`${CONTACT_WHATSAPP}`" target="_blank" class="text-jade-600 hover:text-jade-700 font-semibold">
            Start Chat
          </a>
        </div>

        <div class="contact-card bg-white p-6 rounded-xl shadow-lg text-center">
          <div class="w-16 h-16 bg-jade-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
              </path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2 text-gray-800">Location</h3>
          <p class="text-gray-600 mb-3">{{ CONTACT_ADDRESS }}</p>
          <span class="text-jade-600 font-semibold">Global Reach</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section id="contact-form" class="py-20 bg-gray-100">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <h3 class="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
            <p class="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <div v-if="formMessage" :class="{ 'success-message': formStatus === 'success', 'error-message': formStatus === 'error' }"
              class="p-4 mb-4 text-white rounded-lg">
              <p>{{ formMessage }}</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="form-group grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input v-model="form.firstName" type="text" name="firstName" required class="form-input w-full px-4 py-3 rounded-lg">
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input v-model="form.lastName" type="text" name="lastName" required class="form-input w-full px-4 py-3 rounded-lg">
                </div>
              </div>
              <div class="form-group">
                <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input v-model="form.email" type="email" name="email" required class="form-input w-full px-4 py-3 rounded-lg">
              </div>
              <div class="form-group">
                <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input v-model="form.phone" type="tel" name="phone" class="form-input w-full px-4 py-3 rounded-lg">
              </div>
              <div class="form-group">
                <label class="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                <textarea v-model="form.message" name="message" rows="5" required placeholder="Tell us about your project..."
                  class="form-input w-full px-4 py-3 rounded-lg resize-vertical"></textarea>
              </div>
              <div class="form-group">
                <button type="submit" :disabled="isLoading"
                  class="w-full bg-jade-500 hover:bg-jade-600 text-white py-4 rounded-lg font-semibold transition-all flex items-center justify-center disabled:bg-jade-300 disabled:cursor-not-allowed">
                  <span v-if="!isLoading" class="button-text">Send Message</span>
                  <span v-else class="button-text">Sending...</span>
                  <div v-if="isLoading" class="loading-spinner ml-2" style="display: block;"></div>
                </button>
              </div>
            </form>

          </div>

          <!-- Contact Info & Map -->
          <div class="space-y-8">
            <!-- Quick Contact Info -->
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold mb-6 text-gray-800">Quick Contact</h3>
              <div class="space-y-4">
                <div class="contact-info-item flex items-center">
                  <div class="w-10 h-10 bg-jade-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">Email</p>
                    <a :href="`${CONTACT_EMAIL}`" class="text-jade-600 hover:text-jade-700">{{ CONTACT_EMAIL }}</a>
                  </div>
                </div>

                <div class="contact-info-item flex items-center">
                  <div class="w-10 h-10 bg-jade-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">Phone</p>
                    <a :href="`${CONTACT_PHONE_TEL}`" class="text-jade-600 hover:text-jade-700">
                      {{ CONTACT_PHONE }}</a>
                  </div>
                </div>

                <div class="contact-info-item flex items-center">
                  <div class="w-10 h-10 bg-jade-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">Business Hours</p>
                    <p class="text-gray-600">Mon-Fri: 9AM-6PM GMT+1</p>
                  </div>
                </div>

                <div class="contact-info-item flex items-center">
                  <div class="w-10 h-10 bg-jade-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">Response Time</p>
                    <p class="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Location Info -->
            <div class="map-container">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <h3 class="text-2xl font-bold mb-2">{{ CONTACT_ADDRESS }}</h3>
                <h3 class="text-2xl font-bold mb-4">We Work Globally</h3>
                <p class="text-lg opacity-90 mb-4">
                  Our remote team serves clients worldwide, providing the same high-quality service
                  regardless of location.
                </p>
                <div class="bg-white/20 rounded-lg p-4">
                  <p class="font-semibold">Time Zones We Cover:</p>
                  <p class="opacity-90">EST • PST • GMT • CET • JST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Common <span class="text-jade-600">Questions</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Quick answers to questions you might have about working with us.
        </p>
      </div>

      <div class="max-w-3xl mx-auto">

        <FaqAccordion :faqs="contactFaqs" />
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 gradient-bg">
    <div class="container mx-auto px-6 text-center">
      <div class="max-w-3xl mx-auto text-white">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
        <p class="text-xl mb-8 opacity-90">
          Your project deserves expert attention. Contact us today and let's discuss how we can bring your
          vision to life.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact-form"
            class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
              </path>
            </svg>
            Send Message
          </a>
          <a :href="`${CONTACT_PHONE_TEL}`"
            class="border-2 border-white hover:bg-white hover:text-jade-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
            Call Now
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSeoMeta } from '#imports';
import { ref, reactive } from 'vue';
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, CONTACT_WHATSAPP, SITE_NAME, SITE_URL } from '~/constants/site';
import faqsData from '~/content/faqs.json'
const route = useRoute()

const contactFaqs = faqsData['contactFaqs']

useSeoMeta({
  title: `Contact Us | ${SITE_NAME} - Custom Websites & Applications`,

  description: `Get in touch with ${SITE_NAME} for a free consultation. Contact us for custom web development, e-commerce solutions, and UI/UX design. Let\'s build your project.`,

  ogTitle: `Contact ${SITE_NAME} for a Free Web Development Quote`,
  ogDescription: 'Ready to start your project? Contact our team for a free, no-obligation consultation and discover how we can transform your digital presence.',
  ogUrl: `${SITE_URL}${route.fullPath}`,
  ogType: 'website',

  twitterCard: 'summary_large_image',
  twitterTitle: `Contact ${SITE_NAME} for a Free Web Development Quote`,
  twitterDescription: 'Ready to start your project? Contact our team for a free, no-obligation consultation and discover how we can transform your digital presence.',

  keywords: `contact web development, get a quote, web design contact, ${SITE_NAME} contact`,
})

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  timeline: '',
  message: '',
});

const isLoading = ref(false);
const formStatus = ref('');
const formMessage = ref('');

async function handleSubmit() {
  isLoading.value = true;
  formStatus.value = '';
  formMessage.value = '';

  await new Promise(resolve => setTimeout(resolve, 2000));

  if (Math.random() > 0.1) {
    formStatus.value = 'success';
    formMessage.value = "Thank you for your message! We'll get back to you soon.";
    Object.keys(form).forEach(key => form[key] = '');
  } else {
    formStatus.value = 'error';
    formMessage.value = 'Sorry, there was an error sending your message. Please try again.';
  }

  isLoading.value = false;
}

</script>

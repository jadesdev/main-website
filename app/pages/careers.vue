<template>
    <section class="gradient-bg py-20">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center text-white">
                <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
                    Join Our <span class="text-jade-400">Team</span>
                </h1>
                <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style="animation-delay: 0.2s">
                    We're always looking for passionate, talented individuals to help us build amazing digital products.
                </p>
                <div class="animate-fade-up" style="animation-delay: 0.4s">
                </div>
            </div>
        </div>
    </section>

    <!-- Coming Soon Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="max-w-3xl mx-auto text-center">
                <div class="mb-12">
                    <div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                    </div>
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Coming Soon
                    </h2>
                    <p class="text-xl text-gray-600 mb-8">
                        We're not currently hiring, but we're always interested in connecting with talented developers, designers, and product
                        professionals.
                    </p>
                    <div class="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">What We're Looking For</h3>
                        <div class="grid md:grid-cols-2 gap-6 text-left">
                            <div class="space-y-3">
                                <h4 class="font-medium text-gray-800">Frontend Developers</h4>
                                <p class="text-gray-600 text-sm">React, Vue, Nuxt, TypeScript, Tailwind CSS</p>
                            </div>
                            <div class="space-y-3">
                                <h4 class="font-medium text-gray-800">Backend Developers</h4>
                                <p class="text-gray-600 text-sm">Node.js, Python, Go, Databases, APIs</p>
                            </div>
                            <div class="space-y-3">
                                <h4 class="font-medium text-gray-800">UI/UX Designers</h4>
                                <p class="text-gray-600 text-sm">Figma, User Research, Prototyping</p>
                            </div>
                            <div class="space-y-3">
                                <h4 class="font-medium text-gray-800">Product Managers</h4>
                                <p class="text-gray-600 text-sm">Strategy, User Stories, Agile</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="space-y-6">
                    <p class="text-gray-600">
                        While we don't have open positions right now, feel free to reach out and introduce yourself.
                        We love meeting passionate people who share our vision for building exceptional digital experiences.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <NuxtLink to="/contact"
                            class="bg-jade-500 hover:bg-jade-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Get in Touch
                        </NuxtLink>
                        <a :href="`mailto:${CONTACT_EMAIL}`"
                            class="bg-white hover:bg-gray-100 text-jade-600 px-8 py-4 rounded-full font-semibold transition-all border border-gray-200">
                            Send Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Company Culture Preview -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Why Work With Us?
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    When we do hire, here's what makes {{ SITE_NAME }} a great place to grow your career.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-2xl border border-gray-200 text-center">
                    <div class="w-16 h-16 bg-jade-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Remote First</h3>
                    <p class="text-gray-600">Work from anywhere in the world with our flexible remote-first culture.</p>
                </div>

                <div class="bg-white p-8 rounded-2xl border border-gray-200 text-center">
                    <div class="w-16 h-16 bg-jade-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Innovation Focus</h3>
                    <p class="text-gray-600">Work on cutting-edge projects with the latest technologies and frameworks.</p>
                </div>

                <div class="bg-white p-8 rounded-2xl border border-gray-200 text-center">
                    <div class="w-16 h-16 bg-jade-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-jade-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Great Team</h3>
                    <p class="text-gray-600">Collaborate with talented professionals who are passionate about their craft.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { SITE_NAME, CONTACT_EMAIL } from '~/constants/site';

// Set page metadata
useHead({
    title: `Careers`,
    meta: [
        {
            name: 'description',
            content: `Join our team at ${SITE_NAME}. We\'re not currently hiring, but we\'re always interested in connecting with talented professionals.`
        }
    ]
})
</script>

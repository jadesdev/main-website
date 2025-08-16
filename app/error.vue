<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
        </div>

        <div class="relative max-w-2xl mx-auto text-center">
            <div class="relative mb-8">
                <h1
                    class="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                    {{ error.statusCode || 500 }}
                </h1>
                <div class="absolute inset-0 text-8xl sm:text-9xl font-bold text-blue-600/10 blur-sm -z-10">
                    {{ error.statusCode || 500 }}
                </div>
            </div>

            <div class="mb-8 space-y-4">
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">
                    {{ errorTitle }}
                </h2>
                <p class="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
                    {{ errorMessage }}
                </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button @click="handleError"
                    class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <span class="relative z-10 flex items-center">
                        <Icon name="heroicons:arrow-uturn-left-20-solid"
                            class="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Go Back Home
                    </span>
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                    </div>
                </button>

                <button @click="handleRefresh"
                    class="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 flex items-center group">
                    <Icon name="heroicons:arrow-path-20-solid" class="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                    Try Again
                </button>
            </div>

            <div v-if="isDev && error.stack" class="mt-8 text-left">
                <details class="bg-red-50 border border-red-200 rounded-lg p-4">
                    <summary class="cursor-pointer font-medium text-red-800 hover:text-red-900">
                        Error Details (Development)
                    </summary>
                    <pre class="mt-3 text-sm text-red-700 overflow-auto max-h-40 whitespace-pre-wrap">{{ error.stack }}</pre>
                </details>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import type { NuxtError } from '#app'

// Nuxt error handling
const props = defineProps({
    error: {
        type: Object as () => NuxtError,
        required: true
    }
})

const isDev = import.meta.dev

const handleError = () => clearError({ redirect: '/' })

const handleRefresh = () => {
    try {
        reloadNuxtApp({ force: true, path: '/' })
    } catch (e) {
        window.location.href = '/'
    }
}

const errorTitle = computed(() => {
    const statusCode = props.error.statusCode || 500
    switch (statusCode) {
        case 404: return "Page Not Found"
        case 403: return "Access Forbidden"
        case 500: return "Internal Server Error"
        case 503: return "Service Unavailable"
        default: return "Something Went Wrong"
    }
})

const errorMessage = computed(() => {
    const statusCode = props.error.statusCode || 500
    const statusMessage = props.error.statusMessage
    switch (statusCode) {
        case 404: return "The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL."
        case 403: return "You don't have permission to access this resource. Please check your credentials or contact support."
        case 500: return "We're experiencing some technical difficulties. Our team has been notified and is working to fix this."
        case 503: return "Our service is temporarily unavailable due to maintenance. Please try again in a few moments."
        default: return props.error.statusMessage || "An unexpected error occurred. Please try refreshing the page or contact support if the problem persists."
    }
})

// Set page title and meta
useHead({
    title: `Error ${props.error.statusCode || '500'}`,
    meta: [
        {
            name: 'robots',
            content: 'noindex'
        }
    ]
})
</script>

<style scoped>
.group-hover\:rotate-180 {
    transition-duration: 500ms;
}

.group-hover\:rotate-12 {
    transition-duration: 300ms;
}
</style>
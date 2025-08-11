<template>
  <div>
    <!-- Hero Section -->
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            About <span class="text-jade-500">JadesDev</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style="animation-delay: 0.2s">
            We're passionate developers and designers committed to creating exceptional digital experiences that
            drive your business forward.
          </p>
          <div class="animate-fade-up" style="animation-delay: 0.4s">
            <a href="#team" class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all">
              Meet Our Team
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
                Founded in 2020, JadesDev emerged from a simple belief: every business deserves a powerful
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
    <section id="team" class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">Meet Our <span class="text-jade-600">Team</span></h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know the talented individuals who bring your digital visions to life.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="team-member bg-white p-6 rounded-2xl shadow-lg text-center">
            <div class="w-24 h-24 bg-jade-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-12 h-12 text-jade-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800">Alex Thompson</h3>
            <p class="text-jade-600 font-semibold mb-3">Lead Developer & Founder</p>
            <p class="text-gray-600 text-sm mb-4">
              Full-stack developer with 8+ years of experience. Passionate about creating scalable web
              solutions and leading technical innovation.
            </p>
            <div class="flex justify-center space-x-3">
              <a href="#" class="text-gray-400 hover:text-jade-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84">
                  </path>
                </svg>
              </a>
            </div>
          </div>

          <div class="team-member bg-white p-6 rounded-2xl shadow-lg text-center">
            <div class="w-24 h-24 bg-jade-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-12 h-12 text-jade-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800">Lisa Wang</h3>
            <p class="text-jade-600 font-semibold mb-3">Quality Assurance</p>
            <p class="text-gray-600 text-sm mb-4">
              QA specialist ensuring every project meets the highest standards. Focuses on testing,
              performance optimization, and user experience validation.
            </p>
            <div class="flex justify-center space-x-3">
              <a href="#" class="text-gray-400 hover:text-jade-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-jade-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Timeline -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">Our <span class="text-jade-600">Journey</span></h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Key milestones that have shaped JadesDev into the company we are today.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div v-intersect class="timeline-item flex items-center">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">2020</span>
                </div>
              </div>
              <div class="ml-6 bg-white p-6 rounded-xl shadow-md flex-1">
                <h3 class="text-xl font-bold mb-2 text-gray-800">Company Founded</h3>
                <p class="text-gray-600">JadesDev was established with a mission to help businesses succeed
                  online through exceptional web development services.</p>
              </div>
            </div>

            <div v-intersect class="timeline-item flex items-center">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">2021</span>
                </div>
              </div>
              <div class="ml-6 bg-white p-6 rounded-xl shadow-md flex-1">
                <h3 class="text-xl font-bold mb-2 text-gray-800">First Major Client</h3>
                <p class="text-gray-600">Successfully delivered our first enterprise-level e-commerce
                  solution, establishing our reputation for handling complex projects.</p>
              </div>
            </div>

            <div v-intersect class="timeline-item flex items-center">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">2022</span>
                </div>
              </div>
              <div class="ml-6 bg-white p-6 rounded-xl shadow-md flex-1">
                <h3 class="text-xl font-bold mb-2 text-gray-800">Team Expansion</h3>
                <p class="text-gray-600">Grew our team to include specialized UI/UX designers and backend
                  developers to better serve our growing client base.</p>
              </div>
            </div>

            <div v-intersect class="timeline-item flex items-center">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">2023</span>
                </div>
              </div>
              <div class="ml-6 bg-white p-6 rounded-xl shadow-md flex-1">
                <h3 class="text-xl font-bold mb-2 text-gray-800">100+ Projects</h3>
                <p class="text-gray-600">Reached the milestone of 100 completed projects, serving clients
                  across various industries and business sizes.</p>
              </div>
            </div>

            <div v-intersect class="timeline-item flex items-center">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">2024</span>
                </div>
              </div>
              <div class="ml-6 bg-white p-6 rounded-xl shadow-md flex-1">
                <h3 class="text-xl font-bold mb-2 text-gray-800">Innovation Focus</h3>
                <p class="text-gray-600">Launched our mobile app development service and began incorporating
                  AI-powered solutions into our offerings.</p>
              </div>
            </div>

            <div v-intersect class="timeline-item flex items-center">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-jade-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">2025</span>
                </div>
              </div>
              <div class="ml-6 bg-white p-6 rounded-xl shadow-md flex-1">
                <h3 class="text-xl font-bold mb-2 text-gray-800">Continued Growth</h3>
                <p class="text-gray-600">Expanding our services and continuing to push the boundaries of
                  what's possible in web development and digital innovation.</p>
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
          <h2 class="text-4xl font-bold mb-4 text-gray-800">Why Choose <span class="text-jade-600">JadesDev</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            We're more than just developers – we're your partners in digital success.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-jade-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-jade-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Proven Track Record</h3>
                <p class="text-gray-600">Over 150 successful projects delivered with 98% client satisfaction
                  rate.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-jade-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-jade-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Expert Team</h3>
                <p class="text-gray-600">Skilled professionals with expertise across all modern web
                  technologies and frameworks.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-jade-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-jade-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Agile Approach</h3>
                <p class="text-gray-600">Flexible development process that adapts to your needs and ensures
                  timely delivery.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-jade-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-jade-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Ongoing Support</h3>
                <p class="text-gray-600">Comprehensive maintenance and support services to keep your website
                  running smoothly.</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-jade-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-jade-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Transparent Communication</h3>
                <p class="text-gray-600">Regular updates and clear communication throughout every phase of
                  your project.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-jade-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-jade-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Competitive Pricing</h3>
                <p class="text-gray-600">Fair, transparent pricing with no hidden costs and flexible payment
                  options.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-jade-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-jade-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Future-Proof Solutions</h3>
                <p class="text-gray-600">Scalable and maintainable code that grows with your business needs.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-jade-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-jade-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Results-Driven</h3>
                <p class="text-gray-600">Focus on delivering measurable business outcomes and return on
                  investment.</p>
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
            <a href="/contact"
              class="bg-white text-jade-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                </path>
              </svg>
              Get In Touch
            </a>
            <a href="/services"
              class="border-2 border-white hover:bg-white hover:text-jade-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- SEO Metadata ---
useSeoMeta({
  title: 'About Us | JadesDev - Our Story, Values, and Team',
  description: 'Learn about JadesDev, a passionate team of developers and designers committed to creating exceptional digital experiences that drive your business forward.',
  ogTitle: 'About JadesDev | Our Story, Values, and Team',
  ogDescription: 'Meet the team behind JadesDev and discover our commitment to innovation, collaboration, and quality in web development.',
  ogUrl: 'https://jadesdev.com/about',
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

// onMounted is a lifecycle hook that runs after the component's HTML is on the page
onMounted(() => {
  const options = {
    threshold: 0.5 // Trigger when 50% of the element is visible
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the stats container is intersecting and hasn't been animated yet
      if (entry.isIntersecting && !statsContainer.value.classList.contains('animated')) {
        statsContainer.value.classList.add('animated'); // Mark as animated

        // Start all animations
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

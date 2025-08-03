<template>
  <section class="py-16 md:py-24 bg-white dark:bg-gray-900">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t('contact.title') }}
        </h2>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ $t('contact.subtitle') }}
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="text-center lg:text-left">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ready to explore the beautiful islands of Java and Bali? I'm here to help you plan the perfect adventure tailored to your interests and schedule.
              </p>
            </div>

            <!-- Contact Methods -->
            <div class="space-y-6">
              <!-- WhatsApp -->
              <UCard class="hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-center space-x-4">
                  <div class="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <UIcon name="i-simple-icons-whatsapp" class="w-7 h-7 text-green-600" />
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Quick response guaranteed</p>
                  </div>
                  <UButton 
                    :to="whatsappUrl"
                    target="_blank"
                    color="success"
                    variant="solid"
                    size="lg"
                  >
                    {{ $t('contact.whatsapp') }}
                  </UButton>
                </div>
              </UCard>

              <!-- Email -->
              <UCard class="hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-center space-x-4">
                  <div class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <UIcon name="i-heroicons-envelope" class="w-7 h-7 text-blue-600" />
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">For detailed inquiries</p>
                  </div>
                  <UButton 
                    :to="`mailto:${email}`"
                    color="info"
                    variant="outline"
                    size="lg"
                  >
                    {{ $t('contact.email') }}
                  </UButton>
                </div>
              </UCard>

              <!-- Instagram -->
              <UCard class="hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-center space-x-4">
                  <div class="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                    <UIcon name="i-simple-icons-instagram" class="w-7 h-7 text-pink-600" />
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 dark:text-white">Instagram</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Follow my adventures</p>
                  </div>
                  <UButton 
                    :to="instagramUrl"
                    target="_blank"
                    color="primary"
                    variant="outline"
                    size="lg"
                  >
                    Follow
                  </UButton>
                </div>
              </UCard>
            </div>
          </div>

          <!-- Contact Form or Image -->
          <div class="relative">
            <div class="relative overflow-hidden rounded-2xl">
              <div class="w-full h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <img
                  src="https://undraw.co/api/illustrations/svg?search=travel"
                  alt="Contact Illustration"
                  class="h-80 w-auto mx-auto"
                  loading="lazy"
                />
                <div class="absolute bottom-6 left-6 right-6 text-white">
                  <h4 class="text-xl font-bold mb-2">Let's Plan Your Adventure</h4>
                  <p class="text-sm opacity-90">
                    From sunrise at Mount Bromo to temple hopping in Yogyakarta, let's create unforgettable memories together.
                  </p>
                </div>
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-4 mt-6">
              <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div class="text-2xl font-bold text-primary">500+</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Happy Travelers</div>
              </div>
              <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div class="text-2xl font-bold text-primary">24/7</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Available Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const whatsappUrl = 'https://wa.me/6281234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20tour%20guide%20services%20for%20Java%20and%20Bali'
const email = 'guide@tripjavabali.com'
const instagramUrl = 'https://instagram.com/tripjavabali'
</script>

<style scoped>
/* Contact section styles */
</style>

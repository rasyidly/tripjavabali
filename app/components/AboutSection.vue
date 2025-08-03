<template>
  <section class="py-16 md:py-24 bg-white dark:bg-gray-900">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="order-2 lg:order-1">
          <div class="relative">
            <div class="w-full h-96 md:h-[500px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-2xl">
              <img
                src="https://undraw.co/api/illustrations/svg?search=tour%20guide"
                alt="Tour Guide Illustration"
                class="h-80 w-auto mx-auto"
                loading="lazy"
              />
            </div>
            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <UIcon name="i-heroicons-camera" class="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="order-1 lg:order-2">
          <div class="max-w-lg">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {{ $t('about.title') }}
            </h2>
            
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {{ $t('about.description') }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-star" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900 dark:text-white">5+ {{ $t('about.experience') }}</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">{{ $t('about.experience') }}</div>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-users" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900 dark:text-white">500+</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">{{ $t('about.travelers') }}</div>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-language" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900 dark:text-white">3 {{ $t('about.languages') }}</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">English, Indonesian, Javanese</div>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900 dark:text-white">{{ $t('about.licensed') }}</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">{{ $t('about.certified') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
// About section logic
</script>

<style scoped>
/* About section styles */
</style>

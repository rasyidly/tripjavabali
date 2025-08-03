<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
    <!-- Background Image Overlay -->
    <div class="absolute inset-0 bg-black/20 z-10"></div>
    
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" 
         style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')">
    </div>

    <!-- Content -->
    <UContainer class="relative z-20">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {{ $t('hero.title') }}
        </h1>
        
        <p class="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          {{ $t('hero.subtitle') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <UButton 
            size="xl" 
            icon="i-simple-icons-whatsapp"
            :to="whatsappUrl"
            target="_blank"
            class="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg"
          >
            {{ $t('hero.cta') }}
          </UButton>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <UIcon name="i-heroicons-chevron-down" class="w-8 h-8 text-white" />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const whatsappUrl = 'https://wa.me/6281234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20tour%20guide%20services'
</script>

<style scoped>
/* Additional styles if needed */
</style>

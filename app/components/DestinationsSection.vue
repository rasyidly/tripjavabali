<template>
  <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t('destinations.title') }}
        </h2>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover the most breathtaking destinations across Java and Bali with personalized guided tours
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard 
          v-for="destination in destinations" 
          :key="destination.id"
          class="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
        >
          <template #header>
            <div class="relative overflow-hidden">
              <img 
                :src="destination.image" 
                :alt="destination.name"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-white font-semibold">{{ $t(destination.labelKey) }}</span>
              </div>
            </div>
          </template>

          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {{ $t(destination.labelKey) }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              {{ destination.description }}
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-primary" />
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ destination.location }}</span>
              </div>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const destinations = [
  {
    id: 'yogyakarta',
    labelKey: 'destinations.yogyakarta',
    name: 'Yogyakarta',
    description: 'Cultural heart of Java with ancient temples, royal palaces, and traditional arts',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    location: 'Central Java'
  },
  {
    id: 'bromo',
    labelKey: 'destinations.bromo',
    name: 'Mount Bromo',
    description: 'Iconic volcanic landscape with spectacular sunrise views and dramatic crater',
    image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=600&q=80',
    location: 'East Java'
  },
  {
    id: 'ubud',
    labelKey: 'destinations.ubud',
    name: 'Ubud',
    description: 'Spiritual center of Bali with lush rice terraces and artistic heritage',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
    location: 'Bali'
  },
  {
    id: 'borobudur',
    labelKey: 'destinations.borobudur',
    name: 'Borobudur Temple',
    description: 'UNESCO World Heritage Buddhist temple with intricate stone carvings',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    location: 'Central Java'
  },
  {
    id: 'ijen',
    labelKey: 'destinations.ijen',
    name: 'Ijen Crater',
    description: 'Blue fire phenomenon and the largest acidic crater lake in the world',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
    location: 'East Java'
  },
  {
    id: 'prambanan',
    labelKey: 'destinations.prambanan',
    name: 'Prambanan Temple',
    description: 'Magnificent Hindu temple complex dedicated to the Trimurti',
    image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80',
    location: 'Central Java'
  }
]
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

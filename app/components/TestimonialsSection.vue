<template>
  <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t('testimonials.title') }}
        </h2>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          What our amazing travelers say about their experiences
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          class="relative bg-white dark:bg-gray-900 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Quote Icon -->
          <div class="absolute -top-4 left-6">
            <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="w-4 h-4 text-white" />
            </div>
          </div>

          <div class="pt-8 pb-6 px-6">
            <!-- Rating -->
            <div class="flex items-center mb-4">
              <div class="flex space-x-1">
                <UIcon 
                  v-for="star in 5" 
                  :key="star"
                  name="i-heroicons-star" 
                  class="w-4 h-4 text-yellow-400 fill-current" 
                />
              </div>
            </div>

            <!-- Testimonial Text -->
            <blockquote class="text-gray-700 dark:text-gray-300 mb-6 italic">
              "{{ testimonial.text }}"
            </blockquote>

            <!-- Author Info -->
            <div class="flex items-center space-x-4">
              <img 
                :src="testimonial.avatar" 
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">
                  {{ testimonial.name }}
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                  <UIcon name="i-twemoji-flag-for-flag-germany" class="w-4 h-4 mr-1" v-if="testimonial.country === 'Germany'" />
                  <UIcon name="i-twemoji-flag-for-flag-australia" class="w-4 h-4 mr-1" v-else-if="testimonial.country === 'Australia'" />
                  <UIcon name="i-twemoji-flag-for-flag-netherlands" class="w-4 h-4 mr-1" v-else-if="testimonial.country === 'Netherlands'" />
                  <UIcon name="i-twemoji-flag-for-flag-united-kingdom" class="w-4 h-4 mr-1" v-else-if="testimonial.country === 'UK'" />
                  <UIcon name="i-twemoji-flag-for-flag-france" class="w-4 h-4 mr-1" v-else-if="testimonial.country === 'France'" />
                  {{ testimonial.country }}
                </div>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    id: 1,
    name: 'Emma Schmidt',
    country: 'Germany',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    text: 'An incredible experience! Our guide was knowledgeable, friendly, and showed us hidden gems we would never have found ourselves.'
  },
  {
    id: 2,
    name: 'James Thompson',
    country: 'Australia',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    text: 'The sunrise tour at Mount Bromo was absolutely breathtaking. Professional service and unforgettable memories!'
  },
  {
    id: 3,
    name: 'Sophie Martin',
    country: 'France',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    text: 'Perfect tour of Yogyakarta temples. Great English, punctual, and very accommodating to our requests.'
  },
  {
    id: 4,
    name: 'Mike Williams',
    country: 'UK',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    text: 'Fantastic Ubud rice terraces tour. Our guide was passionate about sharing local culture and traditions.'
  },
  {
    id: 5,
    name: 'Lisa van Der Berg',
    country: 'Netherlands',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    text: 'Highly recommend for solo female travelers. Felt safe and comfortable throughout the entire journey.'
  },
  {
    id: 6,
    name: 'David Chen',
    country: 'Australia',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    text: 'Excellent value for money. Professional, reliable, and made our Java-Bali trip truly special.'
  }
]
</script>

<style scoped>
/* Testimonials section styles */
</style>

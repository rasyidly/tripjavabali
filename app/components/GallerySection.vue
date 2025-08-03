<script setup lang="ts">
interface GalleryItem {
  _path: string
  title: string
  description: string
  image: string
  date: string
}

const gallery = await queryCollection('content').path('/gallery').first()

console.log(gallery)
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Date(dateString).toLocaleDateString('en-US', options)
}
</script>

<template>
  <section class="py-16 md:py-24 bg-white dark:bg-gray-900">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t('gallery.title') }}
        </h2>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore memorable moments from our recent adventures across Java and Bali
        </p>
      </div>

      <!-- <div v-if="pending" class="text-center py-12">
        <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 text-primary animate-spin mx-auto" />
        <p class="text-gray-600 dark:text-gray-300 mt-4">Loading gallery...</p>
      </div> -->

      <!-- <div v-else-if="gallery && gallery.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard 
          v-for="item in gallery" 
          :key="item._path"
          class="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
        >
          <NuxtLink :to="`/gallery/${item._path.split('/').pop()}`" class="block">
            <div class="relative overflow-hidden">
              <img 
                v-if="item.image" 
                :src="item.image" 
                :alt="item.title" 
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-4 left-4 right-4 transition-opacity duration-300">
                <UButton 
                  size="sm" 
                  variant="solid" 
                  color="primary"
                  icon="i-heroicons-eye"
                  class="w-full"
                >
                  {{ $t('gallery.viewDetails') }}
                </UButton>
              </div>
            </div>

            <div class="p-6">
              <h3 class="font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center">
                <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
                {{ formatDate(item.date) }}
              </p>
              <p class="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                {{ item.description }}
              </p>
            </div>
          </NuxtLink>
        </UCard>
      </div>

      <div v-else class="text-center py-12">
        <UIcon name="i-heroicons-photo" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p class="text-gray-600 dark:text-gray-300">No gallery items available yet.</p>
      </div> -->
    </UContainer>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

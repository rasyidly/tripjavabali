<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Back Navigation -->
    <div class="sticky top-16 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-4">
        <UButton 
          to="/#gallery" 
          variant="ghost" 
          icon="i-heroicons-arrow-left"
          size="sm"
        >
          Back to Gallery
        </UButton>
      </UContainer>
    </div>

    <UContainer class="py-8 md:py-12">
      <div v-if="pending" class="text-center py-12">
        <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 text-primary animate-spin mx-auto" />
        <p class="text-gray-600 dark:text-gray-300 mt-4">Loading gallery item...</p>
      </div>

      <div v-else-if="doc" class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {{ doc.title }}
          </h1>
          <div class="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-400">
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-calendar" class="w-5 h-5" />
              <span>{{ formatDate(doc.date) }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5" />
              <span>Java & Bali</span>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            v-if="doc.image" 
            :src="doc.image" 
            :alt="doc.title" 
            class="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <UCard class="mb-8">
              <div class="prose prose-gray dark:prose-invert max-w-none">
                <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {{ doc.description }}
                </p>
                <ContentRenderer :value="doc" />
              </div>
            </UCard>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-32 space-y-6">
              <!-- Contact CTA -->
              <UCard>
                <div class="text-center">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Like this experience?
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">
                    Let's plan your own adventure to these amazing destinations!
                  </p>
                  <UButton 
                    :to="whatsappUrl"
                    target="_blank"
                    color="success"
                    size="lg"
                    icon="i-simple-icons-whatsapp"
                    block
                  >
                    Book Similar Tour
                  </UButton>
                </div>
              </UCard>

              <!-- Trip Details -->
              <UCard>
                <template #header>
                  <h3 class="text-lg font-bold">Trip Details</h3>
                </template>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Duration</span>
                    <span class="font-semibold">2-3 Days</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Group Size</span>
                    <span class="font-semibold">1-8 People</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Transport</span>
                    <span class="font-semibold">Private Car</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Guide</span>
                    <span class="font-semibold">English Speaking</span>
                  </div>
                </div>
              </UCard>

              <!-- Related Destinations -->
              <UCard>
                <template #header>
                  <h3 class="text-lg font-bold">Popular Destinations</h3>
                </template>
                <div class="space-y-3">
                  <NuxtLink 
                    v-for="dest in relatedDestinations" 
                    :key="dest"
                    to="/#destinations"
                    class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-primary" />
                    <span class="text-sm">{{ dest }}</span>
                  </NuxtLink>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <UIcon name="i-heroicons-exclamation-triangle" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Gallery Item Not Found</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          The gallery item you're looking for doesn't exist or has been removed.
        </p>
        <UButton to="/#gallery" icon="i-heroicons-arrow-left">
          Back to Gallery
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute()

interface GalleryDoc {
  title: string
  description: string
  image: string
  date: string
  body: any
}

const { data: doc, pending } = await useAsyncData('gallery-detail', () =>
  $fetch<GalleryDoc[]>('/api/_content/query', {
    method: 'POST',
    body: JSON.stringify({
      where: [{ _dir: 'gallery' }, { _file: params.slug }],
      limit: 1
    })
  }).then((res: any) => res[0] as GalleryDoc)
)

const whatsappUrl = 'https://wa.me/6281234567890?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20similar%20tour%20like%20the%20one%20in%20your%20gallery'

const relatedDestinations = [
  'Mount Bromo',
  'Yogyakarta',
  'Borobudur Temple',
  'Ubud Rice Terraces',
  'Ijen Crater',
  'Prambanan Temple'
]

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

// SEO Meta
useSeoMeta({
  title: () => doc.value?.title ? `${doc.value.title} - TripJavaBali` : 'Gallery - TripJavaBali',
  description: () => doc.value?.description || 'Explore our gallery of amazing tours across Java and Bali',
  ogTitle: () => doc.value?.title ? `${doc.value.title} - TripJavaBali` : 'Gallery - TripJavaBali',
  ogDescription: () => doc.value?.description || 'Explore our gallery of amazing tours across Java and Bali',
  ogImage: () => doc.value?.image || '/og-image.jpg'
})
</script>

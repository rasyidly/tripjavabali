<script setup lang="ts">
import type { DropdownMenuItem, SelectMenuItem } from '@nuxt/ui'

const colorMode = useColorMode()
const switchLocalePath = useSwitchLocalePath()

const { locale } = useI18n()
const selectedLocale = ref(locale.value)
const localeOptions: DropdownMenuItem[] = [
  { label: 'ID', value: 'id', icon: 'i-twemoji-flag-indonesia', to: switchLocalePath('id') },
  { label: 'EN', value: 'en', icon: 'i-twemoji-flag-united-states', to: switchLocalePath('en') }
]

const isDark = computed(() => colorMode.value === 'dark')

const mobileMenuOpen = ref(false)

const sections = [
  { id: 'hero', label: 'nav.home' },
  { id: 'about', label: 'nav.about' },
  { id: 'destinations', label: 'nav.destinations' },
  { id: 'gallery', label: 'nav.gallery' },
  { id: 'testimonials', label: 'nav.testimonials' },
  { id: 'contact', label: 'nav.contact' }
]

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Close mobile menu when clicking outside
onMounted(() => {
  const handleClickOutside = () => {
    mobileMenuOpen.value = false
  }
  document.addEventListener('click', handleClickOutside)

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
    <UContainer>
      <nav class="flex items-center justify-between py-4">
        <!-- Logo/Brand -->
        <div class="flex items-center space-x-2">
          <UIcon name="i-heroicons-map" class="w-8 h-8 text-primary" />
          <span class="text-xl font-bold text-gray-900 dark:text-white">TripJavaBali</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="section in sections" :key="section.id" :href="`#${section.id}`" class="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" @click="scrollToSection(section.id)">
            {{ $t(section.label) }}
          </a>
        </div>

        <!-- Controls -->
        <div class="flex items-center space-x-3">
          <!-- Language Switcher -->
          <UDropdownMenu :items="localeOptions">
            <UButton size="sm" class="w-24 flex items-center justify-between" variant="ghost">
              <UIcon :name="selectedLocale === 'id' ? 'i-twemoji-flag-indonesia' : 'i-twemoji-flag-united-states'" class="mr-2" />
              <span>{{ selectedLocale.toUpperCase ? selectedLocale.toUpperCase() : selectedLocale }}</span>
              <UIcon name="i-heroicons-chevron-down" class="ml-2" />
            </UButton>
          </UDropdownMenu>


          <!-- Theme Toggle -->
          <UButton @click="toggleColorMode" variant="ghost" size="sm" :icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'" />

          <!-- Mobile Menu Toggle -->
          <UButton @click="mobileMenuOpen = !mobileMenuOpen" variant="ghost" size="sm" icon="i-heroicons-bars-3" class="md:hidden" />
        </div>
      </nav>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
        <div class="flex flex-col space-y-4">
          <a v-for="section in sections" :key="section.id" :href="`#${section.id}`" class="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" @click="scrollToSection(section.id); mobileMenuOpen = false">
            {{ $t(section.label) }}
          </a>
        </div>
      </div>
    </UContainer>
  </header>
</template>

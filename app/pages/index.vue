<script setup lang="ts">
definePageMeta({
  title: 'Home',
  layout: 'default'
})

</script>

<template>
  <main>
    <section id="hero">
      <HeroSection />
    </section>
    <section id="about">
      <AboutSection />
    </section>
    <section id="destinations">
      <DestinationsSection />
    </section>
    <section id="gallery">
      <GallerySection />
    </section>
    <section id="testimonials">
      <TestimonialsSection />
    </section>
    <section id="contact">
      <ContactSection />
    </section>
  </main>
</template>

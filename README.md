# TripJavaBali — Personal Tour Guide Portfolio Website

TripJavaBali is a modern, minimalist, and multilingual portfolio website for a professional **personal tour guide** specializing in destinations across **Java and Bali**.  
The site is built using **Nuxt 3**, styled with **Nuxt UI**, and content-driven using **Nuxt Content**.

---

## 🧠 Project Context (For Copilot & Contributors)

This project is focused on building a **clean one-page layout** using modular **Nuxt components** per section and dynamic routing for individual gallery items powered by `@nuxt/content`.

---

## 🌍 Tech Stack

- **Nuxt 4**
- **Nuxt UI** (component styling)
- **@nuxt/content** (markdown-powered content system)
- **@nuxtjs/i18n** (multilingual support)
- **WhatsApp link** for booking CTA
- **Responsive** and optimized for international backpacker travelers

---

## 📐 Page Structure

The main page (`/`) is composed of the following sections:

### 1. HeroSection.vue

- Heading and subheading
- CTA (WhatsApp)

### 2. AboutSection.vue

- Brief description of the guide in ~25 words
- Photo and background info

### 3. DestinationsSection.vue

- List of major areas covered (e.g., Yogyakarta, Bromo, Ubud)

### 4. GallerySection.vue

- Grid of tour photos (sourced from Nuxt Content)
- Each gallery item links to a dynamic route page using Nuxt Content (`/gallery/[slug]`)

### 5. TestimonialsSection.vue

- Short, powerful quotes (max 25 words)

### 6. ContactSection.vue

- WhatsApp button for direct booking
- Optional email or Instagram

---

## 🗂 Content Directory (Nuxt Content)

All gallery and blog/tips articles are stored in the `content/` directory.

### Gallery Content Example:

```markdown
// content/gallery/my-trip-to-bromo.md

---

title: "Sunrise Adventure in Bromo"
description: "An unforgettable sunrise jeep tour with travelers from Germany."
image: "/gallery/bromo-sunrise.jpg"
date: 2024-12-10

---

Some details about the trip, itinerary highlights, and photos.
```

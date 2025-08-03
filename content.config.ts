import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content_en: defineCollection({
            type: 'page',
            source: {
                include: 'gallery/en/**/*.md',
                prefix: '',
            }
        }),
        content_id: defineCollection({
            type: 'page',
            source: {
                include: 'gallery/id/**/*.md',
                prefix: '',
            }
        }),
    }
})
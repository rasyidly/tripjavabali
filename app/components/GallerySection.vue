<template>
    <section>
        <UContainer>
            <h2 class="text-xl font-bold mb-4">Gallery</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <UCard v-for="item in gallery" :key="item._path" class="hover:shadow-lg">
                    <NuxtLink :to="`/gallery/${item._path.split('/').pop()}`">
                        <img v-if="item.image" :src="item.image" :alt="item.title" class="rounded mb-2 w-full h-48 object-cover" />
                        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
                        <p class="text-gray-500 text-sm mb-2">{{ item.date }}</p>
                        <p class="text-sm">{{ item.description }}</p>
                    </NuxtLink>
                </UCard>
            </div>
        </UContainer>
    </section>
</template>

<script setup lang="ts">
// @ts-ignore
const { data: gallery } = await useAsyncData('gallery-list', () =>
    $fetch('/api/_content/query', {
        method: 'POST',
        body: JSON.stringify({
            where: [{ _dir: 'gallery' }],
            sort: [{ date: -1 }],
        })
    }).then((res: any) => res._data as Array<any>)
)
</script>

<style scoped>
/* Gallery section styles */
</style>

<template>
    <div>
        <UContainer>
            <UCard>
                <template #header>
                    <h1 class="text-2xl font-bold">{{ doc.title }}</h1>
                    <p class="text-gray-500">{{ doc.date }}</p>
                </template>
                <img v-if="doc.image" :src="doc.image" :alt="doc.title" class="w-full rounded mb-4" />
                <p class="mb-4">{{ doc.description }}</p>
                <ContentRenderer :value="doc" />
            </UCard>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const { params } = useRoute()
// @ts-ignore
const { data: doc } = await useAsyncData('gallery', () =>
    $fetch('/api/_content/query', {
    method: 'POST',
    body: JSON.stringify({
      where: [{ _dir: 'gallery' }, { _file: params.slug }],
      limit: 1
    })
  }).then((res: any) => res._data[0] as any)
)
</script>

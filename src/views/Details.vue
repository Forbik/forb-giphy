<template>
  <v-container v-if="!isLoading && gifData">
    <v-row>
      <v-col cols="12">
        <h2>{{ gifData.title }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <GifCardComponent
          :gif="gifData"
          original
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p>Added by:
          <router-link
            v-if="gifData.user"
            :to="`/user/${gifData.user.username}`"
            rel="noopener noreferrer"
          >
            {{ gifData.user.display_name || gifData.user.username }}
          </router-link>
          <span v-else>Anonymous</span>
        </p>
      </v-col>
    </v-row>
    <Slider />
  </v-container>
  <v-container v-else>
    <v-progress-linear indeterminate :height="2"></v-progress-linear>
  </v-container>
</template>

<script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { useGifStore } from '../store/giphy'
  import type { Gif } from './../store/giphy'

  import Slider from './../components/Slider.vue'
  import GifCardComponent from '@/components/GifCardComponent.vue'

  const gifStore = useGifStore()
  const route = useRoute()
  const isLoading = ref(true)
  const gifId = route.params.id.toString()
  const gifData = ref<Gif | undefined>(undefined)

  watch(
    () => route.params.id,
    async (newValue) => {
      if (!newValue) { return }
      gifData.value = (await gifStore.fetchGifById(newValue as string)) as unknown as Gif
    },
    { immediate: true }
  )

  onMounted(async () => {
    isLoading.value = true
    gifStore.fetchGifById(gifId).then((data: any[] | undefined) => {
      gifData.value = data as unknown as Gif
    }).catch((error) => {
      console.error('Error fetching gif details: ', error)
    }).finally(() => {
      isLoading.value = false
    })
  })
</script>

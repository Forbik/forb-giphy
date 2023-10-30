<template>
  <v-row v-if="!isLoading && randomGifs">
    <v-col cols="12">
      <h3>Random GIFs</h3>
      <v-container class="px-0 mx-0">
        <v-row>
          <v-col cols="12">
            <v-slide-group v-model="model" show-arrows center-active>
              <v-slide-group-item v-for="randomGif in randomGifs" :key="randomGif.id">
                <v-card flat width="300" :to="`/details/${randomGif.id}`">
                  <router-link :to="`/details/${randomGif.id}`">
                    <GifCardComponent class="mx-2 min-width: 170px;" :gif="randomGif" />
                  </router-link>
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
            <!-- <v-carousel cycle hide-delimiters height="400">
              <v-carousel-item v-for="(gif, index) in gifs" :key="index">
                <img :src="gif.images.original.url" alt="Random Gif" class="d-block mx-auto">
              </v-carousel-item>
            </v-carousel> -->
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
  <v-container v-else>
    <v-progress-linear indeterminate :height="2"></v-progress-linear>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useGifStore } from '@/store/giphy';
import type { Gif } from './../store/giphy'
import GifCardComponent from '@/components/GifCardComponent.vue'

const gifStore = useGifStore()
const model = ref(null)
const randomGifs = ref<Gif[]>([])
const isLoading = ref(false)
const numbersOfRandomGifs = 12

onBeforeMount(async () => {
  isLoading.value = true
  const requests = [];
  for (let i = 0; i < numbersOfRandomGifs; i++) {
    requests.push(gifStore.randomGifs());
  }
  Promise.all(requests).then((responses) => {
    const gifs = responses.map((response) => response as Gif)
    randomGifs.value.push(...gifs)
    isLoading.value = false
  }).catch((err) => {
    console.error('Error fetching gifs:', err)
    isLoading.value = false
  })
})
</script>

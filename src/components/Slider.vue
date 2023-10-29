<template>
  <v-container class="px-0 mx-0">
    <v-row>
      <v-col cols="12">
        <v-slide-group v-model="model" show-arrows center-active>
          <v-slide-group-item v-for="randomGif in randomGifs" :key="randomGif.id">
            <v-card width="300" :to="`/details/${randomGif.id}`">
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
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useGifStore } from '@/store/giphy';
import type { Gif } from './../store/giphy'
import GifCardComponent from '@/components/GifCardComponent.vue'

const gifStore = useGifStore()
const model = ref(null)
const randomGifs = ref<Gif[]>([])
const numbersOfRandomGifs = 10

onBeforeMount(async () => {
  for (let i = 0; i < numbersOfRandomGifs; i++) {
    randomGifs.value?.push((await gifStore.randomGifs()) as Gif)
  }
})
</script>

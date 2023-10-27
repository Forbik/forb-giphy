<template>
  <v-container v-if="gifs.length">
    <v-row>
      <v-col cols="12">
        <v-carousel cycle hide-delimiters height="400">
          <v-carousel-item v-for="(gif, index) in gifs" :key="index">
            <img :src="gif.images.original.url" alt="Random Gif" class="d-block mx-auto">
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGifStore } from '@/store/giphy';

const gifStore = useGifStore()
const gifs = ref([] as any)

onMounted(async () => {
  await gifStore.fetchGifs('trending').then((data) => {
    gifs.value = data
  })
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(gif, index) in gifs"
        :key="index"
        cols="12"
        sm="12"
        md="4"
        lg="3"
      >
        <router-link :to="`/details/${gif.id}`">
          <div :alt="gif.title" :style="`background: center / cover no-repeat url(${gif.images.fixed_height.url}); width: 100%; height: 170px;`"></div>
        </router-link>
      </v-col>
    </v-row>
    <div class="d-flex align-center" style="height: 80px;">
      <v-progress-linear v-if="isFetching" indeterminate :height="2"></v-progress-linear>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
  import { ref, computed, watch, onMounted } from 'vue'
  import { useGifStore } from '../store/giphy'

  const gifStore = useGifStore()
  const gifs = ref(gifStore.gifs)
  const isFetching = ref(false)
  const searchQuery = computed({
    get: () => gifStore.searchQuery,
    set: (value) => gifStore.setSearchQuery(value)
  })
  onMounted(() => {
    gifStore.fetchGifs('trending')
    window.addEventListener('scroll', handleScroll)
    watch (gifStore, (newVal) => {
      gifs.value = newVal.gifs;
    })
  })
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 300 && !isFetching.value
    ) {
      if (!isFetching.value) {
        isFetching.value = true
        setTimeout(() => {
          gifStore.loadMore(searchQuery.value || `trending`)
          isFetching.value = false
        }, 500);
      }
    }
  }
</script>

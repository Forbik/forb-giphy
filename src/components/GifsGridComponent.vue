<template>
  <v-container>
    <v-row>
      <transition-group name="bounce">
        <v-col
          v-for="(gif, index) in gifs"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <router-link :to="`/details/${gif.id}`">
            <GifCardComponent
              :gif="gif"
            />
          </router-link>
        </v-col>
      </transition-group>
    </v-row>
    <div class="d-flex align-center" style="height: 80px;">
      <v-progress-linear v-if="isFetching" indeterminate :height="2"></v-progress-linear>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
  import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
  import { useGifStore } from '../store/giphy'

  import GifCardComponent from './GifCardComponent.vue';

  const gifStore = useGifStore()
  const gifs = ref(gifStore.gifs)
  const isFetching = ref(false)
  let timeoutId: ReturnType<typeof setTimeout>

  const searchQuery = computed({
    get: () => gifStore.searchQuery,
    set: (value) => gifStore.setSearchQuery(value)
  })
  const isSearchQueryNotEmpty = searchQuery.value && searchQuery.value.length > 0

  onMounted(() => {
    if (isSearchQueryNotEmpty) {
      gifStore.searchGifs(searchQuery.value)
    } else if (gifs.value.length < 1) {
      gifStore.fetchTrandingGifs()
    }

    window.addEventListener('scroll', handleScroll)
    watch (gifStore, (newVal) => {
      gifs.value = newVal.gifs
    })
  })

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 500 && !isFetching.value
    ) {
      if (!isFetching.value) {
        isFetching.value = true
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          if (isSearchQueryNotEmpty) {
            gifStore.searchGifs(searchQuery.value)
          } else {
            gifStore.loadMore()
          }
          isFetching.value = false
        }, 800)
      }
    }
  }

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    clearTimeout(timeoutId)
  })
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.11);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<template>
  <v-app-bar flat dense>
    <v-container>
      <v-row>
        <v-col cols="4" sm="3" md="4" lg="3" class="d-flex align-center">
          <v-btn variant="text" to="/" @click="clearSearchQuery">
            <v-icon icon="mdi-circle-slice-6" />

            Giphy
          </v-btn>
        </v-col>
        <v-col>
          <v-text-field
            v-model="searchQuery"
            @input="handleSearch"
            density="compact"
            variant="outlined"
            label="Search gifs"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { useGifStore } from '../../store/giphy'
  const gifStore = useGifStore()
  const searchQuery = ref(gifStore.searchQuery)
  const debounce = (func: Function, delay: number) => {
    let timeoutId: any
    return (...args: any[]) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
      }, delay)
    }
  }
  const handleSearch = debounce((query: string) => {
    if (query && searchQuery.value.length > 0) {
      gifStore.setSearchQuery(searchQuery.value)
      gifStore.fetchGifs(searchQuery.value)
    } else {
      gifStore.fetchGifs('trending')
    }
  }, 500)
  watch(() => gifStore.searchQuery, (newValue) => {
    searchQuery.value = newValue
  })
  const clearSearchQuery = () => {
    gifStore.fetchGifs('trending')
    return gifStore.setSearchQuery('')
  }
</script>

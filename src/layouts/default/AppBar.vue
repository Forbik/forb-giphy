<template>
  <v-app-bar flat dense>
    <v-container>
      <v-row>
        <v-col cols="4" sm="3" md="4" lg="3" class="d-flex align-center">
          <v-btn
            v-if="isHomePage"
            variant="text"
            height="44"
            style="width: 100px;"
            to="/"
            @click="clearSearchQuery"
          >
            <v-icon icon="mdi-circle-slice-6" />

            Giphy
          </v-btn>
          <v-btn
            v-else
            variant="tonal"
            height="44"
            style="width: 100px;"
            @click="$router.go(-1)"
          >
            <v-icon large class="mr-2" icon="mdi-arrow-left" />

            Back
          </v-btn>
        </v-col>
        <v-col>
          <v-text-field
            v-model="searchQuery"
            @input="handleSearch"
            clearable
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
  import { ref, watch, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'

  import { useGifStore } from '../../store/giphy'

  const gifStore = useGifStore()
  const searchQuery = ref(gifStore.searchQuery)
  const route = useRoute()
  const isHomePage = ref(route.path === '/')
  let timeoutId: ReturnType<typeof setTimeout>

  watch(
    () => route.path,
    (newPath) => {
      isHomePage.value = newPath === '/'
    }
  )

  watch(() => gifStore.searchQuery, (newValue) => {
    searchQuery.value = newValue
  })

  const debounce = (func: Function, delay: number) => {
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
      gifStore.searchGifs(searchQuery.value)
    } else {
      gifStore.fetchTrandingGifs()
    }
  }, 500)

  const clearSearchQuery = () => {
    gifStore.fetchTrandingGifs()
    return gifStore.setSearchQuery('')
  }

  onUnmounted(() => {
    clearTimeout(timeoutId)
  })
</script>

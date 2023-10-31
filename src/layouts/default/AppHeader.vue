<template>
  <v-app-bar flat dense>
    <v-container>
      <div class="d-flex">
        <div style="width: 100px;">
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
        </div>
        <div class="mx-5" style="width: 100%;">
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
        </div>
        <div style="width: 48px;">
          <v-btn
            variant="tonal"
            height="44"
            rounded="lg"
            icon="mdi-theme-light-dark"
            @click="toggleTheme"
          />
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { ref, watch, onUnmounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useTheme } from 'vuetify'

  import { useGifStore } from '../../store/giphy'

  const gifStore = useGifStore()
  const searchQuery = ref(gifStore.searchQuery)
  const route = useRoute()
  const router = useRouter()
  const isHomePage = ref(route.path === '/')
  const theme = useTheme()

  let timeoutId: ReturnType<typeof setTimeout>
  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
  watch(
    () => route.path,
    (newPath) => {
      isHomePage.value = newPath === '/'
    }
  )

  watch(() => searchQuery.value, (newVal) => {
    if (newVal === null) {
      gifStore.fetchTrandingGifs()
    }
  })

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
      if(!isHomePage.value) { goToHome() }
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

  const goToHome = () => {
    router.push({ path: '/' })
  }

  onUnmounted(() => {
    clearTimeout(timeoutId)
  })
</script>

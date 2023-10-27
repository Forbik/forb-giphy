<template>
  <v-container v-if="!isLoading && gifData">
    <v-row>
      <v-col cols="12">
        <h2>{{ gifData.title }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div style="height: 573px;">
          <v-img :src="gifData.images.original.url" />
        </div>
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
    <v-row>
      <v-col cols="12">
        <h3>Random GIFs</h3>
        <Slider />
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-progress-linear indeterminate :height="2"></v-progress-linear>
  </v-container>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useGifStore } from '../store/giphy'

  import Slider from './../components/Slider.vue'

  interface GifData {
    title: string,
    user: {
      display_name: string,
      username: string
    },
    images: {
      original: {
        url: string
      }
    }
  }

  const gifStore = useGifStore()
  const route = useRoute()
  const isLoading = ref(true)
  const gifId = route.params.id.toString()
  const gifData = ref<GifData | undefined>(undefined)

  onMounted(async () => {
    isLoading.value = true
    gifStore.getGifById(gifId).then((data: any[] | undefined) => {
      gifData.value = data as unknown as GifData
    }).catch((error) => {
      console.error('Error fetching gif details: ', error)
    }).finally(() => {
      isLoading.value = false
    })
  })
</script>

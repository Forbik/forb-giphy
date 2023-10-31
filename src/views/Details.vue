<template>
  <v-container v-if="!isLoading">
    <v-row>
      <v-col cols="12">
        <h2 class="details-page__title">{{ gifData.title }}</h2>
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
    <UserInfo v-if="gifData?.user" :gifDataUser="gifData.user" />
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
  import UserInfo from './../components/UserInfo.vue'
  import GifCardComponent from '@/components/GifCardComponent.vue'

  const gifStore = useGifStore()
  const route = useRoute()
  const isLoading = ref(true)
  const gifId = route.params.id.toString()
  const gifData = ref<Gif>({
    id: '',
    url: '',
    title: '',
    images: {
      original: { url: '' },
      original_still: { url: '' },
      fixed_height: { url: '' },
      fixed_height_still: { url: '' },
    },
  } as Gif)

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
<style lang="scss">
.details-page {
  &__title {
    @media screen and (max-width: 600px) {
      font-size: 20px;
      line-height: 1.2;
    }
  }
}
</style>

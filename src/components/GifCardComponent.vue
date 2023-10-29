<template>
  <div style="position: relative;">
    <v-img
      v-if="original"
      class="mx-auto"
      max-width="1200"
      height="100%"
      :lazy-src="gif.images.fixed_height_still.url"
      :src="gif.images.original.url"
    >
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="black" indeterminate></v-progress-circular>
        </div>
      </template>
    </v-img>
    <div
      v-else
      class="skeleton"
      :alt="gif.title"
      :style="`background: center / cover no-repeat url(${gif.images.fixed_height.url});width: 100%; height: 170px;background-color: #f1f1f1;`"
    ></div>
    <v-btn
      :color="isShare ? `success` : `white`"
      size="x-small"
      class="ma-1"
      style="position: absolute; bottom: 0; right: 0;"
      @click.prevent="shareLink(gif)"
      :icon="isShare ? `mdi-check-circle` : `mdi-link-variant-plus`"
    />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import type { Gif } from './../store/giphy'
  defineProps<{
    gif: Gif,
    original?: boolean
  }>()
  const isShare = ref(false)
  async function shareLink (gif: Gif) {
  if (navigator.share) {
    await navigator
      .share({
        title: gif.title,
        url: gif.url,
      })
      .then(() => {
        setShareBehavior()
        console.log('The link was successfully shared!')

      })
      .catch((error) => {
        console.error('An error occurred while trying to share:', error)
      })
  } else {
    console.log('Web Share API is not supported in this browser.')
    navigator.clipboard.writeText(`${gif.title} ${gif.url}`).then(
      () => {
        setShareBehavior()
        console.log('Successfully copied to the clipboard.')
      },
      (error) => {
        console.error('Error copying to clipboard:', error)
      }
    )
  }
  const setShareBehavior = () => {
    isShare.value = true
    setTimeout(() => {
      isShare.value = false
    }, 2000)
  }
}
</script>

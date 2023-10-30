<template>
  <GifsGrid :gifs="gifs" />
</template>

<script lang="ts" setup>
  import { ref, onBeforeMount, onBeforeUnmount } from 'vue'
  import GifsGrid from '@/components/GifsGridComponent.vue'

  const gifs = ref([])
  onBeforeMount(() => {
    console.log('onBeforeMount')
  }),
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
  })
</script>

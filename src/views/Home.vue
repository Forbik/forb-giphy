<template>
  <GifDisplay :gifs="gifs" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import GifDisplay from '@/components/GifDisplay.vue'

  const gifs = ref([])
</script>

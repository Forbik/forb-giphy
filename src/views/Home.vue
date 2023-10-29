<template>
  <GifsGrid :gifs="gifs" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import GifsGrid from '@/components/GifsGridComponent.vue'

  const gifs = ref([])
</script>

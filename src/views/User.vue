<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h2>{{ username }}</h2>
        <a :href="userUrl" target="_blank" rel="noopener noreferrer">
          {{ userUrl }}
        </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <a :href="userUrl" target="_blank" rel="noopener noreferrer">
          <v-avatar v-if="avatarUrl" size="150">
            <img :src="avatarUrl" alt="User Avatar" />
          </v-avatar>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { useGifStore } from '../store/giphy'

const route = useRoute();
const username = route.params.username
const gifStore = useGifStore()

const userUrl = computed(() => `https://giphy.com/${username}` || '#')
const avatarUrl = computed(() => {
  const user = (gifStore.currentGif as any).user
  if (user && user.avatar_url) {
    return user.avatar_url
  } else {
    return undefined
  }
})
</script>

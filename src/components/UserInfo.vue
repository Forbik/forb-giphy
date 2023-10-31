<template>
  <div class="user-info d-flex flex-column justify-center my-7">
    <router-link :to="`/user/${gifDataUser.username}`" class="user-info__avatar" :style="`background-image: url(${gifDataUser.avatar_url});`"></router-link>
    <h2 class="user-info__display-name">{{ gifDataUser.display_name }}</h2>
    <div class="user-info__username d-flex flex-row">
      <router-link :to="`/user/${gifDataUser.username}`">@{{ gifDataUser.username }}</router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import type { User } from './../store/giphy'
  defineProps<{
    gifDataUser: User
  }>()
</script>
<style lang="scss">
.user-info {
  min-height: 50px;
  padding-left: 60px;
  position: relative;
  &__avatar {
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
  }
  &__display-name {
    font-size: 16px;
    line-height: 1.1;
  }
  &__username {
    font-size: 14px;
    font-weight: bold;
    line-height: 1.1;
    a {
      color: #919191;
      text-decoration: none;
    }
  }
}
</style>
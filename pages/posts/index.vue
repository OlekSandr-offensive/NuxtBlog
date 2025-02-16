<script lang="ts" setup>
import { fetchPosts } from '../../services/api';

const { data: posts, status } = await useAsyncData('posts', fetchPosts);

useHead({
  title: 'Posts',
});
</script>

<template>
  <div class="container">
    <div
      v-if="status === 'pending'"
      class="spinner-border text-primary"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <h1>Posts</h1>
    <ul class="list-group">
      <NuxtLink
        v-for="post of posts"
        :key="post.id"
        :to="`/posts/${post.id}`"
        class="list-group-item list-group-item-action"
        >{{ post.title }}
      </NuxtLink>
    </ul>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
import { fetchPostById } from "../../services/api";

const route = useRoute();
const id = route.params.id as string;

const {
  data: post,
  status,
  error,
} = await useAsyncData("post-" + id, () => fetchPostById(id));

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

useHead({
  title: "Post",
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
    <button class="btn btn-primary btn-sm" @click="$router.back()">
      Go back
    </button>
    <article v-if="post" class="blog-post">
      <h2 class="blog-post-title mb-1">{{ post.title }}</h2>
      <p class="blog-post-meta">
        {{ post.createdAt.slice(0, -5).split("T").join(" ") }}
      </p>
      <p>
        <!-- Content of the article -->
        {{ post.content }}
      </p>

      <!-- Image -->
      <img :src="post.image" alt="Article Image" />
      <hr />
    </article>
    <div v-else>No found</div>
    <!-- Comments Section -->
    <TheComments v-if="!error" />
  </div>
</template>

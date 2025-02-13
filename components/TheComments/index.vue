<script lang="ts" setup>
import { fetchComments } from "../../services/api";

const { data: comments, status } = await useAsyncData(
  "comments",
  fetchComments,
);
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
    <!-- Comments Section -->
    <div v-if="comments?.length !== 0" class="p-4 mb-3 bg-light rounded">
      <h3 class="fst-italic">Comments</h3>

      <!-- Single Comment -->
      <div v-for="comment of comments" :key="comment.id" class="comment">
        <img :src="comment.avatar" alt="User Avatar" />
        <div class="comment-details">
          <p>
            <strong>{{ comment.name }}</strong>
          </p>
          <p class="blog-post-meta">
            {{ comment.createdAt.slice(0, -5).split("T").join(" ") }}
          </p>
          <p>
            {{ comment.comment }}
          </p>
        </div>
      </div>
    </div>
    <div v-else>No found</div>
  </div>
</template>

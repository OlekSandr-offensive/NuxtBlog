<script lang="ts" setup>
import { fetchComments } from '../../services/api';
import { handleImageError } from '../../services/handleImageError';

const { data: comments, status } = await useAsyncData(
  'comments',
  fetchComments
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
    <div v-if="comments?.length !== 0" class="p-4">
      <h3 class="fst-italic">Comments</h3>

      <!-- Single Comment -->

      <ul class="list-unstyled">
        <li
          v-for="comment of comments"
          :key="comment.id"
          class="card mb-3 shadow"
        >
          <div class="d-flex flex-start p-4">
            <img
              class="rounded-circle shadow-1-strong me-3 mt-3"
              width="80"
              height="80"
              :src="comment.avatar"
              :alt="comment.name"
              @error="handleImageError"
            />
            <div class="comment-details">
              <p>
                <strong>{{ comment.name }}</strong>
              </p>
              <p class="blog-post-meta">
                {{ comment.createdAt.slice(0, -5).split('T').join(' ') }}
              </p>
              <p>
                {{ comment.comment }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>No found</div>
  </div>
</template>

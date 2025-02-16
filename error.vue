<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: '/posts' });
</script>

<template>
  <div class="container">
    <div class="card mx-auto bottom-50 text-center" style="width: 18rem">
      <h2 class="card-title">{{ props.error?.statusCode }}</h2>
      <p>Ooops.</p>
      <p>{{ props.error?.statusMessage }}</p>
      <button class="btn btn-primary btn-sm" @click="handleError">
        Go back
      </button>
    </div>
  </div>
</template>

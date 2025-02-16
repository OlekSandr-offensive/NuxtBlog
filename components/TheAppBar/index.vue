<script lang="ts" setup>
import { AppBar_Data } from './AppBar.data';
</script>

<template>
  <div class="container">
    <header class="blog-header lh-1 py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <a class="link-secondary" href="#"> Subscribe </a>
        </div>
        <div class="col-4 text-center">
          <a class="blog-header-logo text-dark" href="#"> New Blog </a>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <a class="link-secondary" href="#" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="mx-3"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Search</title>
              <circle cx="10.5" cy="10.5" r="7.5" />
              <path d="M21 21l-5.2-5.2" />
            </svg>
          </a>
          <a class="btn btn-sm btn-outline-secondary" href="#"> Sign up </a>
        </div>
      </div>
    </header>

    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex">
        <ul style="margin-left: 0; padding-left: 0">
          <li style="list-style-type: none">
            <NuxtLink
              v-for="item in AppBar_Data"
              :key="item.name"
              :to="item.url"
              class="p-2 link-secondary"
            >
              <span>{{ item.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
./appBar_data ./appBar.data ./AppBar.data

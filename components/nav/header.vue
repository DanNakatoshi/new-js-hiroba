<template>
  <h1>JS Hiroba</h1>
  <!-- nav menu -->
  <div class="flex flex-row justify">
    <div
      v-for="item in menu"
      :key="item.name"
    >
      <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
    </div>
  </div>
</template>

<script setup>
const menu = [
  { name: 'Home', link: '/' },
  { name: 'Code', link: '/' },
  { name: 'About', link: '/' },
];
</script>

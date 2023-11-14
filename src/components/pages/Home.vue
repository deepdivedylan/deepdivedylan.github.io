<template>
  <h1 class="tw-font-bold tw-pb-8 tw-text-6xl">Publishing to GitHub Pages with <s>Jekyll</s> Vite</h1>
  <h3 class="tw-text-3xl tw-pb-4 lg:tw-text-center"><em>Dylan McDonald</em></h3>
  <h3 class="tw-text-3xl lg:tw-text-center"><em>{{ formattedDate }}</em></h3>
</template>
<script setup>
const date = new Date(2023, 10, 18, 0,0, 0, 0);
const formattedDate = new Intl.DateTimeFormat('default', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(date);
</script>

<template>
  <Nav :pages="pages" />
  <div class="tw-container tw-px-6 tw-py-8 tw-mx-auto tw-text-xl">
    <router-view />
  </div>
  <Footer />
</template>
<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
const pages = [
  { href: '/', label: 'Home' },
  { href: '/what-is-vite', label: 'What is Vite?' },
  { href: '/why-not-jekyll', label: 'Why not Jekyll?' }
];
</script>
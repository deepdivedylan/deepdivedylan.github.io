<template>
  <Nav :pages="pages" />
  <main class="tw-container tw-px-6 tw-py-8 tw-mx-auto tw-text-xl">
    <router-view />
  </main>
  <Footer />
</template>
<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
const pages = [
  { href: '/', label: 'Home' },
  { href: '/why-not-jekyll', label: 'Why not Jekyll?' },
  { href: '/what-is-vite', label: 'What is Vite?' },
  { href: '/getting-started-with-vite', label: 'Getting Started with Vite'},
  { href: '/publishing-to-github-pages', label: 'Publishing to GitHub Pages'}
];
</script>
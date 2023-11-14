<template>
  <div class="tw-bg-indigo-600">
    <nav
        class="
        tw-container
        tw-px-6
        tw-py-8
        tw-mx-auto
        md:tw-flex md:tw-justify-between md:tw-items-center
      "
    >
      <div class="tw-flex tw-items-center tw-justify-between">
        <router-link
            to="/"
            class="
            tw-text-xl
            tw-font-bold
            tw-text-gray-100
            md:tw-text-2xl
            hover:tw-text-indigo-400
          "
        ><img src="/vite.svg" alt="">
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="tw-flex md:tw-hidden">
          <button
              type="button"
              class="
              tw-text-gray-100
              hover:tw-text-gray-400
              focus:tw-outline-none focus:tw-text-gray-400
            "
          >
            <Bars3Icon class="tw-w-6 tw-h-6 tw-fill-current" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
          :class="showMenu ? 'tw-flex' : 'tw-hidden'"
          class="
          tw-flex-col
          tw-mt-8
          tw-space-y-4
          md:tw-flex md:tw-space-y-0 md:tw-flex-row md:tw-items-center md:tw-space-x-10 md:tw-mt-0
        "
      >
        <li class="tw-text-gray-100 hover:tw-text-indigo-400" v-for="page in pages" :key="page.href" @click="toggleNav"><router-link :to="page.href">{{ page.label }}</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
import { Bars3Icon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
const props = defineProps({
  pages: {
    type: Array,
    required: true
  }
});
const showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>

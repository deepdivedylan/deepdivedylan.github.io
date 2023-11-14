<template>
  <div class="tw-bg-indigo-600">
    <nav
        class="
        tw-container
        tw-px-6
        tw-py-8
        tw-mx-auto
        tw-md:flex tw-md:justify-between tw-md:items-center
      "
    >
      <div class="tw-flex tw-items-center tw-justify-between">
        <router-link
            to="/"
            class="
            tw-text-xl
            tw-font-bold
            tw-text-gray-100
            tw-md:text-2xl
            tw-hover:text-indigo-400
          "
        ><img src="/vite.svg" alt="">
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="tw-flex tw-md:hidden">
          <button
              type="button"
              class="
              tw-text-gray-100
              tw-hover:text-gray-400
              tw-focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="tw-w-6 tw-h-6 tw-fill-current">
              <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
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
          tw-md:flex tw-md:space-y-0 tw-md:flex-row tw-md:items-center tw-md:space-x-10 tw-md:mt-0
        "
      >
        <li class="tw-text-gray-100 tw-hover:text-indigo-400" v-for="page in pages" :key="page.href"><router-link :to="page.href">{{ page.label }}</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
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
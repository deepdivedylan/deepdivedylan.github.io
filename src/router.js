import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/Home.vue';
import GettingStartedWithVite from './components/pages/GettingStartedWithVite.vue';
import PublishingToGitHubPages from './components/pages/PublishingToGitHubPages.vue';
import WhatIsVite from './components/pages/WhatIsVite.vue';
import WhyNotJekyll from './components/pages/WhyNotJekyll.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/getting-started-with-vite', component: GettingStartedWithVite },
    { path: '/publishing-to-github-pages', component: PublishingToGitHubPages },
    { path: '/what-is-vite', component: WhatIsVite },
    { path: '/why-not-jekyll', component: WhyNotJekyll }
];
const history = createWebHistory();

export default createRouter({
    history,
    routes
});
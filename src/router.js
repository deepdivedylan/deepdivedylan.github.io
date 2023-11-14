import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import Home from './components/pages/Home.vue';
import WhatIsVite from './components/pages/WhatIsVite.vue';
import WhyNotJekyll from './components/pages/WhyNotJekyll.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/what-is-vite', component: WhatIsVite },
    { path: '/why-not-jekyll', component: WhyNotJekyll }
];
const history = createWebHistory();

export default createRouter({
    history,
    routes
});
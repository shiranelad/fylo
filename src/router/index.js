import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: '/board/',
    //   name: 'board-list',
    //   component: boardList,
    // },
    // {
    //   path: '/board/:boardId?',
    //   name: 'board-details',
    //   component: boardDetails,
    // },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import Resume from '../views/Resume.vue';
import Config from '../views/Config.vue';

const routes = [
  {
    path: '/',
    name: 'Resume',
    component: Resume,
    meta: {
      title: '简历 | 吴洋'
    }
  },
  {
    path: '/config',
    name: 'Config',
    component: Config,
    meta: {
      title: '简历配置 | 吴洋'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 路由守卫 - 更新页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;


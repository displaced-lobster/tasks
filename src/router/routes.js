const routes = [
  {
    path: '/',
    component: () => import('layouts/main-layout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/error-404.vue'),
  },
]

export default routes

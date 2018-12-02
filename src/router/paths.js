export default [
  {
    path: '*',
    meta: {
      public: true,
    },
    redirect: {
      path: '/404'
    }
  },  
  {
    path: '/404',
    meta: {
      public: true,
    },
    name: 'NotFound',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/NotFound.vue`
    )
  },
  {
    path: '/403',
    meta: {
      public: true,
    },
    name: 'AccessDenied',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/Deny.vue`
    )
  },
  {
    path: '/500',
    meta: {
      public: true,
    },
    name: 'ServerError',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/Error.vue`
    )
  },
  {
    path: '/login',
    meta: {
      public: true,
    },
    name: 'Login',
    abstract: true,
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/Login.vue`
    )
  },
  {
    path: '/',
    meta: { },
    name: 'Root',
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    path: '/dashboard',
    meta: { breadcrumb: true },
    name: 'Dashboard',
    abstract: true,
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/Dashboard.vue`
    )
  },

  // 
  {
    path: '/policies/profiles',
    meta: { breadcrumb: true },
    name: 'policies/profiles',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/sample.vue`
    )
  },  
  {
    path: '/policies/sessions',
    meta: { breadcrumb: true },
    name: 'policies/sessions',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/sample.vue`
    )
  },  
  {
    path: '/objects/networks',
    meta: { breadcrumb: true },
    name: 'objects/networks',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/sample.vue`
    )
  },  
  {
    path: '/objects/ports',
    meta: { breadcrumb: true },
    name: 'objects/ports',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/sample.vue`
    )
  },  

  {
    path: '/widgets/statistic',
    meta: { breadcrumb: true },
    name: 'components/statistic',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/widgets/Statistic.vue`
    )
  },
  {
    path: '/widgets/chart',
    meta: { breadcrumb: true },
    name: 'components/chart',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/widgets/Chart.vue`
    )
  },


  {
    path: '/components/alert',
    meta: { breadcrumb: true },
    name: 'components/alerts',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/ui/Alert.vue`
    )
  },
  {
    path: '/components/avatar',
    meta: { breadcrumb: true },
    name: 'components/avatars',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/ui/Avatar.vue`
    )
  },
  {
    path: '/components/badge',
    meta: { breadcrumb: true },
    name: 'components/badges',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/ui/Badge.vue`
    )
  },
  {
    path: '/components/button',
    meta: { breadcrumb: true },
    name: 'components/buttons',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/ui/Button.vue`
    )
  },  
];

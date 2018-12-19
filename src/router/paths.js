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
      // `@/pages/sample.vue`
      `@/components/networkobj.vue`
    )
  },  
  {
    path: '/objects/networks1',
    meta: { breadcrumb: true },
    name: 'objects/networks1',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      // `@/pages/sample.vue`
      `@/components/networkobj1.vue`
    )
  },  
  {
    path: '/objects/networks2',
    meta: { breadcrumb: true },
    name: 'objects/networks2',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      // `@/pages/sample.vue`
      `@/components/networkobj2.vue`
    )
  },  
  {
    path: '/objects/networks3',
    meta: { breadcrumb: true },
    name: 'objects/networks3',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      // `@/pages/sample.vue`
      `@/components/networkobj3.vue`
    )
  },  
  {
    path: '/objects/networks6',
    meta: { breadcrumb: true },
    name: 'objects/networks6',
    component: () => import(
      `@/components/networkobj6.vue`
    )
  },  
  {
    path: '/objects/services',
    meta: { breadcrumb: true },
    name: 'objects/services',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/sample.vue`
    )
  },  

];

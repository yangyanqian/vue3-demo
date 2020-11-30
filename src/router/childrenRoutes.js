export const childrenRoutes = [
  {
    path: "",
    name: "Default",
    component: () => import("@/views/Default.vue")
  },
  {
    path: "/About",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/Resume",
    name: "Resume",
    component: () => import("@/views/Resume.vue")
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: () => import("@/views/Portfolio.vue")
  }
];
import { createApp } from "vue";
import App from "./App.vue";

import * as VueRouter from "vue-router";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "@/pages/NotFoundPage";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import SignInPage from "@/components/SignInPage";
import SignUpPage from "@/components/SignUpPage";

import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

createApp(App)
  .use(bootstrap)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/cart",
          component: ShoppingCartPage,
        },
        {
          path: "/products",
          component: ProductPage,
        },
        {
          path: "/products/:productId",
          component: ProductDetailPage,
        },
        {
          path: "/about",
          component: AboutPage,
        },
        {
          path: "/contact",
          component: ContactPage,
        },
        {
          path: "/signin",
          component: SignInPage,
        },
        {
          path: "/signup",
          component: SignUpPage,
        },
        {
          path: "/:pathMatch(.*)*",
          component: NotFoundPage,
        },
      ],
    })
  )
  .mount("#app");

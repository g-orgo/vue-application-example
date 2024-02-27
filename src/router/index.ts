import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/products",
            name: "Products",
            component: () => import("../views/Products.vue"),
            children: [
                {
                    path: ":product",
                    name: "ProductDetails",
                    component: () =>
                        import("../components/Product/ProductDetails.vue"),
                },
            ],
        },
        {
            path: "/register",
            name: "UserRegistration",
            component: () => import("../views/Registration.vue"),
        },
        {
            path: "/profile",
            name: "UserProfile",
            component: () => import("../views/UserProfile.vue"),
        },
    ],
});

export default router;

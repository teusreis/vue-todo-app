import { createRouter, createWebHistory } from "vue-router";
import store from "./../store";

const routes = [
    {
        path: "/",
        name: "Home",
        redirect: { name: "todo.index" },
    },
    {
        path: "/signin",
        name: "signin",
        component: () => import("./../pages/auth/Login.vue"),
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import("./../pages/auth/Register.vue"),
    },
    {
        path: "/todo",
        name: "todo.index",
        component: () => import("./../pages/todo/TodoIndex.vue"),
        meta: { auth: true },
    },
    {
        path: "/todo/create",
        name: "todo.create",
        component: () => import("./../pages/todo/TodoCreate.vue"),
        meta: { auth: true },
    },
    {
        path: "/todo/:id",
        name: "todo.show",
        component: () => import("./../pages/todo/TodoShow.vue"),
        meta: { auth: true },
    },
    {
        path: "/todo/:id/edit",
        name: "todo.edit",
        component: () => import("./../pages/todo/TodoEdit.vue"),
        meta: { auth: true },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(function (to, _, next) {
    if (to.meta.auth && !store.getters.isAuthenticated) {
        next("/signin");
    }

    next(true);
});

export default router;

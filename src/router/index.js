import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        redirect: { name: "todo.index" },
    },
    {
        path: "/todo",
        name: "todo.index",
        component: () => import("./../pages/todo/TodoIndex.vue"),
    },
    {
        path: "/todo/create",
        name: "todo.create",
        component: () => import("./../pages/todo/TodoCreate.vue"),
    },
    {
        path: "/todo/:id",
        name: "todo.show",
        component: () => import("./../pages/todo/TodoShow.vue"),
    },
    {
        path: "/todo/:id/edit",
        name: "todo.edit",
        component: () => import("./../pages/todo/TodoEdit.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

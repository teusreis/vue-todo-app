import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TheButton from "./ui/TheButton";
import "./styles/index.css";

import api from "./api/api";

const app = createApp(App);

app.config.globalProperties.$axios = api;

app.component("TheButton", TheButton).use(store).use(router).mount("#app");

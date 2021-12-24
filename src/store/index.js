import { createStore } from "vuex";
import authModule from "./module/auth";

export default createStore({
    modules: {
        auth: authModule,
    },
    state: {},
    mutations: {},
    actions: {},
});

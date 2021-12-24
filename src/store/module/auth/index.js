import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters";

export default {
    state() {
        return {
            token: localStorage.getItem("token"),
        };
    },
    mutations,
    actions,
    getters,
};

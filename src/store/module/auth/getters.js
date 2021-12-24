export default {
    isAuthenticated(state) {
        return !!state.token;
    },
    token(state) {
        return state.token;
    },
};

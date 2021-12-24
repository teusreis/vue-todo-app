import api from "./../../../api/api";

export default {
    async login(context, payload) {
        const url = "/api/login";
        const data = await api.post(url, payload);

        if (data.status === 200) {
            localStorage.setItem("token", data.data.token);
            context.commit("setUser", {
                token: data.data.token,
            });
        }

        return data.data;
    },
    async signup(context, payload) {
        const url = "/api/register";
        const data = await api.post(url, payload);

        if (data.status === 200) {
            localStorage.setItem("token", data.data.token);
            context.commit("setUser", {
                token: data.data.token,
            });
        }

        return data.data;
    },
    async logout(context) {
        const url = "/api/logout";
        const data = await api.post(url);

        if (data.status === 200) {
            localStorage.removeItem("token");
            context.commit("setUser", {
                token: null,
            });
        }

        return data.data;
    },
    async vefiryToken(context) {
        const url = "/api/verify-token";

        try {
            const data = await api.get(url);

            if (data.status !== 200) {
                localStorage.removeItem("token");
                context.commit("setUser", {
                    token: null,
                });
            }
        } catch (error) {
            localStorage.removeItem("token");
            context.commit("setUser", {
                token: null,
            });
        }
    },
};

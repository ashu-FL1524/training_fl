import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        data:[],
    },
    mutations: {
        setUsers: (state, payload) => {
            state.data = payload;
        },
    },
    actions: {
        setUserAction: (state, payload) => {
            state.commit('setUsers', payload);
        },
    },
    modules: {
    },
    getters: {
        getListOfUsers: (state) => state.data,
    },
});

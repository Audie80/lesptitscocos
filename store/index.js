import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => {
    return new Vuex.Store({
        state: () => ({
            shopCategories: []
        }),
        mutations: {
            SET_DATA(state, theData) {
                state.shopCategories = theData
            }
        },
        actions: {
            // nuxtServerInit is called by Nuxt.js before server-rendering every page
            async nuxtServerInit({ dispatch }) {
                await dispatch('setShopCategories')
            },
            // axios...
            async setShopCategories({ commit }) {
                const { data } = await this.$axios.get('categories')
                commit('SET_DATA', data)
            },
        },
    })
}

export default store;
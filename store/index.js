import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => {
    return new Vuex.Store({
        state: () => ({
            shopCategories: [],
            productCategories: []
        }),
        mutations: {
            SET_SHOPCAT(state, theData) {
                state.shopCategories = theData
            },
            SET_PRODUCTCAT(state, theData) {
                state.productCategories = theData
            }
        },
        actions: {
            // nuxtServerInit is called by Nuxt.js before server-rendering every page
            async nuxtServerInit({ dispatch }) {
                await dispatch('setShopCategories'),
                await dispatch('setProductCategories')
            },
            // axios...
            async setShopCategories({ commit }) {
                const { data } = await this.$axios.get('categories')
                commit('SET_SHOPCAT', data)
                
            },
            async setProductCategories({ commit }) {
                const { data } = await this.$axios.get('categoriesproduits')
                commit('SET_PRODUCTCAT', data)

            },
        },
    })
}

export default store;
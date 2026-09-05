import { reactive } from 'vue'

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()

  const store = reactive({
    state: {
      shopCategories: [],
      productCategories: []
    },
    commit(mutation: string, payload: any) {
      if (mutation === 'SET_SHOPCAT') this.state.shopCategories = payload
      if (mutation === 'SET_PRODUCTCAT') this.state.productCategories = payload
    },
    async dispatch(action: string) {
      if (action === 'setShopCategories') {
        try {
          const data = await $fetch(`${config.public.API_URL}categories`)
          this.commit('SET_SHOPCAT', data)
        } catch (e) {
          this.commit('SET_SHOPCAT', [])
        }
      } else if (action === 'setProductCategories') {
        try {
          const data = await $fetch(`${config.public.API_URL}categoriesproduits`)
          this.commit('SET_PRODUCTCAT', data)
        } catch (e) {
          this.commit('SET_PRODUCTCAT', [])
        }
      } else if (action === 'nuxtServerInit') {
        await this.dispatch('setShopCategories')
        await this.dispatch('setProductCategories')
      }
    }
  })

  // initialize store data
  try {
    await store.dispatch('nuxtServerInit')
  } catch (e) {
    // ignore
  }

  // provide to composition API
  nuxtApp.provide('store', store)

  // set this.$store on components via a mixin to avoid assigning to read-only globalProperties
  nuxtApp.vueApp.mixin({
    created() {
      // @ts-ignore
      this.$store = store
    }
  })
})

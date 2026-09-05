export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const base = config.public.API_URL || 'http://localhost:8001/api/'

  const wrap = (res) => res

  const axiosCompat = {
    async $get(url, opts) {
      return await $fetch(base + url, { method: 'GET', ...opts })
    },
    async get(url, opts) {
      const data = await $fetch(base + url, { method: 'GET', ...opts })
      return { data }
    },
    async $post(url, body, opts) {
      return await $fetch(base + url, { method: 'POST', body, ...opts })
    },
    async post(url, body, opts) {
      const data = await $fetch(base + url, { method: 'POST', body, ...opts })
      return { data }
    },
    async $put(url, body, opts) {
      return await $fetch(base + url, { method: 'PUT', body, ...opts })
    },
    async put(url, body, opts) {
      const data = await $fetch(base + url, { method: 'PUT', body, ...opts })
      return { data }
    },
    async $delete(url, opts) {
      return await $fetch(base + url, { method: 'DELETE', ...opts })
    },
    async delete(url, opts) {
      const data = await $fetch(base + url, { method: 'DELETE', ...opts })
      return { data }
    }
  }

  // provide to Nuxt app
  nuxtApp.provide('axios', axiosCompat)

  // Add a small mixin to set this.$axios on component instances (avoids writing to a read-only globalProperties)
  if (nuxtApp.vueApp && nuxtApp.vueApp.mixin) {
    nuxtApp.vueApp.mixin({
      beforeCreate() {
        // @ts-ignore
        if (this && typeof this === 'object' && !this.$axios) {
          // @ts-ignore
          this.$axios = axiosCompat
        }
      }
    })
  }
})

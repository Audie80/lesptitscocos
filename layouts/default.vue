<template>
  <v-app class="app success">
      <Header />
      <div class="v-overlay-container"></div>
      <v-main>
        <NuxtPage />
      </v-main>
      <Footer />
  </v-app>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
<template>
<!-- Header -->
  <v-toolbar dense extended flat app>
    <!-- titre -->
    <v-toolbar-title><nuxt-link to="/">PTITCO</nuxt-link></v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- champ de recherche -->
    <v-text-field
        class="mx-3"
        placeholder="Recherchez un produit"
        append-icon="search"
        solo
        single-line
        autofocus
        v-model.trim="inputSearch"
        @click:append="sendSearch"
      ></v-text-field>
    <v-spacer></v-spacer>

    <!-- espace client -->
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Connectez-vous</v-btn>
      <v-btn flat>Panier</v-btn>
      <v-btn flat><v-icon color="orange">favorite_border</v-icon></v-btn>
    </v-toolbar-items>

    <!-- 2ème ligne : menu de navigation -->
    <template v-slot:extension>
        <v-toolbar-items>
            <v-btn flat>Anti-Gaspi</v-btn>
            <v-btn flat><nuxt-link to="/commerces/boulangerie">Boulangerie</nuxt-link></v-btn>
            <v-btn flat><nuxt-link to="/commerces/boucherie">Boucherie</nuxt-link></v-btn>
            <v-btn flat>Epicerie</v-btn>
            <v-btn flat>Poissonnerie</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat>Nos valeurs</v-btn>
            <v-btn flat>FAQ</v-btn>
        </v-toolbar-items>
    </template>
  </v-toolbar>
</template>

<script>
    export default {
        name: 'Header',
        data: function() {
          return {
            inputSearch: ''
          }
        },
        methods: {
          //Méthode du champ de recherche qui amène à la page des résultats et qui vide le champ
          sendSearch: function() {
            this.$router.push({ name: 'index' })
            this.inputSearch = ''
          }
        }
    }
</script>
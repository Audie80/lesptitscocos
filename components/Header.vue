<template>
<!-- Header -->
  <v-toolbar dense extended flat app class="yellow lighten-2">
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
    <v-toolbar-items>
      <v-btn flat class="orange--text text-capitalize">Connectez-vous</v-btn>
      <v-btn flat icon color="orange"><v-icon>shopping_cart</v-icon></v-btn>   
      <v-btn flat icon color="orange"><v-icon>favorite</v-icon></v-btn>
    </v-toolbar-items>

    <!-- 2ème ligne : menu de navigation -->
    <template v-slot:extension>

        <!-- menu pour ordis -->
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat class="text-capitalize" v-for="item in menu" :key="item.title" :to="item.link">{{ item.title}}</v-btn>
        </v-toolbar-items>
        <!-- menu pour mobiles -->
        <v-menu class="hidden-md-and-up">
          <v-btn flat slot="activator" class="text-capitalize">
            <span>Tous les produits</span>
            <v-icon right>arrow_drop_down</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.title">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat class="text-capitalize">Anti-Gaspi</v-btn>
            <v-btn flat class="text-capitalize">Blog</v-btn>
            <v-btn flat class="text-capitalize">Nos valeurs</v-btn>
            <v-btn flat class="text-capitalize">FAQ</v-btn>
        </v-toolbar-items>
    </template>
  </v-toolbar>
</template>

<script>
    export default {
        name: 'Header',
        data: function() {
          return {
            inputSearch: '',
            shoppingCartNumber: "6",
            menu: [
              { title: "ma Boulangerie" },
              { title: "ma Boucherie Charcuterie" },
              { title: "mon Epicerie" },
              { title: "ma Poissonnerie" },
              { title: "mon Traiteur" }
            ]
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
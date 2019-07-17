<template>
<!-- Header -->
  <v-toolbar dense extended flat app class="yellow lighten-2">

    <!-- nous situer -->
    <v-btn flat icon color="orange"><v-icon>place</v-icon></v-btn>   

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

    <!-- titre -->
    <v-toolbar-title><nuxt-link to="/">TY DRIVE</nuxt-link></v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- espace client -->
    <v-toolbar-items>
      <v-btn flat round class="orange--text text-capitalize"><v-icon left>account_circle</v-icon>Connexion</v-btn>
      <v-btn flat round class="orange--text text-capitalize"><v-icon left>shopping_cart</v-icon>Panier</v-btn>   
      <v-btn flat icon medium color="orange"><v-icon>favorite_border</v-icon></v-btn>
    </v-toolbar-items>

    <!-- 2ème ligne : menu de navigation -->
    <template v-slot:extension>

        <!-- menu pour ordis -->
        <v-toolbar-items class="hidden-sm-and-down">
          <v-menu offset-y>
            <v-btn flat slot="activator" class="text-capitalize" v-for="item in menu" :key="item.title" :to="item.link">
              {{ item.title}}
            </v-btn>
            <v-list>
              <!-- A FAIRE boucle v-for pour afficher les sous-catégories + pour l'instant on est obligé de cliquer sur le bouton (pas de hold) -->
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <nuxt-link to="/produits/ma_boulangerie/pains">Pains</nuxt-link>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <nuxt-link to="/produits/ma_boulangerie/viennoiseries">Viennoiseries</nuxt-link>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <nuxt-link to="/produits/ma_boulangerie/patisseries">Pâtisseries</nuxt-link>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar-items>
        <!-- menu pour mobiles - A MODIFIER en Navigation Drawer-->
        <v-menu offset-y class="hidden-md-and-up">
          <v-btn flat slot="activator" class="text-capitalize">
            <span>Tous les produits</span>
            <v-icon right>arrow_drop_down</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.title">
              <v-list-tile-content>
                <v-list-tile-title>
                  <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat round class="text-capitalize">Anti-Gaspi</v-btn>
            <v-btn flat round class="text-capitalize">Blog</v-btn>
            <v-btn flat round class="text-capitalize">Nos valeurs</v-btn>
            <v-btn flat round class="text-capitalize">FAQ</v-btn>
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
              { title: "ma Boulangerie", link: "/produits/ma_boulangerie" },
              { title: "ma Boucherie Charcuterie", link: "/produits/ma_boucherie_charcuterie" },
              { title: "mon Epicerie", link: "/produits/mon_epicerie" },
              { title: "ma Poissonnerie", link: "/produits/ma_poissonnerie" },
              { title: "mon Traiteur", link: "/produits/mon_traiteur" }
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
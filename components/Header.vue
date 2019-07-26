<template>
<!-- Header -->
  <div>
    
    <!-- menu pour mobiles -->
    <v-navigation-drawer v-model="drawer" app hideOverlay temporary>
      
      <v-list>

        <!-- menu toutes les boutiques -->
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title class="info--text">
                  Toutes mes boutiques
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile v-for="category in $store.state.shopCategories" :key="category._id" :to="`/produits/${category.slug}`">
            <v-list-tile-content>
              <v-list-tile-title class="info--text">{{ category.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <!-- menu des catégories et sous-catégories de produits -->
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title class="info--text">
                  Tous mes produits
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile v-for="item in menu" :key="item.title" :to="item.link">
            <v-list-tile-content>
              <v-list-tile-title class="info--text">
                <!-- A FAIRE : ajouter une boucle pour les sous-catégories -->
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <!-- anti-gaspi et blog -->
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="info--text">
              Anti-gaspi
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="info--text">
              Blog
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <!-- espace client -->
        <v-list subheader>
          <v-subheader>Mon espace client</v-subheader>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="info">account_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="info--text">
                Connexion
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="info">shopping_cart</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="info--text">
                Panier
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="info">favorite_border</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="info--text">
                Favoris
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

      </v-list>

    </v-navigation-drawer>

    <v-toolbar extended app class="white">

      <!-- Première ligne -->
      <v-layout align-center row mt-1>

        <!-- bouton d'activation du menu pour mobiles -->
        <v-toolbar-side-icon class="info hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>

        <!-- nous situer -->
        <v-btn flat round icon small outline class="primary hidden-sm-and-down">
          <a href="/#googleMap"><v-icon small color="primary">place</v-icon></a>
        </v-btn>   

        <!-- champ de recherche -->
        <v-flex xs2 mt-2 ml-2 class="hidden-sm-and-down">
          <v-text-field
            placeholder="Recherchez un produit"
            prepend-inner-icon="search"
            color="primary"
            autofocus
            v-model.trim="inputSearch"
            @click:prepend-inner="sendSearch"
          ></v-text-field>
        </v-flex>
        
        <v-spacer></v-spacer>

        <!-- titre -->
        <v-flex xs12 md4 text-xs-center>
          <v-toolbar-title>
            <nuxt-link to="/">
              <span class="secondary--text text-uppercase display-2 font-weight-black" id="MainTitle">Ty Drive</span>
            </nuxt-link>
          </v-toolbar-title>
        </v-flex>

        <v-spacer></v-spacer>

        <!-- espace client -->
        <v-btn small round outline class="primary--text text-capitalize hidden-sm-and-down">
          <v-icon small left>account_circle</v-icon>
          <span>Connexion</span>
        </v-btn>
        <v-btn small round outline class="primary--text text-capitalize hidden-sm-and-down">
          <v-icon small left>shopping_cart</v-icon>
          <span>Panier</span>
        </v-btn>   
        <v-btn flat round icon small outline class="primary hidden-sm-and-down">
          <v-icon small color="primary">favorite_border</v-icon>
        </v-btn>

      </v-layout>


      <!-- 2ème ligne pour mobile -->
      <v-layout row slot="extension" class="hidden-md-and-up">

        <!-- champ de recherche pour mobile -->
        <v-flex xs10 sm8 offset-xs1 offset-sm2>
          <v-text-field
            placeholder="Recherchez un produit"
            prepend-inner-icon="search"
            color="info"
            autofocus
            v-model.trim="inputSearch"
            @click:prepend-inner="sendSearch"
          ></v-text-field>
        </v-flex>

      </v-layout>


      <!-- 2ème ligne pour ordi : menu de navigation -->
      <v-layout row slot="extension" class="primary hidden-sm-and-down">

        <!-- menu toutes les boutiques -->
        <v-menu open-on-hover down offset-y>
          <template v-slot:activator="{ on }">
            <v-btn flat class="text-capitalize info--text" color="primary" v-on="on">
              Toutes mes boutiques
            </v-btn>
          </template>
          <v-list>
            <v-list-tile v-for="category in $store.state.shopCategories" :key="category._id" :to="`/produits/${category.slug}`">
            <v-list-tile-content>
              <v-list-tile-title class="info--text">{{ category.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          </v-list>
        </v-menu>

        <v-divider class="mx-3" inset vertical></v-divider>

        <v-spacer></v-spacer>
        
        <!-- menu des catégories et sous-catégories de produits -->
        <v-menu offset-y open-on-hover>
          <v-btn outline slot="activator" class="text-capitalize white--text" color="primary" v-for="item in menu" :key="item.title" :to="item.link">
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

        <v-spacer></v-spacer>

        <v-divider class="mx-3" inset vertical></v-divider>

        <v-btn flat class="text-capitalize info--text" color="primary">Anti-Gaspi</v-btn>
        <v-btn flat class="text-capitalize info--text" color="primary">Blog</v-btn>

      </v-layout>
     
    </v-toolbar>

  </div>
</template>

<script>
    export default {
        name: 'Header',
        // async asyncData({ $axios }) {
        //   let shopCategories = await $axios.$get('categories')
        //   return { shopCategories }
        // },
        // async getMenus ({ $axios }) {
        //   await $axios.$get('categories')
        //     .then((res) => {
        //       this.shopCategories = res.data
        //     })
        // },
        data: function() {
          return {
            inputSearch: '',
            drawer: false,
            menu: [
              { title: "Boulangerie", link: "/produits/boulangerie" },
              { title: "Boucherie", link: "/produits/boucherie" },
              { title: "Epicerie", link: "/produits/epicerie" },
              { title: "Poissonnerie", link: "/produits/poissonnerie" },
              { title: "Traiteur", link: "/produits/traiteur" },
              { title: "Primeur", link: "/produits/primeur" }
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

<style scoped>
 /* .display-2 {
   font-family: "Fredoka One", sans-serif !important;
 } */
</style>

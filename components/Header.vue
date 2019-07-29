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
                <v-list-tile-title class="info--text fjalla-font">
                  Toutes mes boutiques
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
<<<<<<< HEAD
          <v-list-tile v-for="item in menu" :key="item.title" :to="item.link">
            <v-list-tile-content>
              <v-list-tile-title class="info--text">{{ item.title }}</v-list-tile-title>
=======
          <v-list-tile v-for="category in $store.state.shopCategories" :key="category._id">
            <v-list-tile-content>
              <a :href="`/produits/${category.slug}`">
                <v-list-tile-title class="info--text raleway-font">{{ category.name }}</v-list-tile-title>
              </a>
>>>>>>> b910675481db952b03bf12d68965a7579b7fc2f9
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <!-- menu des catégories et sous-catégories de produits -->
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title class="info--text fjalla-font">
                  Tous mes produits
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile v-for="item in menu" :key="item.title">
            <v-list-tile-content>
              <v-list-tile-title class="info--text raleway-font">
                <!-- A FAIRE : ajouter une boucle pour les sous-catégories -->
                <a :href="`${item.link}`">{{ item.title }}</a>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <!-- anti-gaspi et blog -->
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="info--text fjalla-font">
              Anti-gaspi
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="info--text fjalla-font">
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
              <v-list-tile-title class="info--text raleway-font">
                Connexion
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="info">shopping_cart</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="info--text raleway-font">
                Panier
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="info">favorite_border</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="info--text raleway-font">
                Favoris
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

      </v-list>

    </v-navigation-drawer>

    <v-toolbar extended app class="success">

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
            class="raleway-font"
          ></v-text-field>
        </v-flex>
        
        <v-spacer></v-spacer>

        <!-- titre -->
        <v-flex xs12 md4 text-xs-center>
          <v-toolbar-title>
            <a href="/">
              <span class="info--text text-uppercase display-2 font-weight-black fredoka-font" id="MainTitle">Ty</span> <span class="secondary--text text-uppercase display-2 font-weight-black fredoka-font" id="MainTitle">Drive</span>
            </a>
          </v-toolbar-title>
        </v-flex>

        <v-spacer></v-spacer>

        <!-- espace client -->
        <v-btn small round outline class="primary--text text-capitalize hidden-sm-and-down">
          <v-icon small left>account_circle</v-icon>
          <span class="raleway-font">Connexion</span>
        </v-btn>
        <v-btn small round outline class="primary--text text-capitalize hidden-sm-and-down">
          <v-icon small left>shopping_cart</v-icon>
          <span class="raleway-font">Panier</span>
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
            class="raleway-font"
          ></v-text-field>
        </v-flex>

      </v-layout>


      <!-- 2ème ligne pour ordi : menu de navigation -->
      <v-layout row slot="extension" class="accent hidden-sm-and-down">

        <!-- menu toutes les boutiques -->
        <v-menu open-on-hover down offset-y>
          <template v-slot:activator="{ on }">
            <v-btn flat class="text-capitalize info--text fjalla-font" v-on="on">
              Toutes mes boutiques
            </v-btn>
          </template>
          <v-list>
<<<<<<< HEAD
            <v-list-tile v-for="item in menu" :key="item.title" :to="item.link">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
=======
            <v-list-tile v-for="category in $store.state.shopCategories" :key="category._id">
            <v-list-tile-content>
              <a :href="`/commerces/${category.slug}`">
                <v-list-tile-title class="info--text raleway-font">{{ category.name }}</v-list-tile-title>
              </a>
            </v-list-tile-content>
          </v-list-tile>
>>>>>>> b910675481db952b03bf12d68965a7579b7fc2f9
          </v-list>
        </v-menu>

        <v-divider inset vertical></v-divider>

        <v-spacer></v-spacer>
        
        <!-- menu des catégories et sous-catégories de produits -->
        <!-- A FAIRE mettre l'id en key -->
        <v-menu offset-y open-on-hover v-for="item in menu" :key="item.title">
          <v-btn outline slot="activator" class="text-capitalize success--text fredoka-font">
            <a class="success--text" :href="`/produits/${item.slug}`">{{ item.title}}</a>
          </v-btn>
          <v-list>
            <!-- A FAIRE boucle v-for pour afficher les sous-catégories + pour l'instant on est obligé de cliquer sur le bouton (pas de hold) -->
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  <a href="/produits/boulangerie/pains">Pains</a>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  <a href="/produits/boulangerie/viennoiseries">Viennoiseries</a>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  <a href="/produits/boulangerie/patisseries">Pâtisseries</a>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <v-divider inset vertical></v-divider>

        <v-btn flat class="text-capitalize info--text fjalla-font">Anti-Gaspi</v-btn>
        <v-btn flat class="text-capitalize info--text fjalla-font">Blog</v-btn>

      </v-layout>
     
    </v-toolbar>

  </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Header',
        data: function() {
          return {
            inputSearch: '',
            drawer: false,
            menu: [
              { title: "Boulangerie", slug: "boulangerie" },
              { title: "Boucherie", slug: "boucherie" },
              { title: "Epicerie", slug: "epicerie" },
              { title: "Poissonnerie", slug: "poissonnerie" },
              { title: "Caviste", slug: "caviste" },
              { title: "Primeur", slug: "primeur" }
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
<<<<<<< HEAD

<style scoped>
 .display-2 {
   font-family: "Fredoka One", sans-serif !important;
 }
</style>
=======
>>>>>>> b910675481db952b03bf12d68965a7579b7fc2f9

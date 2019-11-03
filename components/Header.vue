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
          <v-list-tile v-for="category in $store.state.shopCategories" :key="category._id">
            <v-list-tile-content>
              <a :href="`/commerces/${category.slug}`">
                <v-list-tile-title class="info--text raleway-font">{{ category.name }}</v-list-tile-title>
              </a>
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
          <v-list-tile v-for="productCategory in $store.state.productCategories" :key="productCategory._id">
              <v-list-tile-content>
                <!-- A FAIRE : ajouter une boucle pour les sous-catégories -->
                  <v-list-tile-title class="info--text raleway-font"><a :href="`/produits/${productCategory.slug}`">{{ productCategory.name }}</a></v-list-tile-title>
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
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn flat round icon small outline class="primary--text hidden-sm-and-down" v-on="on">
              <a href="/#googleMap"><v-icon small color="primary">place</v-icon></a>
            </v-btn>
          </template>
          <span>Nous situer</span>
        </v-tooltip>
          
        <!-- champ de recherche -->
        <v-flex xs2 mt-2 ml-2 class="hidden-sm-and-down">
          <v-text-field
            placeholder="Recherchez un produit"
            color="primary"
            autofocus
            v-model.trim="inputSearch"
            class="raleway-font"
          ></v-text-field>
        </v-flex>
        <v-btn flat round icon small outline class="primary--text hidden-sm-and-down">
          <a :href="`/recherche/${this.inputSearch}`"><v-icon small color="primary">search</v-icon></a>
        </v-btn>
        
        <v-spacer></v-spacer>

        <!-- titre -->
        <v-flex xs12 md4 text-xs-center>
          <v-toolbar-title>
            <a href="/">
              <span class="info--text text-uppercase display-2 font-weight-black fredoka-font" id="MainTitle">Ty</span> <span class="primary--text text-uppercase display-2 font-weight-black fredoka-font" id="MainTitle">Drive</span>
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
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn flat round icon small outline class="primary--text hidden-sm-and-down" v-on="on">
              <v-icon small color="primary">favorite_border</v-icon>
            </v-btn>
          </template>
          <span>Mes favoris</span>
        </v-tooltip>
      </v-layout>


      <!-- 2ème ligne pour mobile -->
      <v-layout row slot="extension" class="hidden-md-and-up">

        <!-- champ de recherche pour mobile -->
        <v-flex xs10 sm8 offset-xs1 offset-sm2>
          <v-text-field
            placeholder="Recherchez un produit"
            color="info"
            autofocus
            v-model.trim="inputSearch"
            class="raleway-font"
          ></v-text-field>
        </v-flex>
        <v-btn flat round icon outline class="primary--text hidden-md-and-up">
          <a :href="`/recherche/${this.inputSearch}`"><v-icon color="primary">search</v-icon></a>
        </v-btn>

      </v-layout>


      <!-- 2ème ligne pour ordi : menu de navigation -->
      <v-layout row slot="extension" class="secondary hidden-sm-and-down">

        <!-- menu toutes les boutiques -->
        <v-menu open-on-hover down offset-y>
          <template v-slot:activator="{ on }">
            <v-btn flat class="text-capitalize info--text fjalla-font" v-on="on">
              Toutes mes boutiques
            </v-btn>
          </template>
          <v-list>
            <v-list-tile v-for="category in $store.state.shopCategories" :key="category._id">
            <v-list-tile-content>
              <a :href="`/commerces/${category.slug}`">
                <v-list-tile-title class="info--text raleway-font">{{ category.name }}</v-list-tile-title>
              </a>
            </v-list-tile-content>
          </v-list-tile>
          </v-list>
        </v-menu>

        <v-divider inset vertical></v-divider>

        <v-spacer></v-spacer>
        
        <!-- menu des catégories et sous-catégories de produits -->
        <v-menu offset-y open-on-hover v-for="productCategory in $store.state.productCategories" :key="productCategory._id">
          <v-btn outline slot="activator" class="text-capitalize info--text fredoka-font">
            <a class="info--text" :href="`/produits/${productCategory.slug}`">{{ productCategory.name }}</a>
          </v-btn>
          <v-list>
            <v-list-tile v-for="subcategory in productCategory.subcategories" :key="subcategory.slug">
              <v-list-tile-content>
                  <v-list-tile-title class="info--text raleway-font"><a :href="`/produits/${productCategory.slug}/${subcategory.slug}`">{{ subcategory.name }}</a></v-list-tile-title>
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
    export default {
        name: 'Header',
        data: function() {
          return {
            inputSearch: '',
            drawer: false
          }
        },
        methods: {
          //Méthode du champ de recherche qui amène à la page des résultats et qui vide le champ
          sendSearch: function() {
            this.$router.push(`/produits/boulangerie/${this.inputSearch}`)
          }
        }
    }
</script>

<style scoped>
  .border-text {
    text-shadow: -1px 0 #4c191b, 0 1px #4c191b, 1px 0 #4c191b, 0 -1px #4c191b;
  }
</style>
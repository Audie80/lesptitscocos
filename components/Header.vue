<template>
<!-- Header -->
  <nav>

    <v-toolbar dense extended app class="white">

      <!-- Première ligne -->
      <v-layout align-center justify-center row wrap mt-1>

        <!-- bouton d'activation du menu pour mobiles -->
        <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>

        <!-- nous situer -->
        <v-btn flat round icon small outline class="hidden-sm-and-down">
          <a href="/#googleMap"><v-icon small color="info">place</v-icon></a>
        </v-btn>   

        <!-- champ de recherche -->
        <v-flex xs2 mt-2 ml-2>
          <v-text-field
            placeholder="Recherchez un produit"
            prepend-inner-icon="search"
            background-color="secondary"
            color="info"
            autofocus
            v-model.trim="inputSearch"
            @click:prepend-inner="sendSearch"
          ></v-text-field>
        </v-flex>
        
        <v-spacer></v-spacer>

        <!-- titre -->
        <v-flex xs4 text-xs-center>
          <v-toolbar-title>
            <nuxt-link to="/">
              <span class="info--text text-uppercase display-2 font-weight-black">Ty Drive</span>
            </nuxt-link>
          </v-toolbar-title>
        </v-flex>
        
        <v-spacer></v-spacer>

        <!-- espace client -->
        <v-btn small round outline class="secondary--text text-capitalize hidden-sm-and-down">
          <v-icon small left>account_circle</v-icon>
          <span>Connexion</span>
        </v-btn>
        <v-btn small round outline class="secondary--text text-capitalize hidden-sm-and-down">
          <v-icon small left>shopping_cart</v-icon>
          <span>Panier</span>
        </v-btn>   
        <v-btn flat round icon small outline class="hidden-sm-and-down">
          <v-icon small color="info">favorite_border</v-icon>
        </v-btn>

      </v-layout>


      <!-- 2ème ligne : menu de navigation -->
      <template v-slot:extension>

        <v-layout class="primary hidden-sm-and-down">

          <!-- menu toutes les boutiques -->
          <v-menu open-on-hover down offset-y>
            <template v-slot:activator="{ on }">
              <v-btn flat class="text-capitalize info--text" color="primary" v-on="on">
                Toutes mes boutiques
              </v-btn>
            </template>

            <v-list>
              <v-list-tile
                v-for="item in menu"
                :key="item.title"
                :to="item.link"
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-divider class="mx-3" inset vertical></v-divider>

          <v-spacer></v-spacer>
          
          <!-- menu des catégories et sous-catégories de produits -->
          <v-menu offset-y open-on-hover class="hidden-sm-and-down">
            <v-btn slot="activator" class="text-capitalize white--text" color="primary" v-for="item in menu" :key="item.title" :to="item.link">
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
      </template>
    
    </v-toolbar>

    <!-- menu pour mobiles -->
    <v-navigation-drawer app v-model="drawer">
      
      <v-list>

        <!-- menu toutes les boutiques -->
          <v-menu open-on-hover down offset-y>
            <template v-slot:activator="{ on }">
              <v-btn flat class="text-capitalize info--text" color="primary" v-on="on">
                Toutes mes boutiques
              </v-btn>
            </template>

            <v-list>
              <v-list-tile
                v-for="item in menu"
                :key="item.title"
                :to="item.link"
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        
        <!-- menu des catégories et sous-catégories de produits -->
        <v-list-tile v-for="item in menu" :key="item.title">
          <v-list-tile-content>
            <v-list-tile-title>
              <!-- A FAIRE : ajouter une boucle pour les sous-catégories -->
              <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- espace client -->
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Connexion
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon >shopping_cart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Panier
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>favorite_border</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Favoris
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

  </nav>
</template>

<script>
    export default {
        name: 'Header',
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

</style>

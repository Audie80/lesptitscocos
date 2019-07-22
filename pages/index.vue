<!-- la page d'accueil index.vue utilise le layout default.vue -->
<template>
  <v-container fluid text-xs-center>
    <v-layout row wrap>

      <!-- Bandeau de titre -->
      <v-flex xs12>
        <v-img :src=bandeauImg aspect-ratio=4>
          <br><br>
          <h1 class="white--text text-uppercase display-2 font-weight-black">Ty Drive</h1>
          <h2 class="white--text headline font-weight-bold">Mes commerces de proximité</h2>
        </v-img>
      </v-flex>
        
      <!-- Barre de séparation -->
      <v-flex xs4 offset-xs4 my-2>
        <v-sheet color="primary" height="5px"></v-sheet>
      </v-flex>

      <!-- Mode d'emploi -->
      <v-flex xs10 offset-xs1>
        <h2 class="info--text display-1 font-weight-bold">Ty Drive ça marche comment ?</h2>
        <v-layout align-content-space-between justify-space-around fill-height row wrap my-4>
          <v-flex xs3 align-center>
            <span class="info--text headline font-weight-bold">1.</span>
            <span class="info--text body-1"> Connectez-vous sur le compte Ty Drive et sélectionnez les produits souhaités.</span>
            <v-img :src=groceriesImg height="150px" width="150px" style="margin: auto;"></v-img>
          </v-flex>

          <v-flex xs3>
            <v-img :src=debitCardImg height="150px" width="150px" style="margin: auto;"></v-img>
            <span class="secondary--text headline font-weight-bold">2.</span>
            <span class="secondary--text body-1"> Connectez-vous sur le compte Ty Drive et sélectionnez les produits souhaités.</span>
          </v-flex>

          <v-flex xs3>
            <span class="primary--text headline font-weight-bold">3.</span>
            <span class="primary--text body-1"> Connectez-vous sur le compte Ty Drive et sélectionnez les produits souhaités.</span>
            <v-img :src=deliveryTruckImg height="150px" width="150px" style="margin: auto;"></v-img>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Barre de séparation -->
      <v-flex xs4 offset-xs4 my-2>
        <v-sheet color="secondary" height="5px"></v-sheet>
      </v-flex>

      <!-- Catégories de commerces -->
      <v-flex xs10 offset-xs1>
        <h2 class="info--text display-1 font-weight-bold">Nos Ty commerces</h2>
        <v-layout align-content-space-between justify-space-around fill-height row wrap my-4>
          <v-flex xs3>
            <nuxt-link class="button--primary" to="/commerces/ma_boulangerie">
              ma Boulangerie
            </nuxt-link>
          </v-flex>

          <v-flex xs3>
            <nuxt-link class="button--primary" to="/commerces/ma_boucherie">
              ma Boucherie
            </nuxt-link>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Barre de séparation -->
      <v-flex xs4 offset-xs4 my-2>
        <v-sheet color="info" height="5px"></v-sheet>
      </v-flex>

      <!-- Valeurs -->
      <v-flex xs10 offset-xs1>
        <h2 class="info--text display-1 font-weight-bold">Nos valeurs</h2>
        <v-layout align-content-space-between justify-space-around fill-height row wrap my-4>
          <v-flex xs3>
            <v-img :src=holdingHandsImg height="150px" width="150px" style="margin: auto;"></v-img>
            <span class="primary--text body-1">Favoriser l'économie locale en développant les petits commerces.</span>
          </v-flex>

          <v-flex xs3>
            <v-img :src=greenEarthImg height="150px" width="150px" style="margin: auto;"></v-img>
            <span class="secondary--text body-1">Des valeurs et une démarche écologique.</span>
          </v-flex>

          <v-flex xs3>
            <v-img :src=groceriesNbImg height="150px" width="150px" style="margin: auto;"></v-img>
            <span class="info--text body-1">Des produits frais et disponibles sous 48h.</span>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Barre de séparation -->
      <v-flex xs4 offset-xs4 my-2>
        <v-sheet color="primary" height="5px"></v-sheet>
      </v-flex>

      <!-- Carte GoogleMap -->
      <v-flex xs12 id="googleMap">
        <h2 class="info--text display-1 font-weight-bold">Nous situer</h2>
        <v-container>
          <v-img :src=captureMap></v-img>
        </v-container>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      bandeauImg: require('@/assets/img/vince-lee-gwT4rs_xlUA-unsplash.jpg'),
      captureMap: require('@/assets/img/capture-map.png'),
      debitCardImg: require('@/assets/img/debit-card.png'),
      deliveryTruckImg: require('@/assets/img/delivery-truck.png'),
      groceriesImg: require('@/assets/img/groceries.png'),
      groceriesNbImg: require('@/assets/img/groceries-nb.png'),
      greenEarthImg: require('@/assets/img/green-earth.png'),
      holdingHandsImg: require('@/assets/img/holding-hands.png')
    }
  }
}
</script>


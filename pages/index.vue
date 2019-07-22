<!-- la page d'accueil index.vue utilise le layout default.vue -->
<template>
  <v-container fluid text-xs-center>
    <v-layout row wrap>

      <!-- Bandeau de titre -->
      <v-flex xs12>
      <h1>Ty Drive</h1>
      <v-img :src=bandeauImg aspect-ratio=4></v-img>
      </v-flex>
        
      <!-- Mode d'emploi -->
      <v-flex xs12>
        <h2>Ty Drive ça marche comment ?</h2>
        <v-layout row wrap>
          <v-flex xs4>
            <p>1. Connectez-vous sur le compte Ty Drive et sélectionnez les produits souhaités.</p>
            <v-img :src=groceriesImg height="200px" width="200px"></v-img>
          </v-flex>

          <v-flex xs4>
            <v-img :src=debitCardImg height="200px" width="200px"></v-img>
            <p>2. Connectez-vous sur le compte Ty Drive et sélectionnez les produits souhaités.</p>
          </v-flex>

          <v-flex xs4>
            <p>3. Connectez-vous sur le compte Ty Drive et sélectionnez les produits souhaités.</p>
            <v-img :src=deliveryTruckImg height="200px" width="200px"></v-img>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Catégories de commerces -->
      <v-flex xs12>
        <h2>Nos ptits commerces</h2>
        <v-layout row wrap>
          <v-flex xs3>
            <nuxt-link class="button--amber" to="/commerces/ma_boulangerie">
              ma Boulangerie
            </nuxt-link>
          </v-flex>

          <v-flex xs3>
            <nuxt-link class="button--amber" to="/commerces/ma_boucherie">
              ma Boucherie
            </nuxt-link>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Valeurs -->
      <v-flex xs12>
        <h2>Nos valeurs</h2>
        <v-layout row wrap>
          <v-flex xs4>
            <v-img :src=holdingHandsImg height="200px" width="200px"></v-img>
            <p>Favoriser l'économie locale en développant les petits commerces.</p>
          </v-flex>

          <v-flex xs4>
            <v-img :src=greenEarthImg height="200px" width="200px"></v-img>
            <p>Des valeurs et une démarche écologique.</p>
          </v-flex>

          <v-flex xs4>
            <v-img :src=groceriesNbImg height="200px" width="200px"></v-img>
            <p>Des produits frais et disponibles sous 48h.</p>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Carte GoogleMap -->
      <v-flex xs12>
        <h2>
          Nous situer
        </h2>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      bandeauImg: require('@/assets/img/vince-lee-gwT4rs_xlUA-unsplash.jpg'),
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


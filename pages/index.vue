<!-- la page d'accueil index.vue utilise le layout default.vue -->
<template>
  <v-container fluid text-xs-center>
    <v-layout row wrap>

      <!-- Bandeau de titre -->
      <v-flex xs12>
        <v-img :src=bandeauImg aspect-ratio=4>
          <br class="primary hidden-sm-and-down"><br class="primary hidden-sm-and-down">
          <h1 class="white--text text-uppercase display-2 font-weight-black fredoka-font">Ty Drive</h1>
          <h2 class="white--text headline font-weight-bold fredoka-font">Mes commerces de proximité</h2>
          <v-flex xs10 offset-xs1 sm4 offset-sm4 mt-4>
            <p class="white--text body-1 font-weight-bold raleway-font">Venez faire vos courses sur TY drive, le drive local 100% commerçant. Faire ses courses sur Ty drive c'est la certitude de consommer local et frais tous les jours.</p>
          </v-flex>
        </v-img>
      </v-flex>
        
      <!-- Barre de séparation -->
      <v-flex xs4 offset-xs4 my-2>
        <v-sheet color="primary" height="5px"></v-sheet>
      </v-flex>

      <!-- Mode d'emploi -->
      <v-flex xs10 offset-xs1 md8 offset-md2 mb-3>
        <v-layout justify-space-between fill-height row wrap>
          <v-flex xs12 mt-1 mb-3>
            <h2 class="info--text display-1 font-weight-bold fredoka-font">Ty Drive ça marche comment ?</h2>
          </v-flex>
          <v-flex xs12 sm3 mb-1>
            <v-layout align-center row wrap>
              <v-flex xs6 sm12>
                <span class="info--text headline font-weight-bold">1.</span>
                <span class="info--text body-1"> Connectez-vous sur votre compte Ty Drive et sélectionnez les produits souhaités.</span>
              </v-flex>
              <v-flex xs6 sm12>
                <v-img :src=groceriesImg max-height="120px" max-width="120px" style="margin: auto;"></v-img>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm3 mb-1>
            <v-layout align-center row wrap>
              <v-flex xs6 sm12>
                <v-img :src=debitCardImg max-height="120px" max-width="120px" style="margin: auto;"></v-img>
              </v-flex>
              <v-flex xs6 sm12>
                <span class="secondary--text headline font-weight-bold">2.</span>
                <span class="secondary--text body-1"> Validez votre panier, une fois payé vous pourrez le récupérer d'ici 24h.</span>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm3>
            <v-layout align-center row wrap>
              <v-flex xs6 sm12>
                <span class="primary--text headline font-weight-bold">3.</span>
                <span class="primary--text body-1"> Collectez vos produits directement au centre-ville de Brest et vous voilà ! Vous n'avez plus qu'à vous régaler avec des produits frais et locaux !</span>
              </v-flex>
              <v-flex xs6 sm12>
                <v-img :src=deliveryTruckImg max-height="120px" max-width="120px" style="margin: auto;"></v-img>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Barre de séparation -->
      <v-flex xs4 offset-xs4 my-2>
        <v-sheet color="secondary" height="5px"></v-sheet>
      </v-flex>

      <!-- Catégories de commerces -->
      <v-flex xs10 offset-xs1 md8 offset-md2 mb-3>
        <h2 class="info--text display-1 font-weight-bold mt-1 mb-3 fredoka-font">Nos Ty commerces</h2>
        <v-layout justify-space-between fill-height row wrap>
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
      <v-flex xs10 offset-xs1 md8 offset-md2 mb-3>
        <v-layout justify-space-between fill-height row wrap>
          <v-flex xs12 mt-1 mb-3>
            <h2 class="info--text display-1 font-weight-bold fredoka-font">Nos valeurs</h2>
          </v-flex>
          <v-flex xs12 sm3 mb-1>
            <v-layout align-center row wrap>
              <v-flex xs6 sm12>
                <v-img :src=holdingHandsImg max-height="120px" max-width="120px" style="margin: auto;"></v-img>
              </v-flex>
              <v-flex xs6 sm12>
                <span class="primary--text body-1">Favoriser le circuit court et devenir un acteur relais des commerçants et producteurs locaux.</span>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm3 mb-1>
            <v-layout align-center row wrap>
              <v-flex xs6 sm12>
                <v-img :src=greenEarthImg max-height="120px" max-width="120px" style="margin: auto;"></v-img>
              </v-flex>
              <v-flex xs6 sm12>
                <span class="secondary--text body-1">Adopter une démarche plus respectueuse de l'environnement et créer du lien social au coeur de nos villes.</span>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm3 mb-1>
            <v-layout align-center row wrap>
              <v-flex xs6 sm12>
                <v-img :src=groceriesNbImg max-height="120px" max-width="120px" style="margin: auto;"></v-img>
              </v-flex>
              <v-flex xs6 sm12>
                <span class="info--text body-1">L'assurance de consommer des produits frais et locaux respectant un cahier des charges exigeant.</span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Barre de séparation -->
      <v-flex xs4 offset-xs4 my-2>
        <v-sheet color="primary" height="5px"></v-sheet>
      </v-flex>

      <!-- Carte GoogleMap -->
      <v-flex xs12 id="googleMap">
        <h2 class="info--text display-1 font-weight-bold mt-1 fredoka-font">Nous situer</h2>
        <v-container class="hidden-sm-and-down">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.594006765768!2d-4.462991984341553!3d48.40673937924581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816bbcc9ad2ddf3%3A0x750be5e6becf5baf!2sRue+de+Paris%2C+29200+Brest!5e0!3m2!1sfr!2sfr!4v1563873527762!5m2!1sfr!2sfr" width="800" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
        </v-container>
        <v-container class="hidden-md-and-up">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.594006765768!2d-4.462991984341553!3d48.40673937924581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816bbcc9ad2ddf3%3A0x750be5e6becf5baf!2sRue+de+Paris%2C+29200+Brest!5e0!3m2!1sfr!2sfr!4v1563873527762!5m2!1sfr!2sfr" frameborder="0" style="border:0" allowfullscreen></iframe>
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
      debitCardImg: require('@/assets/img/debit-card.png'),
      deliveryTruckImg: require('@/assets/img/delivery-truck.png'),
      groceriesImg: require('@/assets/img/groceries.png'),
      groceriesNbImg: require('@/assets/img/groceries-nb.png'),
      greenEarthImg: require('@/assets/img/green-earth.png'),
      holdingHandsImg: require('@/assets/img/holding-hands.png')
    }
  },
  // La méthode head() définit les balises méta de la page
  head () {
    return {
      title: 'TY drive - Le drive local 100% commerçants brestois',
      meta: [
        // hid est utiliser comme identifiant unique. N'utilisez pas `vmid` car ça ne fonctionnera pas
        { hid: 'accueil', name: 'accueil', content: 'Venez faire vos courses sur TY drive, le drive local 100% commerçant. Faire ses courses sur Ty drive c\'est la certitude de consommer local et frais tous les jours.' }
      ]
    }
  }
}
</script>


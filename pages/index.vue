<!-- la page d'accueil index.vue utilise le layout default.vue -->
<template>
  <v-container fluid text-xs-center>
    <v-row row wrap>

      <!-- Bandeau de titre -->
      <v-col cols="12">
          <v-img :src="bandeauImg" aspect-ratio="4">
          <br class="primary hidden-sm-and-down"><br class="primary hidden-sm-and-down">
          <h1 class="success--text text-uppercase display-2 font-weight-black fredoka-font border-text">Ty Drive</h1>
          <h2 class="success--text headline font-weight-bold fredoka-font border-text">Mes commerces de proximité</h2>
          <v-col cols="10" offset="1" sm="4" offset-sm="4" mt-4>
            <p class="success--text body-1 font-weight-bold raleway-font border-text">Venez faire vos courses sur TY drive, le drive local 100% commerçant. Faire ses courses sur Ty drive c'est la certitude de consommer local et frais tous les jours.</p>
          </v-col>
        </v-img>
      </v-col>
        
      <!-- Barre de séparation -->
      <v-col cols="4" offset="4" my-2>
        <v-sheet color="accent" height="5px"></v-sheet>
      </v-col>

      <!-- Mode d'emploi -->
      <v-col cols="10" offset="1" md="8" offset-md="2" mb-3>
        <v-row justify-space-between fill-height row wrap>
          <v-col cols="12" mt-1 mb-3>
            <h2 class="primary--text display-1 font-weight-bold fredoka-font">Ty Drive ça marche comment ?</h2>
          </v-col>
          <v-col cols="12" sm="3" mb-1>
            <v-row align-center row wrap>
              <v-col cols="6" sm="12">
                <span class="info--text headline font-weight-bold">1.</span>
                <span class="info--text body-1"> Connectez-vous sur votre compte Ty Drive et sélectionnez les produits souhaités.</span>
              </v-col>
              <v-col cols="6" sm="12">
                <v-img :src=groceriesImg max-height="120px" max-width="120px" style="margin: auto;"></v-img>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" sm="3" mb-1>
            <v-row align-center row wrap>
              <v-col cols="6" sm="12">
                <v-img :src="debitCardImg" max-height="120px" max-width="120px" style="margin: auto;"></v-img>
              </v-col>
              <v-col cols="6" sm="12">
                <span class="info--text body-1"> Validez votre panier, une fois payé vous pourrez le récupérer d'ici 24h.</span>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" sm="3">
            <v-row align-center row wrap>
              <v-col cols="6" sm="12">
                <span class="info--text headline font-weight-bold">3.</span>
                <span class="info--text body-1"> Collectez vos produits directement au centre-ville de Brest et vous voilà ! Vous n'avez plus qu'à vous régaler avec des produits frais et locaux !</span>
              </v-col>
              <v-col cols="6" sm="12">
                <v-img :src=deliveryTruckImg max-height="120px" max-width="120px" style="margin: auto;"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <!-- Barre de séparation -->
      <v-col cols="4" offset="4" my-2>
        <v-sheet color="accent" height="5px"></v-sheet>
      </v-col>

      <!-- Catégories de commerces -->
      <v-col cols="10" offset="1" md="8" offset-md="2" mb-3>
        <h2 class="primary--text display-1 font-weight-bold mt-1 mb-3 fredoka-font">Nos Ty commerces</h2>
        <v-row justify-space-between fill-height row wrap>
          <v-col cols="3">
            <a href="/commerces/boulangerie">
              ma Boulangerie
            </a>
          </v-col>

          <v-col cols="3">
            <a href="/commerces/boucherie">
              ma Boucherie
            </a>
          </v-col>
        </v-row>
      </v-col>

      <!-- Barre de séparation -->
      <v-col cols="4" offset="4" my-2>
        <v-sheet color="accent" height="5px"></v-sheet>
      </v-col>

      <!-- Valeurs -->
      <v-col cols="10" offset="1" md="8" offset-md="2" mb-3>
        <v-row justify-space-between fill-height row wrap>
          <v-col cols="12" mt-1 mb-3>
            <h2 class="primary--text display-1 font-weight-bold fredoka-font">Nos valeurs</h2>
          </v-col>
          <v-col cols="12" sm="3" mb-1>
            <v-row align-center row wrap>
              <v-col cols="6" sm="12">
                <v-img :src=holdingHandsImg max-height="120px" max-width="120px" style="margin: auto;"></v-img>
              </v-col>
              <v-col cols="6" sm="12">
                <span class="info--text body-1">Favoriser le circuit court et devenir un acteur relais des commerçants et producteurs locaux.</span>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" sm="3" mb-1>
            <v-row align-center row wrap>
              <v-col cols="6" sm="12">
                <v-img :src=greenEarthImg max-height="120px" max-width="120px" style="margin: auto;"></v-img>
              </v-col>
              <v-col cols="6" sm="12">
                <span class="primary--text body-1">Adopter une démarche plus respectueuse de l'environnement et créer du lien social au coeur de nos villes.</span>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" sm="3" mb-1>
            <v-row align-center row wrap>
              <v-col cols="6" sm="12">
                <v-img :src=groceriesNbImg max-height="120px" max-width="120px" style="margin: auto;"></v-img>
              </v-col>
              <v-col cols="6" sm="12">
                <span class="info--text body-1">L'assurance de consommer des produits frais et locaux respectant un cahier des charges exigeant.</span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <!-- Barre de séparation -->
      <v-col cols="4" offset="4" my-2>
        <v-sheet color="accent" height="5px"></v-sheet>
      </v-col>

      <!-- Carte GoogleMap -->
      <v-col cols="12" id="googleMap">
        <h2 class="primary--text display-1 font-weight-bold mt-1 fredoka-font">Nous situer</h2>
        <v-container class="hidden-sm-and-down">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.594006765768!2d-4.462991984341553!3d48.40673937924581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816bbcc9ad2ddf3%3A0x750be5e6becf5baf!2sRue+de+Paris%2C+29200+Brest!5e0!3m2!1sfr!2sfr!4v1563873527762!5m2!1sfr!2sfr" width="800" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
        </v-container>
        <v-container class="hidden-md-and-up">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.594006765768!2d-4.462991984341553!3d48.40673937924581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816bbcc9ad2ddf3%3A0x750be5e6becf5baf!2sRue+de+Paris%2C+29200+Brest!5e0!3m2!1sfr!2sfr!4v1563873527762!5m2!1sfr!2sfr" frameborder="0" style="border:0" allowfullscreen></iframe>
        </v-container>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import bandeauImg from '@/assets/img/vince-lee-gwT4rs_xlUA-unsplash.jpg'
import debitCardImg from '@/assets/img/debit-card.png'
import deliveryTruckImg from '@/assets/img/delivery-truck.png'
import groceriesImg from '@/assets/img/groceries.png'
import groceriesNbImg from '@/assets/img/groceries-nb.png'
import greenEarthImg from '@/assets/img/green-earth.png'
import holdingHandsImg from '@/assets/img/holding-hands.png'

useHead({
  title: 'TY drive - Le drive local 100% commerçants brestois',
  meta: [
    { name: 'accueil', content: "Venez faire vos courses sur TY drive, le drive local 100% commerçant. Faire ses courses sur Ty drive c'est la certitude de consommer local et frais tous les jours." }
  ]
})
</script>

<style scoped>
  .border-text {
    text-shadow: -1px 0 #4c191b, 0 1px #4c191b, 1px 0 #4c191b, 0 -1px #4c191b;
  }
</style>
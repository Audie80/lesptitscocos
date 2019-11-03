<!-- Page listant les commerces par catégorie  + Page qui affiche ses enfants _commerce et _product -->
<template>
    <div>
        <!-- Affichage de la page parent _category.vue -->
        <div
        v-if="$route.name=='commerces-shops'">

            <!-- Liste des commerces -->
            <v-container fluid grid-list-xl>

                <!-- Titre de la catégorie -->
                <h2 class="info--text">{{ categoryInfo.name }}</h2>

                <!-- Affichage des cartes commerces -->
                <v-layout row wrap>
                    <v-flex
                    v-for="shop of shops" :key="shop._id" xs12 sm6 md4 lg3> <!-- Boucle qui parcourt toutes les cartes commerces / xs12 sm6 md4 lg3 change le nombre de cards affichées en largeur selon le responsive -->
                        <v-card>
                            <v-card-title class="info--text" style="height: 66px; padding-top: 2%;">
                                <v-layout row>
                                    <v-flex xs9>
                                        <h3>{{ shop.name }}</h3>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <v-btn outline color="primary" icon v-on="on" v-on:click="shop.favorite = !shop.favorite">
                                                    <v-icon v-if="shop.favorite == false">favorite_border</v-icon>
                                                    <v-icon v-if="shop.favorite == true">favorite</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Ajouter à mes favoris</span>
                                        </v-tooltip>
                                    </v-flex>
                                </v-layout>  
                            </v-card-title>
                            <v-img :src="shop.img" :alt="shop.name" aspect-ratio="2.75"></v-img>
                            <v-card-text style="height: 150px; overflow-Y: auto;">
                                <span class="caption primary--text">Quartier {{ shop.district }} - {{ shop.city }}</span>
                                <br>
                                <p style="margin-top: 8px;">{{ shop.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn primary class="text-capitalize fredoka-font" color="primary" :href="`/commerces/${categoryInfo.slug}/${shop.slug}`">Voir la boutique</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>

                <!-- Contenu descriptif de la catégorie -->
                <p>{{ categoryInfo.description }}</p>

            </v-container>
        </div>

        <!-- Affichage de la page enfant, quand on clique sur un commerce > voir le dossier _commerce -->
        <div
        v-else-if="$route.name=='commerces-shops-shopid' || $route.name=='commerces-shops-shopid-productid'"> <!-- 2ème condition indispensable pour afficher l'enfant _product dans la page _commerce -->
            <nuxt-child  :key="$route.params.shops" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListShops',
        // Récupère les commerces par catégorie et les infos de la catégorie de la BDD
        async asyncData({ $axios, params }) {
            let shops = await $axios.$get(`commerces/${params.shops}`)
            let categoryInfo = await $axios.$get(`categories/${params.shops}`)
            return { shops, categoryInfo }
        }
    }
</script>
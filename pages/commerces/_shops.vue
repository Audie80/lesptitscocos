<!-- Page listant les commerces par catégorie  + Page qui affiche ses enfants _commerce et _product -->
<template>
    <div>
        <!-- Affichage de la page parent _category.vue -->
        <div
        v-if="$route.name=='commerces-shops'">

            <!-- Liste des commerces -->
            <v-container fluid grid-list-xl>

                <!-- Titre de la catégorie -->
                <h2>{{ categoryInfo.name }}</h2>

                <!-- Affichage des cartes commerces -->
                <v-layout row wrap>
                    <v-flex
                    v-for="shop of shops" :key="shop._id" xs12 sm6 md4 lg3> <!-- Boucle qui parcourt toutes les cartes commerces / xs12 sm6 md4 lg3 change le nombre de cards affichées en largeur selon le responsive -->
                        <v-card>
                            <v-card-title style="height: 60px; padding-top: 2%;">
                                <h3>{{ shop.name }}</h3>
                                <v-spacer></v-spacer>
                                <!-- icône favori, affichage lié à la BDD, data à true ou à false -->
                                <!-- <v-btn flat color="orange" icon @click="shop.favorite = !shop.favorite">
                                    <v-icon v-if="!shop.favorite">favorite_border</v-icon>
                                    <v-icon v-if="shop.favorite">favorite</v-icon>
                                </v-btn> -->
                            </v-card-title>
                            <v-img :src="shop.img" :alt="shop.name" aspect-ratio="2.75"></v-img>
                            <v-card-text>
                                <!-- A FAIRE tableau à parcourir pour afficher les catégories du commerce (ex: boulangerie ET pâtisserie) -->
                                <span class="caption">{{ shop.category.name }} - {{ shop.district }} - {{ shop.city }}</span>
                            </v-card-text>
                            <v-card-text style="height: 100px; overflow-Y: auto;">
                                {{ shop.resume }}
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <!-- lien vers la page listant les produits du commerce, fichier pages\commerces\_category\_commerce -->
                                <v-btn flat color="orange" :href="category + '/' + shop.slug">Voir la boutique</v-btn>
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
        },
        data: function() {
            return {
                category: this.$route.params.shops,
            }
        }
    }
</script>
<!-- Page listant les résultats de la recherche -->
<template>
    <div>

            <!-- Liste des produits -->
            <v-container fluid grid-list-xl v-if="$route.name=='recherche-recherche'">
            
                <!-- Titre de la recherche -->
                <div>
                    <span class="caption info--text">Vous avez recherché : </span>
                    <h2 class="info--text d-inline">{{ search }}</h2>
                </div>

                <!-- Message si recherche vide -->
                <p class="info--text" v-if="products==''">Votre recherche n'a donné aucun résultat</p>

                <!-- Affichage des cartes produits -->
                <v-layout row wrap>
                    <v-flex
                    v-for="product of products" :key="product._id" xs12 sm6 md4 lg3> <!-- Boucle qui parcourt toutes les cartes produits / xs12 sm6 md4 lg3 change le nombre de cards affichées en largeur selon le responsive -->
                        <v-card>
                            <v-card-title class="info--text" style="height: 66px; padding-top: 2%;">
                                <v-layout row>
                                    <v-flex xs9>
                                        <h3>{{ product.name }}</h3>
                                    </v-flex>
                                    <v-flex xs3>
                                        <!-- icône favori, affichage lié à la BDD à faire, data à true ou à false -->
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <v-btn outline color="primary" icon v-on="on" v-on:click="product.favorite = !product.favorite">
                                                    <v-icon v-if="product.favorite == false">favorite_border</v-icon>
                                                    <v-icon v-if="product.favorite == true">favorite</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Ajouter à mes favoris</span>
                                        </v-tooltip>
                                    </v-flex>
                                </v-layout>
                            </v-card-title>
                            <v-img :src="product.img" :alt="product.name" aspect-ratio="2.25" mx-2></v-img>
                            <v-card-text class="info--text" style="height: 150px; overflow-Y: auto; padding-top: 2%;">
                                <a :href="`/commerces/${category}/${product.shop.slug}`" v-if="product.shop"><span class="caption">Elaboré avec amour par : {{ product.shop.name }}</span></a>
                                <br>
                                <p style="margin-top: 8px;">{{ product.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn primary class="text-capitalize fredoka-font" color="primary" :href="`/produit/${product.slug}`">fiche produit</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn outline round color="primary">{{ product.price }} €</v-btn>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn outline color="primary" icon v-on="on">
                                            <v-icon>shopping_cart</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Ajouter au panier</span>
                                </v-tooltip>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>

            </v-container>
        </div>
</template>

<script>
    export default {
        name: 'ListProductsBySearch',
        // Récupère les produits de la BDD grâce au champ de recherche
        async asyncData({ $axios, params }) {
            let products = await $axios.$get(`recherche/${params.recherche}`)
            return { products }
        },
        data: function() {
            return {
                search: this.$route.params.recherche
            }
        }
    }
</script>
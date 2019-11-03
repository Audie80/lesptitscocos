<!-- Page listant les produits par sous-catégorie -->
<template>
    <div>
        <!-- Affichage de la page parent _subcategory.vue -->
        <div
        v-if="$route.name=='produits-products-subcategory'">

            <!-- Liste des produits -->
            <v-container fluid grid-list-xl>

                <!-- Titre de la catégorie -->
                <div>
                    <span class="caption info--text">Vous êtes ici à : </span>
                    <a :href="`/produits/${category}`"><h3 class="info--text d-inline">{{ products[0].category.name }}</h3></a>
                    <span class="info--text"> / </span>
                    <a :href="`/produits/${category}/${subCategory}`"><h2 class="info--text d-inline">{{ products[0].category.subcategory.name }}</h2></a>
                </div>

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
    </div>
</template>

<script>
    export default {
        name: 'ListProductsBySubCategory',
        // Récupère les produits par sous-catégorie de la BDD
        async asyncData({ $axios, params }) {
            let products = await $axios.$get(`produits/${params.category}/${params.subcategory}`)
            return { products }
        },
        data: function() {
            return {
                category: this.$route.params.products,
                subCategory: this.$route.params.subcategory
            }
        }
    }
</script>
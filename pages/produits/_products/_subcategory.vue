<!-- Page listant les produits par sous-catégorie -->
<template>
    <div>
        <!-- Affichage de la page parent _subcategory.vue -->
        <div
        v-if="$route.name=='produits-products-subcategory'">

            <!-- Liste des produits -->
            <v-container fluid grid-list-xl>

                <!-- Titre de la catégorie -->
                <h2>{{ products[0].category.subcategory.name }}</h2>

                <!-- Affichage des cartes produits -->
                <v-layout row wrap>
                    <v-flex
                    v-for="product of products" :key="product._id" xs12 sm6 md4 lg3> <!-- Boucle qui parcourt toutes les cartes produits / xs12 sm6 md4 lg3 change le nombre de cards affichées en largeur selon le responsive -->
                        <v-card>
                            <v-card-title style="height: 60px; padding-top: 2%;">
                                <h3>{{ product.name }}</h3>
                                <v-spacer></v-spacer>
                                <!-- icône favori, affichage lié à la BDD, data à true ou à false -->
                                <v-btn flat color="orange" icon @click="product.favorite = !product.favorite">
                                    <v-icon v-if="!product.favorite">favorite_border</v-icon>
                                    <v-icon v-if="product.favorite">favorite</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-img :src="product.img" :alt="product.name" aspect-ratio="2.75"></v-img>
                            <v-card-text style="height: 100px; overflow-Y: auto;">
                                <span>{{ product.description }}</span>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn flat color="orange" :href="'/produit/' + product.slug">fiche produit</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn flat color="orange">
                                    <v-icon>shopping_cart</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>

            </v-container>
        </div>

        <!-- Affichage de la page enfant, quand on clique sur un produit > voir le dossier _subcategory -->
        <!-- <div
        v-else-if="$route.name=='produits-products-subcategory-productid'">
            <nuxt-child :key="$route.params.productid" />
        </div> -->
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
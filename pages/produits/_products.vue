<!-- Page listant les produits par catégorie -->
<template>
    <div>
        <!-- Affichage de la page parent _products.vue -->
        <div
        v-if="$route.name=='produits-products'">

            <!-- Liste des produits -->
            <v-container fluid grid-list-xl>

                <!-- Titre de la catégorie -->
                <h2 class="info--text">{{ products[0].category.name }}</h2>

                <!-- Affichage des cartes produits -->
                <v-layout row wrap>
                    <v-flex
                    v-for="product of products" :key="product._id" xs12 sm6 md4 lg3> <!-- Boucle qui parcourt toutes les cartes produits / xs12 sm6 md4 lg3 change le nombre de cards affichées en largeur selon le responsive -->
                        <v-card color="success">
                            <v-card-title class="info--text" style="height: 60px; padding-top: 2%;">
                                <h3>{{ product.name }}</h3>
                                <v-spacer></v-spacer>
                                <!-- icône favori, affichage lié à la BDD, data à true ou à false -->
                                <v-btn outline color="primary" icon>
                                    <v-icon v-if="product.favorite !== []">favorite_border</v-icon>
                                    <v-icon v-if="product.favorite == []">favorite</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-img :src="product.img" :alt="product.name" aspect-ratio="2.25" mx-2></v-img>
                            <v-card-text class="info--text" style="height: 100px; overflow-Y: auto;" v-if="product.shop">
                                <span>Provenance : {{ product.shop.name }}</span>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn outline class="text-capitalize fredoka-font" color="primary" :href="`/produit/${product.slug}`">fiche produit</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn round color="primary">{{ product.price }} €</v-btn>
                                <v-btn outline color="primary" icon>
                                    <v-icon>shopping_cart</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>

            </v-container>
        </div>

        <!-- Affichage de la page enfant, quand on clique sur une sous-catégorie > voir le dossier _products -->
        <div
        v-else-if="$route.name=='produits-products-subcategory'">
            <nuxt-child  :key="$route.params.products" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListProductsByCategory',
        // Récupère les produits par catégorie de la BDD
        async asyncData({ $axios, params }) {
            let products = await $axios.$get(`produits/${params.products}`)
            return { products }
        },
        data: function() {
            return {
                category: this.$route.params.products
            }
        }
    }
</script>
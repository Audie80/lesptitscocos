<!-- Page listant les produits par catégorie -->
<template>
    <div>
        <!-- Affichage de la page parent _products.vue -->
        <div
        v-if="$route.name=='produits-products'">

            <!-- Liste des produits -->
            <v-container fluid grid-list-xl>

                <!-- Titre de la catégorie -->
                <div>
                    <span class="caption info--text">Vous êtes ici à : </span>
                    <a :href="`/produits/${category}`"><h2 class="info--text d-inline">{{ products[0].category.name }}</h2></a>
                </div>

                <!-- Affichage des cartes produits -->
                <v-row row wrap>
                    <v-col v-for="product of products" :key="product._id" cols="12" sm="6" md="4" lg="3"> <!-- Boucle qui parcourt toutes les cartes produits / xs12 sm6 md4 lg3 change le nombre de cards affichées en largeur selon le responsive -->
                        <v-card>
                            <v-card-title class="info--text" style="height: 66px; padding-top: 2%;">
                                <v-row row>
                                    <v-col cols="9">
                                        <h3>{{ product.name }}</h3>
                                    </v-col>
                                    <v-col cols="3">
                                        <!-- icône favori, affichage lié à la BDD à faire, data à true ou à false -->
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{ props }">
                                                        <v-btn outline color="primary" icon v-bind="props" v-on:click="product.favorite = !product.favorite">
                                                    <v-icon v-if="product.favorite == false">favorite_border</v-icon>
                                                    <v-icon v-if="product.favorite == true">favorite</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Ajouter à mes favoris</span>
                                        </v-tooltip>
                                    </v-col>
                                </v-row>
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
                                    <template v-slot:activator="{ props }">
                                        <v-btn outline color="primary" icon v-bind="props">
                                            <v-icon>shopping_cart</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Ajouter au panier</span>
                                </v-tooltip>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>

            </v-container>
        </div>

        <!-- Affichage de la page enfant, quand on clique sur une sous-catégorie > voir le dossier _products -->
        <div
        v-else-if="$route.name=='produits-products-subcategory'">
            <NuxtPage  :key="$route.params.products" />
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const { data: products } = await useAsyncData(`products-${route.params.products}`, () => $fetch(`${config.public.API_URL}produits/${route.params.products}`))
const category = route.params.products
</script>
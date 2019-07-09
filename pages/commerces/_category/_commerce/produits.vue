<template>
    <v-container fluid>
        <v-layout row wrap align-start>
            <!-- Titre de la catégorie -->
            <v-flex d-flex xs12>
                <h2>{{ commerceName }}</h2>
            </v-flex>

            <!-- Liste des commerces -->
            <v-flex d-flex xs12>
                <v-container fluid grid-list-xl>
                    <v-layout row wrap>
                        <v-flex
                        v-for="(product, index) of products" :key="index" xs12 sm6 md4 lg3> <!-- Boucle qui parcourt toutes les cartes produits / xs4 rend 3 cartes par largeur -->
                            <v-card>
                                <v-card-title style="height: 60px; padding-top: 2%;">
                                    <h3>{{ product.name }}</h3>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="orange" icon><v-icon color="orange">favorite_border</v-icon></v-btn>
                                </v-card-title>
                                <v-img :src="product.img" :alt="product.name" aspect-ratio="2.75"></v-img>
                                <v-card-text>
                                    <span class="caption">{{ category }} - {{ commerceName }}</span>
                                </v-card-text>
                                <v-card-text style="height: 100px; overflow-Y: auto;">
                                    <span>{{ product.description }}</span>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn flat color="orange" :href="'./' + product.slug">fiche produit</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="orange">ajouter au panier</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container><!--commerces-category-commerce-product-->
</template>

<script>
    export default {
        name: 'ListProductsForOneShop',
        data: function() {
            return {
                commerceName: this.$route.params.commerce,
                category: this.$route.params.category,
                products: [
                    {
                        "name": "Baguette",
                        "slug": "baguette",
                        "img": "https://staticmedia.fauchon.com/media/catalog/product/cache/1/image/480x/040ec09b1e35df139433887a97daa66f/1/0/1008690.jpg",
                        "weight": 0.3,
                        "weightPrice": 3,
                        "quantity": 10,
                        "labels": [],
                        "description": "Une merveilleuse baguette dorée et à la croûte très croustillante."
                    },
                    {
                        "name": "Croissant",
                        "slug": "croissant",
                        "img": "http://www.lesrecettesdecuisine.com/wp-content/uploads/2013/09/Croissant-PetrKratochvi.jpg",
                        "weight": 0.1,
                        "weightPrice": 9,
                        "quantity": 20,
                        "labels": [],
                        "description": "Miam !"
                    }
                ]
            }
        }
    }
</script>
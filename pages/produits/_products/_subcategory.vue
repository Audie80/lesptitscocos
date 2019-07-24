<!-- Page listant les produits par sous-catégorie -->
<template>
    <div>
        <!-- Affichage de la page parent _subcategory.vue -->
        <div
        v-if="$route.name=='produits-products-subcategory'">

            <!-- Liste des produits -->
            <v-container fluid grid-list-xl>

                <!-- Titre de la catégorie -->
                <h2>{{ productCategory.subcategories[0].name }}</h2>

                <!-- Affichage des cartes produits -->
                <v-layout row wrap>
                    <v-flex
                    v-for="(product, index) of productCategory.subcategories[0].products" :key="index" xs12 sm6 md4 lg3> <!-- Boucle qui parcourt toutes les cartes produits / xs12 sm6 md4 lg3 change le nombre de cards affichées en largeur selon le responsive -->
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
        data: function() {
            return {
                category: this.$route.params.products,
                subCategory: this.$route.params.subcategory,
                productCategory: {
                    "name": "ma Boulangerie",
                    "slug": "ma_boulangerie",
                    "content": "Nos boulangeries brestoises transmettent leur savoir-faire artisanal pour vous proposer les meilleurs pains et pâtisseries, dans le respect des producteurs locaux.",
                    "subcategories": [
                        {
                            "name": "Pains",
                            "slug": "pains",
                            "products": [
                                {
                                    "name": "Baguette",
                                    "slug": "baguette",
                                    "category": "ma Boulangerie",
                                    "subCategory": "Pains",
                                    "img": "https://staticmedia.fauchon.com/media/catalog/product/cache/1/image/480x/040ec09b1e35df139433887a97daa66f/1/0/1008690.jpg",
                                    "weight": 0.3,
                                    "weightPrice": 3,
                                    "quantity": 10,
                                    "labels": [],
                                    "description": "Une merveilleuse baguette dorée et à la croûte très croustillante.",
                                    "favorite": false
                                }
                            ]
                        },
                        {
                            "name": "Viennoiseries",
                            "slug": "viennoiseries",
                            "products": [
                                {
                                    "name": "Croissant",
                                    "slug": "croissant",
                                    "category": "ma Boulangerie",
                                    "subCategory": "Viennoiseries",
                                    "img": "http://www.lesrecettesdecuisine.com/wp-content/uploads/2013/09/Croissant-PetrKratochvi.jpg",
                                    "weight": 0.1,
                                    "weightPrice": 9,
                                    "quantity": 20,
                                    "labels": [],
                                    "description": "Miam !",
                                    "favorite": false
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>
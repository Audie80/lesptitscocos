<template>
    <v-container fluid>

        <v-layout row wrap>

            <!-- Description du commerce -->
            <v-flex d-flex xs12>
                <v-card>
                    <v-card-title>
                        <h3>{{ shop.name }}</h3>
                        <v-spacer></v-spacer>
                        <v-btn flat color="orange" icon><v-icon color="orange">favorite_border</v-icon></v-btn>
                    </v-card-title>
                    <v-img :src="shop.img" :alt="shop.name" aspect-ratio="5.75"></v-img>
                    <v-card-text>
                        <!-- A FAIRE tableau à parcourir pour afficher les catégories du commerce (ex: boulangerie ET pâtisserie) -->
                        <span class="caption">{{ shop.mainCategory }} {{ shop.othersCategories[0]}} - {{ shop.district }} - {{ shop.city }}</span>
                        <br><br>
                        <span>{{ shop.resume }}</span>
                    </v-card-text>
                </v-card>
            </v-flex>

            <!-- Liste des produits, ne s'affiche plus si on clique sur un produit en particulier -->
            <v-flex d-flex xs12
            v-if="$route.name=='commerces-category-commerce'">
                <!-- A FAIRE mettre à zéro le paddingX de ce conteneur -->
                <v-container grid-list-xl>
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
                                    <v-btn flat color="orange" :href="'./' + commerceName + '/' + product.slug">fiche produit</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="orange">ajouter au panier</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>

            <!-- Affichage de la page enfant, quand on clique sur un produit > voir le dossier _product -->
            <div
            v-else-if="$route.name=='commerces-category-commerce-product'">
                <v-flex d-flex xs12>
                    <nuxt-child :key="$route.params.product" />
                </v-flex>
            </div>

        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'ShopDescription',
        data: function() {
            return {
                commerceName: this.$route.params.commerce,
                category: this.$route.params.category,
                shop: {
                    "name": "La Fournée",
                    "slug": "la_fournee",
                    "mainCategory": "Boulangerie",
                    "slugCategory": "boulangerie",
                    "othersCategories": ["Pâtisserie"],
                    "img": "https://www.vitrines-brest.fr/images/Image/customers_images/79//57591bad74c3c.jpg",
                    "district": "Centre-ville",
                    "city": "Brest",
                    "resume": "Excellente boulangerie-pâtisserie. Tout y est travaillé avec des produits frais."
                },
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
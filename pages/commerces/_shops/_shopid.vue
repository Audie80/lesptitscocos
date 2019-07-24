<template>
    <v-container fluid grid-list-xl>

        <!-- Description du commerce -->
        <h3>{{ shop.name }}</h3>
        <!-- icône favori, affichage lié à la BDD, data à true ou à false -->
        <v-btn flat color="orange" icon @click="shop.favorite = !shop.favorite">
            <v-icon v-if="!shop.favorite">favorite_border</v-icon>
            <v-icon v-if="shop.favorite">favorite</v-icon>
        </v-btn>
        <v-img :src="shop.img" :alt="shop.name" aspect-ratio="5.75"></v-img>
        <!-- A FAIRE tableau à parcourir pour afficher les catégories du commerce (ex: boulangerie ET pâtisserie) -->
        <span class="caption">{{ shop.mainCategory }} {{ shop.othersCategories[0]}} - {{ shop.district }} - {{ shop.city }}</span>
        <br><br>
        <span>{{ shop.resume }}</span> 

        <!-- Liste des produits, ne s'affiche plus si on clique sur un produit en particulier -->
        <v-layout row wrap
        v-if="$route.name=='commerces-shops-shopid'">
            <v-flex
            v-for="(product, index) of shop.products" :key="index" xs12 sm6 md4 lg3> <!-- Boucle qui parcourt toutes les cartes produits / xs4 rend 3 cartes par largeur -->
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
                    <v-card-text>
                        <span class="caption">{{ product.category }} - {{ product.subCategory }} - {{ shop.name }}</span>
                    </v-card-text>
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

        <!-- Affichage de la page enfant, quand on clique sur un produit > voir le dossier _product -->
        <!-- <div
        v-else-if="$route.name=='commerces-shops-shopid-productid'">
            <nuxt-child :key="$route.params.productid" />
        </div> -->

    </v-container>
</template>

<script>
    export default {
        name: 'ShopDescription',
        data: function() {
            return {
                commerceName: this.$route.params.shopid,
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
                    "resume": "Excellente boulangerie-pâtisserie. Tout y est travaillé avec des produits frais.",
                    "favorite": false,
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
                        },
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
                },
            }
        }
    }
</script>
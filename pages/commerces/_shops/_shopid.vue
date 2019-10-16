<template>
    <div>

        <!-- Description du commerce -->
        <v-card>
            <v-card-title style="height: 60px;">
                <h3>{{ shop.name }}</h3>
                <v-spacer></v-spacer>
                <!-- icône favori, affichage lié à la BDD, data à true ou à false -->
                <v-btn flat color="orange" icon @click="shop.favorite = !shop.favorite">
                    <v-icon v-if="!shop.favorite">favorite_border</v-icon>
                    <v-icon v-if="shop.favorite">favorite</v-icon>
                </v-btn>
            </v-card-title>
            <v-img :src="shop.img" :alt="shop.name" aspect-ratio="5.75"></v-img>
            <span class="caption">{{ shop.category.name }} - {{ shop.district }} - {{ shop.city }}</span>
            <br><br>
            <v-card-text style="height: 100px; overflow-Y: auto;">
                <span>{{ shop.description }}</span> 
            </v-card-text>
        </v-card>

        <v-container fluid grid-list-xl>
            <!-- Liste des produits, ne s'affiche plus si on clique sur un produit en particulier -->
            <!-- <v-layout row wrap
            v-if="$route.name=='commerces-shops-shopid'">
                <v-flex
                v-for="(product, index) of shop.products" :key="index" xs12 sm6 md4 lg3> --><!-- Boucle qui parcourt toutes les cartes produits / xs4 rend 3 cartes par largeur -->
                    <!-- <v-card>
                        <v-card-title style="height: 60px; padding-top: 2%;">
                            <h3>{{ product.name }}</h3>
                            <v-spacer></v-spacer> -->
                            <!-- icône favori, affichage lié à la BDD, data à true ou à false -->
                            <!-- <v-btn flat color="orange" icon @click="product.favorite = !product.favorite">
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
            </v-layout> -->

            <!-- Affichage de la page enfant, quand on clique sur un produit > voir le dossier _product -->
            <!-- <div
            v-else-if="$route.name=='commerces-shops-shopid-productid'">
                <nuxt-child :key="$route.params.productid" />
            </div> -->

        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'ShopDescription',
        // Récupère la description du commerce de la BDD
        async asyncData({ $axios, params }) {
            let shop = await $axios.$get(`commerces/${params.category}/${params.shopid}`)
            return { shop }
        }
    }
</script>
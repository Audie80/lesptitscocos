<template>
    <div>
        <v-container fluid>

            <!-- Description du commerce -->
            <v-card>
                <v-container>
                    <v-row row wrap>
                        <v-col md="6" cols="12">
                            <v-img :src="shop.img" :alt="shop.name" aspect-ratio="1.5"></v-img>
                        </v-col>

                        <v-col md="6" cols="12">
                            <v-card-title class="info--text">
                                <h2 class="info--text">{{ shop.name }}</h2>
                                <v-spacer></v-spacer>
                                <!-- icône favori, affichage lié à la BDD à faire, data à true ou à false -->
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn outline color="primary" icon v-on="on" v-on:click="shop.favorite = !shop.favorite">
                                            <v-icon v-if="shop.favorite == false">favorite_border</v-icon>
                                            <v-icon v-if="shop.favorite == true">favorite</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Ajouter à mes favoris</span>
                                </v-tooltip>
                            </v-card-title>
                            
                            <v-card-text class="info--text">
                                <p>{{ shop.description }}</p>
                            </v-card-text>
                            <v-card-text class="info--text" style="padding-bottom: 0; padding-top: 0;">
                                <p>{{ shop.address }}</p>
                                <p>
                                    <span>{{ shop.zipcode }}</span>
                                    <span>{{ shop.city }}</span>
                                </p>
                                <p style="margin-bottom: 0;">Tel : {{ shop.tel }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn outline color="primary" icon v-on="on"
                                        v-if="shop.email">
                                            <a :href="shop.email" target="_blank"><v-icon>email</v-icon></a>
                                        </v-btn>
                                    </template>
                                    <span>E-mail</span>
                                </v-tooltip>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn outline color="primary" icon v-on="on"
                                        v-if="shop.website">
                                        <a :href="shop.website" target="_blank"><v-icon>laptop_windows</v-icon></a>
                                        </v-btn>
                                    </template>
                                    <span>Site Internet</span>
                                </v-tooltip>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn outline color="primary" icon v-on="on"
                                        v-if="shop.facebook">
                                        <a :href="shop.facebook" target="_blank"><v-icon>thumb_up_alt</v-icon></a>
                                        </v-btn>
                                    </template>
                                    <span>Facebook</span>
                                </v-tooltip>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-container>

        <!-- Liste des produits -->
        <v-container fluid grid-list-xl style="padding-top: 0;">
            <h3 class="info--text">Tous nos produits</h3>
            <v-row row wrap v-if="$route.name=='commerces-shops-shopid'">
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
                                        <template v-slot:activator="{ on }">
                                            <v-btn outline color="primary" icon v-on="on" v-on:click="product.favorite = !product.favorite">
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
                        <v-card-text class="info--text" style="height: 120px; overflow-Y: auto;">
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
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const shopKey = `shop-${route.params.shopid}`
const productsKey = `products-${route.params.shopid}`

const { data: shop } = await useAsyncData(shopKey, () => $fetch(`${config.public.API_URL}commerces/${route.params.category}/${route.params.shopid}`))
const { data: products } = await useAsyncData(productsKey, () => $fetch(`${config.public.API_URL}commerces/${route.params.category}/${route.params.shopid}/produits`))
</script>
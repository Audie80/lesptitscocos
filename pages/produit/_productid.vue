<template>
    <v-container fluid>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex md6 xs12>
                        <v-img :src="product.img" :alt="product.name"></v-img>
                    </v-flex>

                    <v-flex md6 xs12>
                        <v-card-title class="info--text">
                            <h2>{{ product.name }}</h2>
                            <v-spacer></v-spacer>
                            <!-- icône favori, affichage lié à la BDD à faire, data à true ou à false -->
                            <v-btn outline color="primary" icon v-on:click="product.favorite = !product.favorite">
                                <v-icon v-if="product.favorite == false">favorite_border</v-icon>
                                <v-icon v-if="product.favorite == true">favorite</v-icon>
                            </v-btn>
                        </v-card-title>
                        
                        <v-card-text class="info--text">
                            <a :href="`/commerces/${product.category.slug}/${product.shop.slug}`" v-if="product.shop"><span class="caption">Elaboré avec amour par : {{ product.shop.name }}</span></a>
                            <br><br>
                            <p>{{ product.description }}</p>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <div class="outlinedDiv">
                                <span class="primary--text font-weight-medium">Quantité </span>
                                <input class="inputNumber" type="number" value="1" />
                            </div>
                            <v-btn outline round color="primary">{{ product.price }} €</v-btn>
                            <v-btn outline color="primary" icon>
                                <v-icon>shopping_cart</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: 'ProductDescription',
        // Récupère la description du produit de la BDD
        async asyncData({ $axios, params }) {
            let product = await $axios.$get(`produit/${params.productid}`)
            return { product }
        }
    }
</script>

<style scoped>
    .inputNumber {
        max-width: 60px;
        padding-left: 10px;
        padding-top: 7px;
        text-align: right;
        font-size: 14px;
        font-weight: 500;
        color: #4c191b;
    }
    .outlinedDiv {
        border: 1px solid #f9a11b;
        border-radius: 28px;
        margin-right: 10px;
        height: 36px;
        padding: 0 16px;
    }
</style>
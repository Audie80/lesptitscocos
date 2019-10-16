<template>
    <v-card>
        <v-card-title style="height: 60px;">
            <h3>{{ product.name }}</h3>
            <v-spacer></v-spacer>
            <v-btn flat color="orange" icon><v-icon color="orange">favorite_border</v-icon></v-btn>
        </v-card-title>
        <v-img :src="product.img" :alt="product.name" aspect-ratio="2.75"></v-img>
        <v-card-text style="height: 100px; overflow-Y: auto;">
            <span>{{ product.description }}</span>
        </v-card-text>
    </v-card>
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
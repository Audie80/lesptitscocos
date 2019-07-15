<template>
    <v-container fluid>
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
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: 'ProductDescription',
        data: function() {
            return {
                commerceName: this.$route.params.shopid,
                category: this.$route.params.shops,
                productName: this.$route.params.productid,
                product: {
                    "name": "Baguette",
                    "slug": "baguette",
                    "img": "https://staticmedia.fauchon.com/media/catalog/product/cache/1/image/480x/040ec09b1e35df139433887a97daa66f/1/0/1008690.jpg",
                    "weight": 0.3,
                    "weightPrice": 3,
                    "quantity": 10,
                    "labels": [],
                    "description": "Une merveilleuse baguette dorée et à la croûte très croustillante."
                }
            }
        }
    }
</script>
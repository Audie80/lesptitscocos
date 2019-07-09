<template>
    <v-container fluid>
        <!-- Affichage de la page parent _commerce/index.vue -->
        <div
        v-if="$route.name=='commerces-category-commerce'">
            <v-card height="100%">
                <v-card-title>
                    <h3>{{ shop.name }}</h3>
                    <v-spacer></v-spacer>
                    <v-btn flat color="orange" icon><v-icon color="orange">favorite_border</v-icon></v-btn>
                </v-card-title>
                <v-img :src="shop.img" :alt="shop.name" aspect-ratio="2.75"></v-img>
                <v-card-text>
                    <!-- tableau à parcourir pour afficher les catégories du commerce (ex: boulangerie ET pâtisserie) -->
                    <span class="caption">{{ shop.category[0] }} - {{ shop.district }} - {{ shop.city }}</span>
                    <br><br>
                    <span>{{ shop.resume }}</span>
                </v-card-text>
            </v-card>
        </div>

        
    </v-container>
</template>

<script>
    export default {
        name: 'ShopDescription',
        data: function() {
            return {
                commerceName: this.$route.params.commerce,
                shop: {
                    "name": "La Fournée",
                    "slug": "la_fournee",
                    "category": ["Boulangerie", "Pâtisserie"],
                    "slug_category": ["boulangerie", "patisserie"],
                    "img": "https://www.vitrines-brest.fr/images/Image/customers_images/79//57591bad74c3c.jpg",
                    "district": "Centre-ville",
                    "city": "Brest",
                    "resume": "Excellente boulangerie-pâtisserie. Tout y est travaillé avec des produits frais."
                }
            }
        }
    }
</script>
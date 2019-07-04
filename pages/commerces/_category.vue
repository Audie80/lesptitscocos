<template>
    <div>
        <v-container grid-list-md>
            <v-layout row>
                <v-flex xs12>
                    <h2>{{ shopCategory.category }}</h2>
                </v-flex>
                <br>
                <div
                v-for="(shop, index) of shopCategory.shops" :key="index">
                    <h3>{{ shop.name }}</h3>
                    <img :src="shop.img" :alt="shop.name" />
                    <p>{{ category }} - {{ shop.district }} - {{ shop.city }}</p>
                    <p>{{ shop.resume }}</p>
                    <br>
                </div>
                <br><hr><br>
                <div>
                    <p>{{ shopCategory.content }}</p>
                </div>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'ShopCard',
        data: function() {
            return {
                category: this.$route.params.category,
                shops: [
                    {
                        "content": "Nos boulangeries brestoises transmettent leur savoir-faire artisanal pour vous proposer les meilleurs pains et pâtisseries, dans le respect des producteurs locaux.",
                        "category": "Boulangerie",
                        "shops": [
                            {
                            "name": "La fournée",
                            "img": "",
                            "district": "Centre-ville",
                            "city": "Brest",
                            "resume": "Excellente boulangerie-pâtisserie. Tout y est travaillé avec des produits frais."
                        },
                        {
                            "name": "Le Fournil de Pauline",
                            "img": "",
                            "district": "Saint-Luc",
                            "city": "Brest",
                            "resume": "Une très belle boulangerie avec de beaux produits le pain est très bon et des gâteaux aussi."
                        },
                        {
                            "name": "Le Four De Babel",
                            "img": "",
                            "district": "Kérinou",
                            "city": "Brest",
                            "resume": "Boulangerie attachante, atypique, qui met en scène ses produits."
                        }
                        ]
                    },
                    {
                        "category": "Boucherie",
                        "shops": []
                    }
                ]
            }
        },
        computed: {
            shopCategory() {
                return this.shops.find(shop => shop.category === this.category)
            }
        }
    }
</script>
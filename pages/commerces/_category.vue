<template>
    <div>
        <v-container container fluid grid-list>
            <v-layout row wrap>
                <v-flex d-flex xs12>
                    <h2>{{ shopCategory.category }}</h2>
                </v-flex>

                <v-flex d-flex xs12>
                    <v-container fluid grid-list-xl>
                        <v-layout row wrap>
                            <v-flex
                            v-for="(shop, index) of shopCategory.shops" :key="index" xs4>
                                <h3>{{ shop.name }}</h3>
                                <img :src="shop.img" :alt="shop.name" width="60%" height="60%" />
                                <p>{{ category }} - {{ shop.district }} - {{ shop.city }}</p>
                                <p>{{ shop.resume }}</p>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>

                <v-flex d-flex xs12>
                    <div>
                        <p>{{ shopCategory.content }}</p>
                    </div>
                </v-flex>
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
                            "img": "https://www.vitrines-brest.fr/images/Image/customers_images/79//57591bad74c3c.jpg",
                            "district": "Centre-ville",
                            "city": "Brest",
                            "resume": "Excellente boulangerie-pâtisserie. Tout y est travaillé avec des produits frais."
                        },
                        {
                            "name": "Le Fournil de Pauline",
                            "img": "https://www.letelegramme.fr/images/2019/05/24/l-equipe-de-la-boulangerie-la-fournee-a-brest_4594751_660x370.jpg?v=1",
                            "district": "Saint-Luc",
                            "city": "Brest",
                            "resume": "Une très belle boulangerie avec de beaux produits le pain est très bon et des gâteaux aussi."
                        },
                        {
                            "name": "Le Four De Babel",
                            "img": "https://www.letelegramme.fr/ar/imgproxy.php/images/2017/10/18/la-boulangerie-mel-rue-jean-jaures_3651871.jpg?article=20171018-1011706542&aaaammjj=20171018",
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
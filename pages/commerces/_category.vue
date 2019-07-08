<template>
    <v-container fluid>
        <v-layout row wrap align-start>
            <v-flex d-flex xs12>
                <h2>{{ shopCategory.category }}</h2>
            </v-flex>

            <v-flex d-flex xs12>
                <v-container fluid grid-list-xl>
                    <v-layout row wrap>
                        <v-flex
                        v-for="(shop, index) of shopCategory.shops" :key="index" xs4>
                            <v-card height="100%">
                                <v-card-title>
                                    <h3>{{ shop.name }}</h3>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="orange" icon><v-icon color="orange">favorite_border</v-icon></v-btn>
                                </v-card-title>
                                <v-img :src="shop.img" :alt="shop.name" aspect-ratio="2.75"></v-img>
                                <v-card-text>
                                    <span class="caption">{{ category }} - {{ shop.district }} - {{ shop.city }}</span>
                                    <br><br>
                                    <span>{{ shop.resume }}</span>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn flat color="orange">> boutique</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="orange">> tous les produits</v-btn>
                                </v-card-actions>
                            </v-card>
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
                        "content": "",
                        "category": "Boucherie",
                        "shops": [
                            {
                            "name": "Au Boeuf Charolais",
                            "img": "https://static4.pagesjaunes.fr/media/ugc/reja_02901900_110714266",
                            "district": "Bellevue",
                            "city": "Brest",
                            "resume": "La meilleure merguez de l'ouest."
                        }
                        ]
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
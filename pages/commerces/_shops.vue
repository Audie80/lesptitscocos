<!-- Page listant les commerces par catégorie  + Page qui affiche ses enfants _commerce et _product -->
<template>
    <div>
        <!-- Affichage de la page parent _category.vue -->
        <div
        v-if="$route.name=='commerces-shops'">

            <!-- Liste des commerces -->
            <v-container fluid grid-list-xl>

                <!-- Titre de la catégorie -->
                <h2>{{ shopCategory.name }}</h2>

                <!-- Affichage des cartes commerces -->
                <v-layout row wrap>
                    <v-flex
                    v-for="(shop, index) of shopCategory.shops" :key="index" xs12 sm6 md4 lg3> <!-- Boucle qui parcourt toutes les cartes commerces / xs12 sm6 md4 lg3 change le nombre de cards affichées en largeur selon le responsive -->
                        <v-card>
                            <v-card-title style="height: 60px; padding-top: 2%;">
                                <h3>{{ shop.name }}</h3>
                                <v-spacer></v-spacer>
                                <!-- icône favori, affichage lié à la BDD, data à true ou à false -->
                                <v-btn flat color="orange" icon @click="shop.favorite = !shop.favorite">
                                    <v-icon v-if="!shop.favorite">favorite_border</v-icon>
                                    <v-icon v-if="shop.favorite">favorite</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-img :src="shop.img" :alt="shop.name" aspect-ratio="2.75"></v-img>
                            <v-card-text>
                                <!-- A FAIRE tableau à parcourir pour afficher les catégories du commerce (ex: boulangerie ET pâtisserie) -->
                                <span class="caption">{{ shop.mainCategory }} {{ shop.othersCategories[0]}} - {{ shop.district }} - {{ shop.city }}</span>
                            </v-card-text>
                            <v-card-text style="height: 100px; overflow-Y: auto;">
                                {{ shop.resume }}
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <!-- lien vers la page listant les produits du commerce, fichier pages\commerces\_category\_commerce -->
                                <v-btn flat color="orange" :href="category + '/' + shop.slug">Voir la boutique</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>

                <!-- Contenu descriptif de la catégorie -->
                <p>{{ shopCategory.content }}</p>

            </v-container>
        </div>

        <!-- Affichage de la page enfant, quand on clique sur un commerce > voir le dossier _commerce -->
        <div
        v-else-if="$route.name=='commerces-shops-shopid' || $route.name=='commerces-shops-shopid-productid'"> <!-- 2ème condition indispensable pour afficher l'enfant _product dans la page _commerce -->
            <nuxt-child  :key="$route.params.shops" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListShops',
        data: function() {
            return {
                category: this.$route.params.shops,
                shopCategory: {
                    "name": "ma Boulangerie",
                    "slug": "ma_boulangerie",
                    "content": "Nos boulangeries brestoises transmettent leur savoir-faire artisanal pour vous proposer les meilleurs pains et pâtisseries, dans le respect des producteurs locaux.",
                    "shops": [
                        {
                        "name": "La Fournée",
                        "slug": "la_fournee",
                        "mainCategory": "Boulangerie",
                        "slugCategory": "boulangerie",
                        "othersCategories": ["Pâtisserie"],
                        "img": "https://www.vitrines-brest.fr/images/Image/customers_images/79//57591bad74c3c.jpg",
                        "district": "Centre-ville",
                        "city": "Brest",
                        "resume": "Excellente boulangerie-pâtisserie. Tout y est travaillé avec des produits frais.",
                        "favorite": false
                        },
                        {
                        "name": "Le Fournil de Pauline",
                        "slug": "le_fournil_de_pauline",
                        "mainCategory": "Boulangerie",
                        "slugCategory": "boulangerie",
                        "othersCategories": [],
                        "img": "https://www.letelegramme.fr/images/2019/05/24/l-equipe-de-la-boulangerie-la-fournee-a-brest_4594751_660x370.jpg?v=1",
                        "district": "Saint-Luc",
                        "city": "Brest",
                        "resume": "Une très belle boulangerie avec de beaux produits le pain est très bon et des gâteaux aussi.",
                        "favorite": false
                        },
                        {
                        "name": "Le Four De Babel",
                        "slug": "le_four_de_babel",
                        "mainCategory": "Boulangerie",
                        "slugCategory": "boulangerie",
                        "othersCategories": [],
                        "img": "https://www.letelegramme.fr/ar/imgproxy.php/images/2017/10/18/la-boulangerie-mel-rue-jean-jaures_3651871.jpg?article=20171018-1011706542&aaaammjj=20171018",
                        "district": "Kérinou",
                        "city": "Brest",
                        "resume": "Boulangerie attachante, atypique, qui met en scène ses produits.",
                        "favorite": false
                        }
                    ]
                }
            }
        },
        computed: {
            returnCategory() {
                return this.shopCategory.find(category => slugCategory === this.category)
            }
        }
    }
</script>
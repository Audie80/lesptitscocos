<!-- Page listant les commerces par catégorie  + Page qui affiche ses enfants _commerce et _product -->
<template>
    <v-container fluid>
        <!-- Affichage de la page parent _category.vue -->
        <div
        v-if="$route.name=='commerces-category'">
            <v-layout row wrap align-start>
                <!-- Titre de la catégorie -->
                <v-flex d-flex xs12>
                    <h2>{{ category }}</h2>
                </v-flex>

                <!-- Liste des commerces -->
                <v-flex d-flex xs12>
                    <v-container fluid grid-list-xl>
                        <v-layout row wrap>
                            <v-flex
                            v-for="(shop, index) of shopCategory.shops" :key="index" xs12 sm6 md4 lg3> <!-- Boucle qui parcourt toutes les cartes commerces / xs12 sm6 md4 lg3 change le nombre de cards affichées en largeur selon le responsive -->
                                <v-card>
                                    <v-card-title style="height: 60px; padding-top: 2%;">
                                        <h3>{{ shop.name }}</h3>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="orange" icon><v-icon color="orange">favorite_border</v-icon></v-btn>
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
                    </v-container>
                </v-flex>

                <!-- Contenu descriptif de la catégorie -->
                <v-flex d-flex xs12>
                    <div>
                        <p>{{ shopCategory.content }}</p>
                    </div>
                </v-flex>
            </v-layout>
        </div>

        <!-- Affichage de la page enfant, quand on clique sur un commerce > voir le dossier _commerce -->
        <div
        v-else-if="$route.name=='commerces-category-commerce' || $route.name=='commerces-category-commerce-product'"> <!-- 2ème condition indispensable pour afficher l'enfant _product dans la page _commerce -->
            <nuxt-child  :key="$route.params.commerce" />
        </div>
    </v-container>
</template>

<script>
    export default {
        name: 'ListShops',
        data: function() {
            return {
                category: this.$route.params.category,
                shops: [
                    {
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
                            "resume": "Excellente boulangerie-pâtisserie. Tout y est travaillé avec des produits frais."
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
                            "resume": "Une très belle boulangerie avec de beaux produits le pain est très bon et des gâteaux aussi."
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
                            "resume": "Boulangerie attachante, atypique, qui met en scène ses produits."
                            }
                        ]
                    },
                    {
                        "content": "",
                        "shops": [
                            {
                            "name": "Au Boeuf Charolais",
                            "slug": "au_boeuf_charolais",
                            "category": "Boucherie",
                            "slugCategory": "boucherie",
                            "othersCategories": [],
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
                // Tableau à parcourir pour chercher si la catégorie correspond à une des catégories du commerce ? -> à voir selon la réponse de la bdd
                return this.shops.find(shop => shop.shops[0].slugCategory === this.category)
            }
        }
    }
</script>
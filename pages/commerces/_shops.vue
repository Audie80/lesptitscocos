<!-- Page listant les commerces par catégorie  + Page qui affiche ses enfants _commerce et _product -->
<template>
    <div>
        <!-- Affichage de la page parent _category.vue -->
        <div
        v-show="$route.name=='commerces-shops'">

            <!-- Liste des commerces -->
            <v-container fluid grid-list-xl>

                <!-- Titre de la catégorie -->
                <h2 class="info--text">{{ categoryInfo.name }}</h2>

                <!-- Affichage des cartes commerces -->
                <v-row row wrap>
                    <v-col v-for="shop of shops" :key="shop._id" cols="12" sm="6" md="4" lg="3"> <!-- Boucle qui parcourt toutes les cartes commerces / xs12 sm6 md4 lg3 change le nombre de cards affichées en largeur selon le responsive -->
                        <v-card>
                            <v-card-title class="info--text" style="height: 66px; padding-top: 2%;">
                                <v-row row>
                                    <v-col cols="9">
                                        <h3>{{ shop.name }}</h3>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <v-btn outline color="primary" icon v-on="on" v-on:click="shop.favorite = !shop.favorite">
                                                    <v-icon v-if="shop.favorite == false">favorite_border</v-icon>
                                                    <v-icon v-if="shop.favorite == true">favorite</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Ajouter à mes favoris</span>
                                        </v-tooltip>
                                    </v-col>
                                </v-row>  
                            </v-card-title>
                            <v-img :src="shop.img" :alt="shop.name" aspect-ratio="2.75"></v-img>
                            <v-card-text style="height: 150px; overflow-Y: auto;">
                                <span class="caption primary--text">Quartier {{ shop.district }} - {{ shop.city }}</span>
                                <br>
                                <p style="margin-top: 8px;">{{ shop.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn primary class="text-capitalize fredoka-font" color="primary" :href="`/commerces/${categoryInfo.slug}/${shop.slug}`">Voir la boutique</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Contenu descriptif de la catégorie -->
                <p>{{ categoryInfo.description }}</p>

            </v-container>
        </div>

        <!-- Affichage de la page enfant -->
        <NuxtPage :key="$route.params.shops" />
    </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const shopsKey = `shops-${route.params.shops}`
const categoryKey = `category-${route.params.shops}`

const { data: shops } = await useAsyncData(shopsKey, () => $fetch(`${config.public.API_URL}commerces/${route.params.shops}`))
const { data: categoryInfo } = await useAsyncData(categoryKey, () => $fetch(`${config.public.API_URL}categories/${route.params.shops}`))
</script>
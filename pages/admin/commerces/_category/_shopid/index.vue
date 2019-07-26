<template>
    <div>
        <div class="boutique" v-if="$route.name!=`admin-commerces-shopid-produits`">
            <ul class="breadcrumb">
            <li><nuxt-link to="/admin">Tableau de bord Admin</nuxt-link><span> > </span></li>
            <li><nuxt-link to="/admin/commerces">Boutiques</nuxt-link><span> > </span></li>
            <li><nuxt-link :to="'/admin/commerces/'+category">{{ category }}</nuxt-link><span> > </span></li>
            <li><span>Modifier</span></li>
        </ul>
        <nuxt-link :to="'/admin/commerces/'+shopid+'/delete'">Supprimer la boutique</nuxt-link>
        <nuxt-link :to="'/admin/commerces/'+shopid+'/produits'">Voir les produits</nuxt-link>

        <h2>Modif de la boutique  {{ shopid }} (Ma boulangerie etc...)</h2>
        <h3>Ce qui est en rouge peut être modifié</h3>
        
        <form action="" method="POST">
            <v-layout row wrap>

                <!-- Description du commerce -->
                <v-flex d-flex xs12>
                    <v-card>
                        <v-card-title>
                            <h3><input class="modif" type="text" :value="shop.name"></h3>
                            <v-spacer></v-spacer>
                            <v-btn flat color="orange" icon><v-icon color="orange">favorite_border</v-icon></v-btn>
                        </v-card-title>
                        <v-img :src="shop.img" :alt="shop.name" aspect-ratio="5.75"></v-img>
                        <button class=" modif item-center">Modifier la photo</button>
                        <v-card-text>
                            <!-- A FAIRE tableau à parcourir pour afficher les catégories du commerce (ex: boulangerie ET pâtisserie) -->
                            <span class="caption">
                                <label for="mainCategory">Catégorie principale (ex : Boucherie, Boulangerie)</label>
                                <input id="mainCategory" class="modif" type="texte" :value="shop.mainCategory">
                                <label for="district">Quartier</label>
                                <select name="district" id="district">
                                    <option value="centre">Centre</option>
                                    <option value="recouvrance">Recouvrance</option>
                                </select>
                                <input id="district" class="modif" type="texte" :value="shop.district">
                                <label for="ville">Ville</label>
                                <input id="ville" class="modif" type="texte" :value="shop.city">
                            </span>
                            <br><br>
                            <span><textarea class="modif" :value="shop.resume"></textarea></span>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <button type="submit" class="modif">Valider les changements</button>

        </form>
        
        </div>

        <div class="produits" v-if="$route.name==`admin-commerces-shopid-produits`">
            <nuxt-child/>
        </div>
        
        
    </div>
</template>
<script>
export default {
    layout: 'admin',
        data: function() {
        return {
            
            shopid: this.$route.params.shopid,
            category: this.$route.params.category,
            shop: {
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
           
        }
    },
    computed: {
        subcategory() {
            return this.$route.params.subcategory
        },
        productid() {
            return this.$route.params.productid
        },
                
    }
}

    

</script>

<style>
    .modif {
        color: red;
    }
</style>

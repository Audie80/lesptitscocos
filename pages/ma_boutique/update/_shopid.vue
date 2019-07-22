<template>
    <div>
        <h1>Admin</h1>
        <h2>Modif du type de commerce  {{ shops }} (Ma boulangerie etc...)</h2>
        <h3>Ce qui est en rouge peut être modifié</h3>

        <v-layout row wrap>

            <!-- Description du commerce -->
            <v-flex d-flex xs12>
                <v-card>
                    <v-card-title>
                        <h3><input type="texte" :value="shop.name"></h3>
                        <v-spacer></v-spacer>
                        <v-btn flat color="orange" icon><v-icon color="orange">favorite_border</v-icon></v-btn>
                    </v-card-title>
                    <v-img :src="shop.img" :alt="shop.name" aspect-ratio="5.75"></v-img>
                    <button class="red item-center">Modifier la photo</button>
                    <v-card-text>
                        <!-- A FAIRE tableau à parcourir pour afficher les catégories du commerce (ex: boulangerie ET pâtisserie) -->
                        <span class="caption">
                            <label for="mainCategory">Catégorie principale (ex : Boucherie, Boulangerie)</label>
                            <input id="mainCategory" type="texte" :value="shop.mainCategory"><input type="texte" :value="shop.othersCategories[0]">
                            <label for="district">Quartier</label>
                            <input type="texte" :value="shop.district"> -<input type="texte" :value="shop.city"></span>
                        <br><br>
                        <span><textarea :value="shop.resume"></textarea></span>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        
    </div>
</template>
<script>
export default {
    name: "Modification boutique par commerçant",
        data: function() {
        return {
            shopid: this.$route.params.shopid,
            category: this.$route.params.category,
           
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
<template>
    <div>
        <h1>Admin</h1>
        <h2>Modif de la boutique {{ shopid }}</h2>
        <nuxt-link :to="'/admin/commerces/delete/'+shopid">Suppression de la boutique</nuxt-link>
        <h3>Ce qui est en rouge peut être modifié</h3>

      
    </div>
    
</template>

<script>
export default {
    data: function() {
            return {
                commerceName: this.$route.params.shopid,
                category: this.$route.params.category,
                shopid: this.$route.params.shopid,
                shop: {
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
                products: [
                    {
                        "name": "Baguette",
                        "slug": "baguette",
                        "img": "https://staticmedia.fauchon.com/media/catalog/product/cache/1/image/480x/040ec09b1e35df139433887a97daa66f/1/0/1008690.jpg",
                        "weight": 0.3,
                        "weightPrice": 3,
                        "quantity": 10,
                        "labels": [],
                        "description": "Une merveilleuse baguette dorée et à la croûte très croustillante."
                    },
                    {
                        "name": "Croissant",
                        "slug": "croissant",
                        "img": "http://www.lesrecettesdecuisine.com/wp-content/uploads/2013/09/Croissant-PetrKratochvi.jpg",
                        "weight": 0.1,
                        "weightPrice": 9,
                        "quantity": 20,
                        "labels": [],
                        "description": "Miam !"
                    }
                ]
            }
        }
    
}
</script>

<style scoped>
    label {
        font-weight: bold;
    }
    input {
        color: red;
    }
    textarea {
        color: red;
        width: 100%;
    }
</style>

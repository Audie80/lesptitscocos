<template>
    <div>
        <h2>{{ shop.category }}</h2>
        <!-- <a href="/"> -->
            <div>
                <h3>{{ shop.shops[0].name }}</h3>
                <img :src="shop.shops[0].img" :alt="shop.shops[0].name" />
                <p>{{ shop.category }} - {{ shop.shops[0].district }} - {{ shop.shops[0].city }}</p>
                <p>{{ shop.shops[0].resume }}</p>
            </div>
        <!-- </a> -->
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
            shop() {
                return this.shops.find(shop => shop.category === this.category)
            }
        }
    }
</script>
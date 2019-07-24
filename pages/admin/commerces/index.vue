<template>
    <v-container fluid>
        
        <nuxt-link to="/admin/commerces/allshops">Voir toutes les boutiques</nuxt-link>
        <nuxt-link to="/admin/commerces/create">Créer une nouvelle boutique</nuxt-link>        
        
        <h2>Catégories de boutiques</h2>
  
        <nuxt-link to="/admin/commerces/createCategory">Créer une nouvelle catégorie de boutiques</nuxt-link>

        
        <table>
            <tr>
                <th>#</th>
                <th>Type de commerce</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>
            <tr v-for="(shopType, index) of shopsTypes" :key="index">
                <td> 
                    <nuxt-link :to='"/admin/commerces/"+shopType.name'>{{ index }}</nuxt-link>
                </td>
                <td>
                    <nuxt-link :to='"/admin/commerces/"+shopType.name'>Consulter tous les " {{ shopType.name }} "</nuxt-link>
                </td>
                
                    
                <td><nuxt-link :to='"/admin/commerces/update/" + shopType.name'><button>Modifier {{ shops }}</button></nuxt-link></td>
                <td><nuxt-link :to='"/admin/commerces/deletecategory/" + shopType.name'><button >Supprimer {{ shops }}</button></nuxt-link></td>
            </tr>
        </table>



        
    </v-container>
</template>

<script>
export default {
    layout: 'admin',
    data: function() {
            return {
                shops: "",
                shopsTypes: [
                    {
                        name: "Ma Boulangerie",
                        desc: "du pain"
                    },
                    {
                        name: "Ma boucherie",
                        desc: "de la viande"
                    }
                    
                ],
                exemples: [
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
    
}
</script>

<style>

</style>


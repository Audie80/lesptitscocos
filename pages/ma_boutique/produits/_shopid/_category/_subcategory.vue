<template>
<div>
    <div class="subcategory" v-if="!(productid)">
        
        <ul class="breadcrumb">
            <li><NuxtLink :to="'/ma_boutique/'+shopid">Tableau de bord {{ shopid }}</NuxtLink><span> > </span></li>
            <li><NuxtLink :to="'/ma_boutique/produits/'+shopid">Mes produits</NuxtLink><span> > </span></li>
            <li><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/'+category">{{ category }}</NuxtLink><span> > </span></li>
            <li><span>{{ subcategory }}</span></li>
        </ul>

        <h1>Sous catégorie {{ subcategory }} de la catégorie {{ category }}</h1>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Prix kg</th>
                <th>Prix unitaire</th>
                <th>Ref</th>
                <th>Quantité / jour</th>
                <th>Stock du jour (modifiable)</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><NuxtLink :to="'/ma_boutique/produits/delete/1'">1</NuxtLink></td>
                <td><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/'+category+'/'+subcategory+'/'+'productid' ">Baguette</NuxtLink></td>
                <td><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/'+category+'/'+subcategory+'/'+'productid'">5</NuxtLink></td>
                <td><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/'+category+'/'+subcategory+'/'+'productid'">1</NuxtLink></td>
                <td><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/'+category+'/'+subcategory+'/'+'productid'">5168451230</NuxtLink></td>
                <td><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/'+category+'/'+subcategory+'/'+'productid'">50</NuxtLink></td>
                <td>
                    <form action="" method="POST">
                        <input type="number" value=50><!-- Mettre les bornes! -->
                        <button type="submit">OK</button>
                    </form> 
                </td>
                <td><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/'+category+'/'+subcategory+'/'+'productid'">Modifier</NuxtLink></td>
                <td><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/'+category+'/'+subcategory+'/'+'productid'+'/delete'">Supprimer</NuxtLink></td>
            </tr>
        </tbody>
    </table>
    </div>
    
    <div class="products" v-if="productid">
        <NuxtPage/>
    </div>
</div>
</template>

<script>
export default {
    name: "category",
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


<style>
    ul.breadcrumb li {
        display: inline;
    }
</style>
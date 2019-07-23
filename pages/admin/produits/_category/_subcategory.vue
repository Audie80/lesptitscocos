<template>
<div>
    <div class="subcategory" v-if="!(productid)">
        
        <ul class="breadcrumb">
            <li><nuxt-link to="/admin">Tableau de bord Admin</nuxt-link><span> > </span></li>
            <li><nuxt-link to="/admin/produits/">Toutes les catégories</nuxt-link><span> > </span></li>
            <li><nuxt-link :to="'/admin/produits/'+category">{{ category }}</nuxt-link><span> > </span></li>
            <li><span>{{ subcategory }}</span></li>
        </ul>

        
        
        
        
        <h1>Sous catégorie {{ subcategory }} de la catégorie {{ category }}</h1>

    <table>

        <thead>
            <th>#</th>
            <th>Nom</th>
            <th>Prix kg</th>
            <th>Prix unitaire</th>
            <th>Ref</th>
            <th>Quantité / jour</th>
            <th>Stock du jour (modifiable)</th>
            <th>Modifier</th>
            <th>Supprimer</th>
        </thead>
        <tr>
            <td><nuxt-link :to="'/admin/produits/delete/1'">1</nuxt-link></td>
            <td><nuxt-link :to="'/admin/produits/'+category+'/'+subcategory+'/'+'productid' ">Baguette</nuxt-link></td>
            <td><nuxt-link :to="'/admin/produits/'+category+'/'+subcategory+'/'+'productid'">5</nuxt-link></td>
            <td><nuxt-link :to="'/admin/produits/'+category+'/'+subcategory+'/'+'productid'">1</nuxt-link></td>
            <td><nuxt-link :to="'/admin/produits/'+category+'/'+subcategory+'/'+'productid'">5168451230</nuxt-link></td>
            <td><nuxt-link :to="'/admin/produits/'+category+'/'+subcategory+'/'+'productid'">50</nuxt-link></td>
            <td>
                
                <form action="" method="POST">
                    <input type="number" value=50><!-- Mettre les bornes! -->
                    <button type="submit">OK</button>
                </form> 
            </td>
            
            <td><nuxt-link :to="'/admin/produits/'+category+'/'+subcategory+'/'+'productid'">Modifier</nuxt-link></td>
            <td><nuxt-link :to="'/admin/produits/'+category+'/'+subcategory+'/'+'productid'+'/delete'">Supprimer</nuxt-link></td>
        </tr>
    </table>

    </div>
    
    <div class="products" v-if="productid">
        <nuxt-child/>
    </div>
    

</div>
</template>

<script>
// requêtes: get Tous les produits(nom, ref, prik kg, prix unitaire, quantité, stock) d'une sous catégorie + post stock d'un produit
export default {
    name: "category",
    data: function() {
        return {
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
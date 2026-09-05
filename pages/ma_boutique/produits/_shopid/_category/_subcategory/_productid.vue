<template>
    <div>
        <ul class="breadcrumb">
            <li><NuxtLink :to="'/ma_boutique/'+shopid">Tableau de bord {{ shopid }}</NuxtLink><span> > </span></li>
            <li><NuxtLink :to="'/ma_boutique/produits/'+shopid">Mes produits</NuxtLink><span> > </span></li>
            <li><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/'+category">{{ category }}</NuxtLink><span> > </span></li>
            <li><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/'+category+'/'+subcategory">{{ subcategory }}</NuxtLink><span> > </span></li>
            <li><span>{{ productid }}</span></li>
        </ul>

        <h1>Modifier produit {{ productid }}</h1>
        <NuxtLink :to="'/ma_boutique/produits/'+shopid+'/'+category+'/'+subcategory+'/delete/'+productid">Supprimer</NuxtLink>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            shopid: this.$route.params.shopid,
            category: this.$route.params.category,
            productid: this.$route.params.productid,
           
        }
    },
    computed: {
        subcategory() {
            return this.$route.params.subcategory
        },
        
                
    }
}
</script>

<style>
    ul.breadcrumb li {
        display: inline;
    }
</style>
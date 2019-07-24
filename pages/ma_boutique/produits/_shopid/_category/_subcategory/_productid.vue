<template>
    <div>
        <ul class="breadcrumb">
            <li><nuxt-link :to="'/ma_boutique/'+shopid">Tableau de bord {{ shopid }}</nuxt-link><span> > </span></li>
            <li><nuxt-link :to="'/ma_boutique/produits/'+shopid">Mes produits</nuxt-link><span> > </span></li>
            <li><nuxt-link :to="'/ma_boutique/produits/'+shopid+'/'+category">{{ category }}</nuxt-link><span> > </span></li>
            <li><nuxt-link :to="'/ma_boutique/produits/'+shopid+'/'+category+'/'+subcategory">{{ subcategory }}</nuxt-link><span> > </span></li>
            <li><span>{{ productid }}</span></li>
        </ul>

        <h1>Modifier produit {{ productid }}</h1>
        <nuxt-link :to="'/ma_boutique/produits/'+shopid+'/'+category+'/'+subcategory+'/delete/'+productid">Supprimer</nuxt-link>
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
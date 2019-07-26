<template>
    <div>
        <h1>Fiche produit {{ productid }}</h1>
        <nuxt-link :to="'/admin/produits/update/'+productid">Modifier {{ productid }}</nuxt-link>
        <nuxt-link :to="'/admin/produits/delete/'+productid">Supprimer {{ productid }}</nuxt-link>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    data: function() {
        return {
            productid: this.$route.params.productid,
            
        }
    }
    
}
</script>


<template>
    <div>
        <h1>Fiche produit {{ productid }}</h1>
        <NuxtLink :to="'/admin/produits/delete/'+productid">Supprimer {{ productid }}</NuxtLink>
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


<template>
    <div>
        <NuxtLink :to="'/admin/produits/'+productid">Retourner à la fiche produit</NuxtLink>
        <h1>Supprimer {{ productid }}?</h1>
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

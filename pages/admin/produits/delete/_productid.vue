<template>
    <div>
        <h1>Supprimer {{ productid }}?</h1>
        <nuxt-link :to="'/admin/produits/'+productid">Retourner à la fiche produit</nuxt-link>
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

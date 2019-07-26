<template>
    <div> 
        <h1>Modifier produit {{ productid }}</h1>
        <nuxt-link :to="'/admin/produits/'+productid">Retourner à la fiche produit</nuxt-link>
        <nuxt-link :to="'/admin/produits/delete/'+productid">Supprimer {{ productid }}</nuxt-link>
        <p>Ici le formulaire de modification</p>
        <nuxt-link :to="'/admin/produits/update/preview'+productid">Aperçu de la nouvelle page de {{ productid }} (non-fonctionnel)</nuxt-link>
        <form action="">

        </form>
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

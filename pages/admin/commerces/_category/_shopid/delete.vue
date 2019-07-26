<template>
    <div>
        <h1>Admin</h1>
        <nuxt-link :to="'/admin/commerces/'+shopid+'/produits'"> retour à la boutique </nuxt-link>
        <h2>Êtes vous sûr de vouloir supprimer {{ shopid }}?</h2>
    </div>
    
</template>

<script>
export default { 
    layout: 'admin',
    data: function() {
        return {
            shopid: this.$route.params.shopid,
        }
    }
    
}
</script>

<style>

</style>


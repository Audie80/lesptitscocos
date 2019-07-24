<template>
    <div>
        <nuxt-link :to="'/admin/commerces/boutiques/'+shopid"> retour à la boutique </nuxt-link>
        <h1>Tous les produits de la boutique {{ shopid }}</h1>
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


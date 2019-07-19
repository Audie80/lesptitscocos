<template>
    <div>
        <h1>Tableau de bord Commerçant {{  shopid }}</h1>
        <nuxt-link :to='"/ma_boutique/produits/"+  shopid' >Mes produits</nuxt-link>
        <nuxt-link :to='"/ma_boutique/update/"+  shopid'>Ma boutique (modifier)</nuxt-link>

    </div>
</template>

<script>
export default {
    name: "Dashborad commerçant",
    data: function(){
            return{
                shopid: this.$route.params.shopid,
            }
        }
}
    

</script>


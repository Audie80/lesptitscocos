<template>
    <div>
        <h1>Tableau de bord Commerçant {{  shopid }}</h1>
        <NuxtLink :to='"/ma_boutique/produits/"+  shopid' >Mes produits</NuxtLink>
        <NuxtLink :to='"/ma_boutique/update/"+  shopid'>Ma boutique (modifier)</NuxtLink>

    </div>
</template>

<script>
export default {
    name: "Dashborad commercant",
    data: function(){
            return{
                shopid: this.$route.params.shopid,
            }
        }
}
    

</script>


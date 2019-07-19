<template>
    <div>
        <span>Les produits de ma boutique {{ shopid }}</span>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            shopid: this.$route.params.shopid
        }
    }
}
</script>

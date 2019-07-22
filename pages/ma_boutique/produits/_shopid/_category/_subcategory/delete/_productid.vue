<template>
    <div>
        <h1>Delete produit {{ productid }}</h1>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            productid: this.$route.params.productid
        }
        
    }
}
</script>

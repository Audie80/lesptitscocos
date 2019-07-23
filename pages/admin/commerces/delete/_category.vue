<template>
    <div>
        <h1>Admin</h1>
        <h2>Êtes vous sûr de vouloir supprimer {{ shopid }}?</h2>
    </div>
    
</template>

<script>
export default {
    data: function() {
        return {
            shopid: this.$route.params.shopid,
        }
    }
    
}
</script>

<style>

</style>
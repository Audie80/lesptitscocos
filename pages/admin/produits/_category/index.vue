<template>
    <div>
        <h1>Liste des boutiques de la categorie {{ category }}</h1>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    data: function() {
        return {
           category: this.$route.params.category, 
        }
      

    }
}
</script>

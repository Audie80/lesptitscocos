<template>
    <div>
        <ul class="breadcrumb">
            <li><NuxtLink to="/admin">Tableau de bord Admin</NuxtLink><span> > </span></li>
            <li><NuxtLink to="/admin/produitsCategories">Toutes les catégories de boutiques</NuxtLink><span> > </span></li>
            <li><NuxtLink :to="'/admin/produitsCategories/'+category">Catégorie de boutiques {{ category }}</NuxtLink><span> > </span></li>
            <li><NuxtLink :to="'/admin/produitsCategories/'+category+'/'+subcategory">Sous-catégorie {{ subcategory }}</NuxtLink><span> > </span></li>
            <li><span>supprimer</span></li>
        </ul>

        <h2>Êtes vous sûr de vouloir supprimer la sous catégorie {{ subcategory }}?</h2>
    </div>
    
</template>

<script>
export default {
    layout: 'admin',
    data: function() {
        return {
            category: this.$route.params.category,
            subcategory: this.$route.params.subcategory,
        }
    }
    
}
</script>

<style>

</style>
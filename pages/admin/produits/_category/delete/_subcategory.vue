<template>
    <div>
        <ul class="breadcrumb">
            <li><nuxt-link to="/admin">Tableau de bord Admin</nuxt-link><span> > </span></li>
            <li><nuxt-link to="/admin/produitsCategories">Toutes les catégories de boutiques</nuxt-link><span> > </span></li>
            <li><nuxt-link :to="'/admin/produitsCategories/'+category">Catégorie de boutiques {{ category }}</nuxt-link><span> > </span></li>
            <li><nuxt-link :to="'/admin/produitsCategories/'+category+'/'+subcategory">Sous-catégorie {{ subcategory }}</nuxt-link><span> > </span></li>
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
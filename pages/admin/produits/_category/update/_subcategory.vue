<template>
    <div>
            <ul class="breadcrumb">
            <li><NuxtLink to="/admin">Tableau de bord Admin</NuxtLink><span> > </span></li>
            <li><NuxtLink to="/admin/produitsCategories">Toutes les catégories de boutiques</NuxtLink><span> > </span></li>
            <li><NuxtLink :to="'/admin/produitsCategories/'+category">Catégorie de boutiques {{ category }}</NuxtLink><span> > </span></li>
            <li><NuxtLink :to="'/admin/produitsCategories/'+category+'/'+subcategory">Sous-catégorie {{ subcategory }}</NuxtLink><span> > </span></li>
            <li><span>modifier</span></li>
        </ul>
        <NuxtLink :to="'/admin/produitsCategories/'+category+'/delete/'+subcategory">Supprimer la sous-catégorie {{ subcategory }}</NuxtLink>
        <h1>Modifier la sous-catégorie {{ subcategory }}</h1>

    </div>
</template>

<script>
export default {
    layout: 'admin',
    data: function() {
        return {
            subcategory: this.$route.params.subcategory,
            category: this.$route.params.category,

        }
    }
}
</script>

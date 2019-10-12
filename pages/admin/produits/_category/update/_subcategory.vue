<template>
    <div>
            <ul class="breadcrumb">
            <li><nuxt-link to="/admin">Tableau de bord Admin</nuxt-link><span> > </span></li>
            <li><nuxt-link to="/admin/produitsCategories">Toutes les catégories de boutiques</nuxt-link><span> > </span></li>
            <li><nuxt-link :to="'/admin/produitsCategories/'+category">Catégorie de boutiques {{ category }}</nuxt-link><span> > </span></li>
            <li><nuxt-link :to="'/admin/produitsCategories/'+category+'/'+subcategory">Sous-catégorie {{ subcategory }}</nuxt-link><span> > </span></li>
            <li><span>modifier</span></li>
        </ul>
        <nuxt-link :to="'/admin/produitsCategories/'+category+'/delete/'+subcategory">Supprimer la sous-catégorie {{ subcategory }}</nuxt-link>
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

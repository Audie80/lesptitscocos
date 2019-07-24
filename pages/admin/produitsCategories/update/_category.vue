<template>
    <div>
            <ul class="breadcrumb">
            <li><nuxt-link to="/admin">Tableau de bord Admin</nuxt-link><span> > </span></li>
            <li><nuxt-link to="/admin/commerces">Catégories de commerces</nuxt-link><span> > </span></li>
            <li><span>Modifier la catégorie {{ category }}</span></li>
        </ul>
        <h2>Modifier la catégorie {{ category }}</h2>
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

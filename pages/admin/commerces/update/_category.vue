<template>
    <div>
            <ul class="breadcrumb">
            <li><NuxtLink to="/admin">Tableau de bord Admin</NuxtLink><span> > </span></li>
            <li><NuxtLink to="/admin/commerces">Catégories de commerces</NuxtLink><span> > </span></li>
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

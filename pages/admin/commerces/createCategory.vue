<template>
    <div>
        <ul class="breadcrumb">
            <li><nuxt-link to="/admin">Tableau de bord Admin</nuxt-link><span> > </span></li>
            <li><nuxt-link to="/admin/commerces">Catégories de commerces</nuxt-link><span> > </span></li>
            <li><span>Créer une catégorie</span></li>
        </ul>
        <h1>Créer une catégorie</h1>
    </div>
</template>

<script>
export default {
    layout: 'admin',

}
</script>

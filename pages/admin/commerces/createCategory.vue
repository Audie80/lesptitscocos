<template>
    <div>
        <ul class="breadcrumb">
            <li><NuxtLink to="/admin">Tableau de bord Admin</NuxtLink><span> > </span></li>
            <li><NuxtLink to="/admin/commerces">Catégories de commerces</NuxtLink><span> > </span></li>
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

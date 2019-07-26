<template>
    <div>
        <h1>Mes commerçants</h1>
        <nuxt-link to="/admin/commercants/create">Créer un commerçant</nuxt-link>
        <h2>Liste des commerçants crud</h2>
        <nuxt-link :to="'/admin/cammercants/'+userid+'update'">Modifier le commerçant {{ userid }}.</nuxt-link>
        <nuxt-link :to="'/admin/cammercants/'+userid+'delete'">Supprimer le commerçant {{ userid }}.</nuxt-link>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    userid: "Mr Dupont", /*A supprimer*/


}
</script>


<template>
    <div>
        <h1>Mes commerçants</h1>
        <nuxt-link to="/admin/commercants/create">Créer un commerçant</nuxt-link>
        <nuxt-link to="/admin/commercants/create">Supprimer un commerçant</nuxt-link>
        <nuxt-link :to="'/admin/cammercants/'+userid+'update'">Modifier le commerçant {{ userid }}.</nuxt-link>
        <h2>Êtes vous sûr(e) de vouloir supprimer les droits commerçant de {{ userid }}?</h2>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    data: function() {
        return {
            userid: this.$route.params.userid,
            
        }
    }

}
</script>
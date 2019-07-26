<template>
    <div>
        <h1>Modifier le commerçant {{ userid }}.</h1>
        <nuxt-link to="/admin/commercants/create">Créer un commerçant</nuxt-link>
        <nuxt-link to="/admin/commercants">Tous les commerçants</nuxt-link>
        <nuxt-link :to="'/admin/cammercants/'+userid+'delete'">Supprimer le commerçant {{ userid }}.</nuxt-link>
        <form action="">
            
        </form>
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
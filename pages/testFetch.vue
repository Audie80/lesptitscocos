<!-- Page de mode d'emploi pour récupérer des données de la BDD
Plus d'infos sur le module Axios https://axios.nuxtjs.org/ -->
<template>
    <div>
        <div
        v-for="result of results" :key="result._id">
            Propriété name des différents results : {{ result.name }}
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    // la méthode asyncData utilisant Axios s'exécute avant toute création de page, peut donc servir à générer des paramètres dynamiques dans les url,
    // par contre on ne peut pas utiliser 'this' dans cette méthode (car 'this' n'existe pas encore)
    async asyncData({ $axios, params }) {
        let results = await $axios.$get(`categories`) // l'url de base 'http://localhost:8001/api/' est définie dans le fichier nuxt.config.js, dans le module Axios
        return { results }
    }
}
</script>

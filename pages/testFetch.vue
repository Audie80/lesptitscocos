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

<script setup>
const config = useRuntimeConfig()
const { data: results } = await useAsyncData('categories', () => $fetch(`${config.public.API_URL}categories`))
</script>

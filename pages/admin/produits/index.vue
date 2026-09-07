<template>
    <v-container fluid>
        <ul class="breadcrumb">
            <li><NuxtLink to="/admin">Tableau de bord Admin</NuxtLink><span> > </span></li>
            <li><span>Catégories de boutiques</span></li>
        </ul>
        
        <NuxtLink to="/admin/produits">Voir tous les produits</NuxtLink>
        <NuxtLink to="/admin/produits/create">Créer un nouveau produit</NuxtLink>
        
        <h2>Catégories de boutiques</h2>

        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Catégorie de boutique</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category, index) of categories" :key="index">
                    <td>
                        <NuxtLink :to='"/admin/produits/"+category.name'>{{ index }}</NuxtLink>
                    </td>
                    <td>
                        <NuxtLink :to='"/admin/produits/"+category.name'>Voir les sous-carégories de  " {{ category.name }} "</NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>

        <div>
            <NuxtLink to="/admin/commerces"><button>Pour créer, modifier ou supprimer une catégorie de boutiques, rendez-vous dans la rubrique modifier commerces du tableau de bord administrateur</button></NuxtLink>
        </div>
    </v-container>
</template>

<script>
export default {
    layout: 'admin',
    data: function() {
            return {
                categories: [
                    { name: 'MaBoulangerie' },
                    { name: 'MaBoucherie' }
                ]
            }
        }
}
</script>

<style></style>

<template>
    <v-container fluid>
        <ul class="breadcrumb">
            <li><nuxt-link to="/admin">Tableau de bord Admin</nuxt-link><span> > </span></li>
            <li><span>Catégories de boutiques</span></li>
        </ul>
        
        <nuxt-link to="/admin/produits">Voir tous les produits</nuxt-link>
        <nuxt-link to="/admin/produits/create">Créer un nouveau produit</nuxt-link>        
        
        <h2>Catégories de boutiques</h2>
  
        

        
        <table>        
            <tr>
                <th>#</th>
                <th>Catégorie de boutique</th>
            </tr>
            <tr v-for="(category, index) of categories" :key="index">
                <td> 
                    <nuxt-link :to='"/admin/produits/"+category.name'>{{ index }}</nuxt-link>
                </td>
                <td>
                    <nuxt-link :to='"/admin/produits/"+category.name'>Voir les sous-carégories de  " {{ category.name }} "</nuxt-link>
                </td>
            </tr>
            
        </table>
        <td><nuxt-link to="/admin/commerces"><button>Pour créer, modifier ou supprimer une catégorie de boutiques, rendez-vous dans la rubrique modifier commerces du tableau de bord administrateur</button></nuxt-link></td>



        
    </v-container>
</template>

<script>
export default {
    layout: 'admin',
    data: function() {
            return {
                categories: [
                    {
                        'name': 'MaBoulangerie',
                    },
                    {
                        'name': 'MaBoucherie',
                    }
                ]
                   
            }
        },
    
}
</script>

<style>

</style>


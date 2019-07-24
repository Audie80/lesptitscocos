<template> 
    <div>
        <div class="category" v-if="!subcategory">
        <ul class="breadcrumb">
            <li><nuxt-link to="/admin">Tableau de bord Admin</nuxt-link><span> > </span></li>
            <li><nuxt-link to="/admin/produitsCategories">Toutes les catégories de boutiques</nuxt-link><span> > </span></li>
            <li><span>Catégorie de boutiques {{ category }}</span></li>
        </ul>
        
        <nuxt-link to="/admin/produits">Voir tous les produits</nuxt-link>
        <nuxt-link to="/admin/produits/create">Créer un nouveau produits</nuxt-link>       
        

            <h2>Sous-catégories de {{ category }}</h2>
      

        <table>
            <thead>
                <th>#</th>
                <th>Sous-catégorie</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </thead>
            <tr v-for="(subcategory, index) of subcategories" :key="index">
                
                <td><nuxt-link :to="'/admin/produitsCategories/'+category+'/'+subcategory.name">{{ index }}</nuxt-link></td>
            
            
                <td><nuxt-link :to="'/admin/produitsCategories/'+category+'/'+subcategory.name">{{ subcategory.name }}</nuxt-link></td>
            
            
                <td><nuxt-link :to="'/admin/produitsCategories/'+category+'/'+subcategory.name">Modifier</nuxt-link></td>
            
            
                <td><nuxt-link :to="'/admin/produitsCategories/'+category+'/delete/'+subcategory.name">Supprimer</nuxt-link></td>
            
            </tr>
        </table>

        </div>
        <div class="shop" v-if="subcategory">
            <nuxt-child />
        </div>
        
    </div>
        
    </template>
    
    <script>
    export default {
        layout: 'admin',
        data: function() {
            return {
                subcategories: [
                    {
                        'name' :'pain',
                    },
                    {
                        'name': 'viennoiseries',
                    },
                ],
                shops: [
                    {
                        name: "Première Boulangerie",
                        desc: "rive gauche"
                    },
                    {
                        name: "Deuxième boulangerie",
                        desc: "rive droite"
                    }
                    
                ],
                category: this.$route.params.category,
                
            }
            },
            computed: {
                subcategory() {
                    return this.$route.params.subcategory
                }
            }
            
         
    }
    </script>
    
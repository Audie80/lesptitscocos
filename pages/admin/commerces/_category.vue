    <template> 
    <v-container fluid>
        <div class="category" v-if="!shopid">
        <ul class="breadcrumb">
            <li><NuxtLink to="/admin">Tableau de bord Admin</NuxtLink><span> > </span></li>
            <li><NuxtLink to="/admin/commerces">Boutiques</NuxtLink><span> > </span></li>
            <li><span>{{ category }}</span></li>
        </ul>
        
        <NuxtLink to="/admin/commerces/allshops">Voir toutes les boutiques</NuxtLink>
        <NuxtLink to="/admin/commerces/create">Créer une nouvelle boutique</NuxtLink>
        

            <h2>Liste des boutiques de catégorie {{ category }}</h2>
      
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nom du commerce</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(shop, index) of shops" :key="index">
                    <td><NuxtLink :to="'/admin/commerces/boutiques/'+shop.name">{{ index }}</NuxtLink></td>
                    <td><NuxtLink :to="'/admin/commerces/boutiques/'+shop.name">{{ shop.name }}</NuxtLink></td>
                    <td><NuxtLink :to="'/admin/commerces/boutiques/'+shop.name">Modifier</NuxtLink></td>
                    <td><NuxtLink :to="'/admin/commerces/boutiques/delete/'+shop.name">Supprimer</NuxtLink></td>
                </tr>
            </tbody>
        </table>
        </div>

        <div class="shop" v-if="shopid">
            <NuxtPage />
        </div>
    </v-container>
    </template>
    
    <script>
    export default {
        layout: 'admin',
        data: function() {
            return {
                category: this.$route.params.category,
                shops: [
                    {
                        name: "Première Boulangerie",
                        desc: "rive gauche"
                    },
                    {
                        name: "Deuxième boulangerie",
                        desc: "rive droite"
                    }
                    
                ]
            }
            },
            computed: {
                shopid() {
                    return this.$route.params.shopid
                }
            }
            
         
    }
    </script>
    
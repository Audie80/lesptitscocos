    <template> 
    <v-container fluid>
        <div class="category" v-if="!shopid">
        <ul class="breadcrumb">
            <li><nuxt-link to="/admin">Tableau de bord Admin</nuxt-link><span> > </span></li>
            <li><nuxt-link to="/admin/commerces">Boutiques</nuxt-link><span> > </span></li>
            <li><span>{{ category }}</span></li>
        </ul>
        
        <nuxt-link to="/admin/commerces/allshops">Voir toutes les boutiques</nuxt-link>
        <nuxt-link to="/admin/commerces/create">Créer une nouvelle boutique</nuxt-link>       
        

            <h2>Liste des boutiques de catégorie {{ category }}</h2>
      

        <table>
            <thead>
                <th>#</th>
                <th>Nom du commerce</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </thead>
            <tr v-for="(shop, index) of shops" :key="index">
            
                <td><nuxt-link :to="'/admin/commerces/boutiques/'+shop.name">{{ index }}</nuxt-link></td> 
                <td><nuxt-link :to="'/admin/commerces/boutiques/'+shop.name">{{ shop.name }}</nuxt-link></td>
                <td><nuxt-link :to="'/admin/commerces/boutiques/'+shop.name">Modifier</nuxt-link></td>              
                <td><nuxt-link :to="'/admin/commerces/boutiques/delete/'+shop.name">Supprimer</nuxt-link></td>
            

            </tr>
        </table>

        </div>
        <div class="shop" v-if="shopid">
            <nuxt-child />
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
    
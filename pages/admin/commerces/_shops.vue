    <template>
    <div>
        <h1>Admin</h1>
        <h2>Liste des boulangeries</h2>
      

        <table>
            <thead>
                <th>#</th>
                <th>Nom du commerce</th>
                <th>Ref</th>
                <th>€/kg</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </thead>
            <tr v-for="(shop, index) of shops" :key="index">
                <nuxt-link to="/admin/commerces/Ma boulangerie/boulangerie1">
                    <td>{{ index }}</td>
                </nuxt-link>
                <td>{{ shop.name }}</td>
                <td>Prix kg</td>
                <td>Modifier</td>
                <td>Supprimer</td>

            </tr>
        </table>
    </div>
        
    </template>
    
    <script>
    export default {
        data: function() {
            return {
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
            }
            
         
    }
    </script>
    
    <template>
    <div>
        <h1>Admin</h1>
        <h2>Page de la boulangerie n°1 (le nom est un input)</h2>
        <img src="" alt="Photo du commerce">
        <input type="text">Texte alternatif de la photo (si elle ne s'affiche pas)
        <h3>Description du commerce (input)</h3>
        <h3>Liste de ses produits</h3>

        <table>
            <thead>
                <th>#</th>
                <th>Nom commercial</th>
                <th>Ref</th>
                <th>€/kg</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </thead>
            <tr v-for="(shop, name, index) of exemples" :key="index">
                <td>{{ index }}</td>
                <td>{{ name }}</td>
                <td>ref</td>
                <td>€ / kg</td>
                <td><nuxt-link>Modifier</nuxt-link></td>
                <td><nuxt-link>Supprimer</nuxt-link></td>
            </tr>
        </table>
    </div>
        
    </template>
    
    <script>
    export default {
        data: function() {
            return {
                shops: this.$route.params.shops,
                exemples: [
                    {
                        name: "Première Boulangerie",
                        categorie: "Ma_Boulangerie",
                        desc: "rive gauche"
                    },
                    {
                        name: "Deuxième boulangerie",
                        categorie: "Ma_Boulangerie",
                        desc: "rive droite"
                    },
                    {
                        name: "PremièreBoucherie",
                        categorie: "boucherie",
                        desc: "rive gauche",
                    },
                    {
                        name: "Deuxième catégorie",
                        categorie: "boucherie",
                        desc: "rive droite"
                    }
                    
                ]
            }
        },
        computed: {
            relevantshops: exemples.filter(shop => shop.categorie===shops)
        },
        methods: {
        
            
        }
    }

            
         
    
    </script>
    
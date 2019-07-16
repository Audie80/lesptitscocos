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
    
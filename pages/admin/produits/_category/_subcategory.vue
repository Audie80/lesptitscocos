<template>
    <v-container fluid>

        <ul class="breadcrumb">
            <li><nuxt-link to="/admin">Tableau de bord Admin</nuxt-link><span> > </span></li>
            <li><nuxt-link to="/admin/produits">Catégories de boutiques</nuxt-link><span> > </span></li>
            <li><nuxt-link :to="'/admin/produits/'+category">Catégorie de boutiques {{ category }}</nuxt-link><span> > </span></li>
            <li><span>{{ subcategory }}</span></li>
        </ul>
        <h1>Sous-catégorie {{ subcategory }}</h1>
        <nuxt-link :to="'/admin/produits/'+category+'/update/'+subcategory">Modifier la sous-catégorie {{ subcategory }}</nuxt-link>                
        <nuxt-link :to="'/admin/produits/'+category+'/delete/'+subcategory">Supprimer la sous-catégorie {{ subcategory }}</nuxt-link>
    <h1>Liste de produits</h1>
    <table>
            <thead>
                <th>#</th>
                <th>Nom</th>
                <th>Référence</th>
                <th>Quantité</th>
                <th>Stock</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </thead>
            <tr>
                <td><nuxt-link to="/admin/produits/productid">1</nuxt-link></td>
                <td><nuxt-link to="/admin/produits/productid">Baguette</nuxt-link></td>
                <td><nuxt-link to="/admin/produits/productid">5615</nuxt-link></td>
                <td><nuxt-link to="/admin/produits/productid">60</nuxt-link></td>
                <td>
                    <input type="number" name="stock" id="stock" value="60">
                    <input type="submit" value="OK">
                </td>
                <td><nuxt-link to="/admin/produits/productid">Modifier</nuxt-link></td>
                <td><nuxt-link to="/admin/produits/delete/productid">Suprimer</nuxt-link></td>
            </tr>
        </table>
            


    </v-container>
</template>

<script>
export default {
    layout: 'admin',
    data: function() {
        return {
            category: this.$route.params.category,
            subcategory: this.$route.params.subcategory,
            productid: "",
        }
    }
}
</script>

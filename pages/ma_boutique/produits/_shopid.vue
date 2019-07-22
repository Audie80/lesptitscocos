<template>
    <div>
        <div class="shop" v-if="!category">
            <ul class="breadcrumb">
                <li><nuxt-link :to="'/ma_boutique/'+shopid">Tableau de bord {{ shopid }}</nuxt-link><span> > </span></li>
                <li><span>Mes produits</span></li>
            </ul>
            
            
            <h1>Les catégories de produits vendues dans ma boutique {{ shopid }}</h1>
        <table>
                <thead>
                <th>#</th>
                <th>Nom</th>
            </thead>
            <tr>
                
                <td><nuxt-link :to="'/ma_boutique/produits/'+shopid+'/pain'">1</nuxt-link></td>
                <td><nuxt-link :to="'/ma_boutique/produits/'+shopid+'/pain'">Pain</nuxt-link></td>
                
            </tr>
            <tr>
                <td><nuxt-link :to="'/ma_boutique/produits/'+shopid+'/patisserie'">2</nuxt-link></td>
                <td><nuxt-link :to="'/ma_boutique/produits/'+shopid+'/patisserie'">Patisserie</nuxt-link></td>
            </tr>
        </table>

        </div>
        <div class="subcategories" v-if="category">
            <nuxt-child/>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            shopid: this.$route.params.shopid,
            
        }
    },
    computed: {
        category() {
            return this.$route.params.category
        }
        
    }
    
}
</script>

<style>
    ul.breadcrumb li {
        display: inline;
    }
</style>

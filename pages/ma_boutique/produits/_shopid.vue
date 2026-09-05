<template>
    <div>
        <div class="shop" v-if="!category">
            <ul class="breadcrumb">
                       <li><NuxtLink :to="'/ma_boutique/'+shopid">Tableau de bord {{ shopid }}</NuxtLink><span> > </span></li>
                <li><span>Mes produits</span></li>
            </ul>
            
            <h1>Les catégories de produits vendues dans ma boutique {{ shopid }}</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/pain'">1</NuxtLink></td>
                        <td><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/pain'">Pain</NuxtLink></td>
                    </tr>
                    <tr>
                        <td><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/patisserie'">2</NuxtLink></td>
                        <td><NuxtLink :to="'/ma_boutique/produits/'+shopid+'/patisserie'">Patisserie</NuxtLink></td>
                
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="subcategories" v-if="category">
            <NuxtPage />
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

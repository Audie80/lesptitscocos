<template>
    <div>
        <div class="category" v-if="!subcategory">
            <ul class="breadcrumb">
                <li><nuxt-link to="/admin">Tableau de bord {{ shopid }}</nuxt-link><span> > </span></li>
                <li><nuxt-link to="/admin/produits/">Toutes les catégories</nuxt-link><span> > </span></li>
                <li><span>{{ category }}</span></li>
            </ul>
            
            
            
            <h1>Produits de la catégorie {{ category }} : </h1>
        <ul>
            <li><nuxt-link :to="'/admin/produits/'+category+'/sscat1'">premiere ss categ de {{ category }}</nuxt-link></li>
            <li><nuxt-link :to="'/admin/produits/'+category+'/sscat2'">deuxième ss-categ de {{ category }}</nuxt-link></li>
        </ul>
        </div>
        
        <div v-if="subcategory">
            <nuxt-child/>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name: "category",
    data: function() {
        return {
            
           
        }
    },
    computed: {
        subcategory() {
            return this.$route.params.subcategory
        },
        category() {
            return this.$route.params.category
        },
        productid() {
            return this.$route.params.productid
        }
        
    }
}
</script>

<style>
    ul.breadcrumb li {
        display: inline;
    }
</style>
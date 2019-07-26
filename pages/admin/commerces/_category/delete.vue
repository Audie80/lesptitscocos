<template>
    <div>
        <h1>Suppr la categ {{ category }}</h1>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    data: function(){
        return {
            category: this.$route.params.category,
            
        }
    }
}
</script>

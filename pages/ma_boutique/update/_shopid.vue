<template>
    <div>
        <h1>Modifier mon commerce {{ shopid }}</h1>
    </div>
</template>
<script>
export default {
    name: "Dashborad commerçant",
    data: function(){
            return{
               shopid: this.$route.params.shopid,
            }
        }
}
    

</script>
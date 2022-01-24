<template>
  <h2>coucou</h2>
</template>

<script>
export default {
    data(){
        return{
            conversations: [],
        };
    },
    mounted(){
        this.$api
        .get('channels').then((response) => {
            this.conversations = response.data
        })
    }
}
</script>

<style>

</style>
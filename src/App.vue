<template>
  <section class="section">
    <h1>Coop App</h1>
      <router-view/>
  </section>
</template>



<script>
export default{
  name: 'App',
  mounted(){
    this.$api.get('ping').then()

    if(!this.$store.state.token){
      this.$router.push('connexion');
    }
  }
}

</script>

<style lang="scss">
</style>

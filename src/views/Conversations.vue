<template>
  <div>
      <h2>Conversations</h2>
      <p>Conecté en tant que <b>{{$store.state.member.fullname}}</b></p>
      <p>{{this.conversations}}</p>
      <p><router-link class="button is-text is-info is-outlined" to="creer-conversation">Créer une conversation</router-link></p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      conversations : []
    };
  },
  mounted(){
      this.$api
      .get("channels")
      .then((response) => {
        this.conversations = response.data;
      })
      .catch((error) => {
            alert(error.response.data.message);
        });
  },
}
</script>

<style>

</style>
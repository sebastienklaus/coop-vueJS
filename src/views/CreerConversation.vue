<template>
<div>
  <Navigation />

  <div id="form-create" class="box">
  <h4 class="title is-4 has-text-centered">Création d'une conversation</h4>

    <form @submit.prevent="validation">
      <div class="field">
      <label class="label">Label</label>
      <div class="control">
        <input class="input" type="text" required v-model="conversation.label" placeholder="LP1 CIASIE">
      </div>
    </div>

    <div class="field">
      <label class="label">Topic</label>
      <div class="control">
        <input class="input" type="text" required v-model="conversation.topic" placeholder="Dev. Web Client">
      </div>
    </div>
      <button class="button">Valider</button>
    </form>

  </div>
</div>
  
</template>
<script>
export default {
    data(){
        return{
            conversation: {
                label: "",
                topic : "",
            },
        };
    },
  methods : {
    validation(){
        this.$api.post('channels', this.conversation)
        .then((response) => {
            this.$router.push('/');
        })
        .catch((error) => {
            alert(error.response.data.message);
        });
    },
  }
}
</script>
<style>

</style>
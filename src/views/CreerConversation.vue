<template>
  <div id="form-create" class="box">
    <a><router-link class="button is-text" to="/"> &#8592; Retour à la liste des conversations</router-link></a>
    <h1>Creation d'une converation</h1>
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
            console.log(response.data);
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
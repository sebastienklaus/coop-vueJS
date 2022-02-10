<template>
  <div id="form-create" class="box">
    <h1>Connexion</h1>
    <form @submit.prevent="validation">

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" required v-model="email" placeholder="alexsmith@gmail.com">
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="paswword" required v-model="password" placeholder="**********">
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Valider</button>
        </div>
        <div class="control">
          <button class="button is-link is-light"><router-link to="creation-compte">Suivez ce lien pour créer votre compte</router-link></button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      email : '',
      password : ''
    };
  },
  methods : {
    validation(){
        let donnees = {
            email : this.email,
            password : this.password,
        };
        this.$api.post('members/signin', donnees)
        .then((response) => {
            this.$store.commit('setToken', response.data.token);
            this.$store.commit('setMember', response.data.member);
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
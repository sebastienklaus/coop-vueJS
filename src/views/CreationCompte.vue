<template>
  <div id="form-create" class="box">
    <h1>Créer un compte</h1>
    <form @submit.prevent="validation">

      <div class="field">
        <label class="label">Fullname</label>
        <div class="control">
          <input class="input" type="text" required v-model="fullname" placeholder="John Doe">
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" required v-model="email" placeholder="johndoe@mail.com">
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" required v-model="password" placeholder="**********">
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Valider</button>
        </div>
        <div class="control">
          <button class="button is-link is-light"><router-link to="connexion">Suivez ce lien pour vous connectez</router-link></button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      fullname : '',
      email : '',
      password : ''
    };
  },
  methods : {
    validation(){
      this.$api.post('members', {
        fullname: this.fullname,
        email : this.email,
        password : this.password,
      })
      .then((response) => {
        alert('Votre compte a bien été crée !');
        this.$router.push('/connexion');
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
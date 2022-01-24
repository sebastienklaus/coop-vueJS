<template>
  <div id="form-create">
    <h1>Créer un compte</h1>
    <form @submit.prevent="validation">
      <div>
        <input type="text" required v-model="fullname">
      </div>
      <div>
        <input type="email" required v-model="email">
      </div>
      <div>
        <input type="password" required v-model="password">
      </div>
      <button>Valider</button>
    </form>
    <p><router-link to="connexion">Suivez ce lien pour vous connectez</router-link></p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      fullname : 'Sebastien Klaus',
      email : 'sebastien.klaus2@etu.univ-lorraine.fr',
      password : 'test'
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
        alert('Votre compte a bien été crée');
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
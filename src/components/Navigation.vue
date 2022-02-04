<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <router-link to="/">Conversations</router-link>
      </a>

      <a class="navbar-item">
        <router-link to="/membres">Liste des membres</router-link>
      </a>


      <a class="navbar-item">
        <router-link to="creer-conversation">Créer une conversation</router-link>
      </a>
      
    </div>

    <div class="navbar-end">
      <p class="navbar-item">
        <span>Connecté en tant que <b>{{$store.state.member.fullname}}</b></span>
      </p>
      <div class="navbar-item">
        <div class="buttons">
          <a @click="deconnexion()" class="button is-info">
            <strong>Déconnexion</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {

  methods: {
    deconnexion(){
        // let donnees = {
        //     email : this.email,
        //     password : this.password,
        // };
        setTimeout(this.$api.delete('members/signout')
        .then(() => {
          alert('Vous êtes déconnecté. Veuillez saisir vos identifiants.')
            this.$store.commit("setToken", null);
            this.$store.commit("setMember", false);
            this.$router.push("/connexion");
        })
        .catch((error) => {
            alert(error.response.data.message);
        }), 1000);
        
    },
  }

}
</script>

<style>

</style>
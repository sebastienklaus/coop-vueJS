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
        <div class="button is-info">
          <span class="icon">
            <i class="fas fa-circle-plus"></i>
          </span>
          <router-link class="has-text-white" to="/creer-conversation">Créer une conversation</router-link>
        </div>
      </a>
      
    </div>

    <div class="navbar-end">
      <p class="navbar-item"> 
          <a href="#">
            <i class="fa-solid fa-user mr-1"></i>
            <router-link :to="'/membre/' + $store.state.member.id">
              <b>{{$store.state.member.fullname}}</b>
            </router-link>
          </a>
      </p>
      <div class="navbar-item">
          <a id="logOutButton" @click="deconnexion()" class="button is-link is-light">
            <span class="icon">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </span>
            <strong>Déconnexion</strong>
          </a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {

  methods: {
    deconnexion(){
      let button_log_out = document.getElementById('logOutButton');
      button_log_out.classList.add('is-loading');
      button_log_out.classList.remove('is-light');

      setTimeout(this.$api.delete('members/signout')
      .then(() => {
          this.$store.commit("setToken", null);
          this.$store.commit("setMember", false);
          this.$router.push("/connexion");
          this.flashMessage.show({
            status: "success",
            title: "Déconnexion",
            message: "Vous êtes déconnecté. Veuillez saisir vos identifiants pour ouvrir une nouvelle session.",
          });
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
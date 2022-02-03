<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <router-link to="/">Conversations</router-link>
      </a>

      <a class="navbar-item">
        <router-link to="creer-conversation">Créer une conversation</router-link>
      </a>
      <p class="navbar-item">
        <span>Connecté en tant que <b>{{$store.state.member.fullname}}</b></span>
      </p>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
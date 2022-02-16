<template>
  <section class="section">
    <h2 align="center" class="title is-2">Co'op App</h2>
      <router-view/>
  </section>
</template>



<script>
export default {
  name: "app",
  mounted() {
    this.$api.get("ping").then();
    if (!this.$store.state.token) {
      alert('Votre session a expiré. Veuillez saisir vos identifiants pour vous connecter à nouveau.')
      this.$router.push("/connexion");
    } else {
      this.$api(`members/${this.$store.state.member.id}/signedin`)
      .then(this.demarrer)
      .catch(this.seConnecter);
    }
  },

  methods: {
    ready() {
      this.$store.commit("setReady", true);
    },
    demarrer() {
      this.$api.get("members").then((response) => {
        this.$store.commit("setMembers", response.data);
        this.ready();
      });
    },
    seConnecter() {
      this.$store.commit("setToken", false);
      this.$router.push("/connexion");
      this.ready();
    },
  },
};
</script>


<style lang="scss">
</style>

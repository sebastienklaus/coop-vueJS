<template>
  <div>
    <!-- <Header /> -->
    <Navigation />
    <section class="section">

      <h4 class="title is-4 has-text-centered">Liste des membres</h4>

      <div class="card" :key="membre.id" v-for="membre in membres">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                <p class="title is-4">{{membre.fullname}}</p>
                <p class="subtitle is-6">{{membre.email}}</p>
                </div>
            </div>

            <div class="content">
                <p>Compte crée le {{membre.created_at}}</p>
            </div>

            <footer class="card-footer">
                <a href="#" class="card-footer-item" style="pointer-events: none">Edit</a>
                <a @click="deleteMember(membre.id)" class="card-footer-item">Delete</a>
            </footer>
        </div>
      </div>
    </section>
    <FlashMessage></FlashMessage>
  </div>
</template>

<script>

export default {
  data() {
    return {
      membres: [],
    };
  },
  mounted() {
    this.getMembers();
  },
  methods: {
    getMembers() {
      this.$api
      .get(`members`)
      .then((response) => {
        this.membres = response.data;
      })
      .catch((error) => {
        this.flashMessage.show({
          status: "error",
          title: "Something went wrong :/",
          message: error.response.data.message,
        });
      });
    },
    deleteMember(id) {
      this.$api
        .delete(`members/${id}`)
        .then((response) => {
          if (`${id}` == this.$store.state.member.id) {
            alert('Vous supprimez actuellement votre propre compte')
            this.$store.commit("setToken", null);
            this.$store.commit("setMember", false);
            this.$router.push("/connexion");
          }
          else {
            alert("L'utilisateur a bien été supprimé");
            this.getMembers();
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <Navigation />
    <section class="section">


      <ul>
        <li v-for="user in getMembers" :key="user.id">{{user.id}}</li>
      </ul>

      <div class="box has-background-link-light">
        <div class="content p-4" :key="membre.id" v-for="membre in filterUser">
          <h3 class="title is-3 has-text-centered">Profil de {{membre.fullname}}</h3>

          <p><i class="far fa-clock"></i> Inscris le {{membre.created_at}}</p>
          <p>
            <i class="far fa-envelope"></i>
            <a :href="'mailto:' + membre.email"> {{membre.email}}</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      membres: [],
      membre: []
    };
  },
  mounted() {
    this.getMembers();
  },
  computed: {
    filterUser(){
      return this.membres.filter(member => member.id == `${this.$route.params.id}`)
    }
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
  },
};
</script>


<style></style>

<template>
  <div>
    <Header />
    <section class="section">
      <h4 class="title is-4 has-text-centered">Détails de la conversation</h4>
      <div class="box" v-if="conversation">
         <p>
            Topic : <b>{{ conversation.topic }}</b>
         </p>
         <p>
            Label : <b>{{ conversation.label }}</b>
         </p>
        <br />

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link is-light">
              <router-link to="/">
                &#8592; Retour à la liste des conversations</router-link
              >
            </button>
          </div>
          <div class="control">
            <a @click="removeConversation()" class="button is-dark">Delete</a>
          </div>
        </div>
      </div>

      <h4 class="title is-4 has-text-centered">Liste des messages</h4>

      <posterMessage :conversation="conversation" />
      <div v-for="message in messages" :key="message.id">
        <Message :message="message" />
      </div>
    </section>
    <FlashMessage></FlashMessage>
  </div>
</template>

<script>
import posterMessage from "../components/posterMessage.vue";
import Message from "../components/Message.vue";
export default {
  components: {
    posterMessage,
    Message,
  },
  data() {
    return {
      //  id: this.$route.params.id,
      conversation: [],
      messages: [],
    };
  },
  mounted() {
    this.getMessage();
    console.log(this.$route.params);
    this.$api
      .get(`channels/${this.$route.params.id}`)
      .then((response) => {
        if (response.data === null) {
          //si l'id n'est pas bon,
          //on est dirigé vers la page d'accueil (list des conversations)
          this.$router.push("/");
        }
        this.conversation = response.data;
      })
      .catch((error) => {
        this.flashMessage.show({
          status: "error",
          title: "Something went wrong :(",
          message: error.response.data.message,
        });
      });
    this.$bus.$on("charger-message", (message) => {
      // le paramètre message n'est pas utile, on trouvera le message
      // allant chercher tous les message dans le current channel
      //  console.log(message);
      this.getMessage();
    });
  },
  methods: {
    getMessage() {
      this.$api
        .get(`channels/${this.$route.params.id}/posts`)
        .then((response) => {
          this.messages = response.data;
        });
    },
    removeConversation() {
      this.$api
        .delete(`channels/${this.$route.params.id}`)
        .then((response) => {
          alert("Votre conversation a bien été supprimé");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
};
</script>

<style></style>

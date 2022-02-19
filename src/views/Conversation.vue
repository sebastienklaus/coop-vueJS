<template>
  <div>
    <Navigation />
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
            <a @click="getMessage()" class="button is-info">Rafraîchir la liste des messages</a>
          </div>
          <div class="control">
            <a @click="removeConversation()" class="button is-danger">Supprimer la conversation</a>
          </div>
        </div>
      </div>

      <h4 class="title is-4 has-text-centered">Liste des messages</h4>

      <posterMessage :conversation="conversation" />
      <div v-for="message in messages" :key="message.id">
        <Message :message="message" :deleteMessage="deleteMessage"/>
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
      conversation: [],
      messages: [],
    };
  },
  mounted() {
    this.getMessage();
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
          alert("Cette conversation a bien été supprimé");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    deleteMessage(idMessage, idMember){
      if (`${idMember}` !== this.$store.state.member.id) {
        this.flashMessage.show({
          status: "error",
          title: "Impossible de supprimer ce message",
          message: "Désolé, seul l'auteur de ce message peut le supprimer 😕.",
        });
      }
      else {
        this.$api
          .delete(`channels/${this.$route.params.id}/posts/${idMessage}`)
          .then((response) => {
            alert("Ce message a bien été supprimé.");
            this.getMessage();
          })
          .catch((error) => {
            alert(error.response.data.message);
          });
      }
    },
  },
};
</script>

<style></style>

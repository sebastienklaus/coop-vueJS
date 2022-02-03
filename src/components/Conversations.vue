<template>
  <div class="card">
        <p class="card-header-title">
            <router-link :to="'conversation/' + conversation.id">
                {{ conversation.topic }}
            </router-link>
        </p>
        <div class="card-content">
            <div class="content">
                {{ conversation.label }}
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a :href="removeConversation()" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script>
export default {
    props: ['conversation'],
    methods : {
    removeConversation(){
      this.$api
       .delete(`channels/${this.$route.params.id}`)
       .then((response) => {
        alert('Votre conversation a bien été supprimé');
        this.$router.push('/');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    },
  }
}
</script>
<template>
  <section>
    <Navigation />
    <div v-for="item in conversations" :key="item.id">
      <Conversation class="m-3" :conversation="item" />
    </div>
  </section>
</template>

<script>
import Conversation from '../components/Conversations.vue';

export default {
  components: { Conversation },
  data(){
    return {
      conversations : []
    };
  },
  mounted(){
    this.$api
    .get("channels")
    .then((response) => {
      this.conversations = response.data;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
  },
}
</script>

<style>

</style>
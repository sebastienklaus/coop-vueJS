<template>
  <div>
    <Header />
    <div class="m-3" v-for="item in conversations" :key="item.id">
      <Conversation :conversation="item" />
    </div>
  </div>
</template>

<script>
import Conversation from '../components/Conversations.vue';
import Header from '../components/Header.vue';

export default {
  components: { Conversation, Header },
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
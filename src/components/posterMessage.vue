<template>
    <form class="box" @submit.prevent="poster">
      <div class="field">
          <div class="control">
              <input type="text" class="input" v-model="message"/>
          </div>
      </div>
      <div class="buttons">
          <button class="button is-link"> Poster un message </button>
      </div>
    </form>
</template>
<script>
export default {
props : ['conversation'],
 data(){
        return {
            message : '',
        }
    },
    methods : {
        poster(){
            if (this.message == '') {
                this.flashMessage.show({
                    status: "error",
                    title: "Message vide",
                    message: "Il est impossible d'envoyer un message vide !",
                    });
            }
            else{
                this.$api.post(`channels/${this.conversation.id}/posts`,{
                    channel_id : this.conversation.id,
                    message : this.message,
                    member_id : this.$store.state.member.id}).then(response =>{
                        // console.log(response.data);
                        this.$bus.$emit('charger-message', response.data)
                    })
                    this.message = ''
            }

            }
        }
}
</script>

<style>

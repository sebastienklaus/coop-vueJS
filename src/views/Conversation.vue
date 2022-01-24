<template>
    <div>
    <form @submit.prevent="sendMessage">
            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <input class="input" type="text" required v-model="message.text" placeholder="Votre message ici ...">
                </div>
                <button class="button">Valider</button>
            </div>
    </form>

    
    <div class="card">
            <div class="card-content">
                <div class="content">
                    <p>{{message.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            conversations : this.conversations,
            message: {
                text:"",
            }
        }
    },
    mounted(){
        this.$api.get('channels/this.conversation.id/posts', this.message)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            alert(error.response.data.message);
        });
    },
    methods : {
        sendMessage(){
            this.$api.post(`channels/${this.conversation.id}/posts`, this.message)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
        },
    },
}
</script>

<style>

</style>
<template>
    <div class="card m-3">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">
                        <router-link :to="'/membre/' + member.id">
                            {{ member.fullname }}
                        </router-link>
                    </p>
                    <p class="subtitle is-6">{{ member.email }}</p>
                </div>
            </div>
            <div class="content" :data-id-message="message.id">
               <p>{{ message.message }}</p>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" disabled>
                <span class="icon">
                    <i class="fa-solid fa-pen-to-square"></i>
                </span>
                Modifier le message
            </a>
            <a @click="deleteMessage(message.id)" class="card-footer-item has-text-danger">
                <span class="icon">
                    <i class="fa-solid fa-trash"></i>
                </span>
                Supprimer le message
            </a>
        </footer>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

    props: ['message', 'deleteMessage'],
    data() {
        return {
            member: false
        }
    },
    computed: {
        ...mapGetters(["getMember"]),
    },
    mounted() {
        this.member = this.getMember(this.message.member_id);
    },
    
}


</script>
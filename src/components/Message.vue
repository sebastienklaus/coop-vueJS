<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{this.$store.state.member.fullname}}</p>
                    <p class="subtitle is-6">{{this.$store.state.member.email}}</p>
                </div>
            </div>
            <div class="content">
                {{ message.message }}
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">
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
export default {
    props: ['message', 'deleteMessage'],
}
</script>
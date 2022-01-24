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
            <a href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script>
export default {
    props: ['conversation']
}
</script>
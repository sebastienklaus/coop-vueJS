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
    </div>
</template>

<script>
export default {
    props: ['conversation'],
}
</script>
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Conversations',
    component: () => import('../views/Conversations.vue')
  },
  {
    path: '/creation-compte',
    name: 'CreationCompte',
    component: () => import('../views/CreationCompte.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import('../views/Connexion.vue')
  },
  {
    path: '/creer-conversation',
    name: 'CreerConversation',
    component: () => import('../views/CreerConversation.vue')
  },
  {
    path: '/conversation/:id',
    name: 'Conversation',
    component: () => import('../views/Conversation.vue')
  },
  {
    path: '/membres/',
    name: 'Membres',
    component: () => import('../views/Membres.vue')
  },
  {
    path: '/membre/:id',
    name: 'Membre',
    component: () => import('../views/Membre.vue')
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
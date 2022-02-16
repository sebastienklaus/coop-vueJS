import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    token : '',
    member : false,
    members : [],
    ready : false,
  },
  mutations: {
    setToken(state, token){
      state.token = token
    },
    setMember(state, member){
      state.member = member
    },
    setMembers(state, members) {
      state.members = members
    },
    setReady(state, ready) {
      state.ready = ready
    },
  },
  getters: {
    getMember: (state) => (idMember) => {
      return state.members.find(member => member.id === idMember)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})

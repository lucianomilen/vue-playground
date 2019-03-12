import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: ''
  },

  mutations: {
    setName: (state) => (str) => {
      console.log(str)

      state.name = str
    }
  }
})

export default store

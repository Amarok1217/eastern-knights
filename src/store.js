import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    figurePageNo: 0
  },
  mutations: {
    updatePageFigureNo(state, payload) {
      state.figurePageNo = payload
    }
  },
  actions: {

  }
})

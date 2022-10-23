import { createStore } from 'vuex'

export default createStore({
  state: {
    open: false,
    step: 0,
  },
  getters: {
    getOpenForm(state){
      return state.open
    },
    getStep(state){
      return state.step
    }
  },
  mutations: {
    Load(state, flag){
      state.open = true;
      state.step = 0
    },
    back(state, flag){
      if(state.step > 0){
        state.step--;
      }
    },
    next(state, flag){
      state.step++;
    }
  },
  actions: {
  },
  modules: {
  }
})

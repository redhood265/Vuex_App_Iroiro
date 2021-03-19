// store.js
// import
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//ストアの定義
const store = new Vuex.Store({
  // ここに実装を記載
  state: {
    store_cnt: 0
  },
  mutations: {
    countUp(state) {
      state.store_cnt++
    },
    countDown(state) {
      state.store_cnt--
    }
  }
})

// ストアをエクスポート
export default store
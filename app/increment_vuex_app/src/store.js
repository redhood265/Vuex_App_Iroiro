// store.js
// import
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//ストアの定義
const store = new Vuex.Store({
  // ここに実装を記載
  state: {
    store_cnt: 0,
    id_inc: 1,
    data_hozon: [
      {
        id: 0,
        name: 'からもじ',
        done: false,
      }
    ]
  },
  mutations: {
    countUp(state) {
      state.store_cnt++
    },
    countDown(state) {
      state.store_cnt--
    },
    addNewTask(state,{name}) {
      state.data_hozon.push({
        id: state.id_inc,
        name,
        done: false
      })
      state.id_inc++
    }
  }
})

// ストアをエクスポート
export default store
<template>
  <div class="increment_app">
    Vuexのインクリメント：{{ cnt_value }}
    <br><br>
    <button class="btn_proto" v-on:click="countUp">カウントアップ</button>
    <br>
    <button class="btn_proto" v-on:click="countDown">カウントダウン</button>
    <h3>タスク一覧</h3>
    タスク作成：<input type="text" placeholder="新しいタスク" v-model="newTaskName">
    <button class="btn_proto" v-on:click="addNewTask">タスク追加</button>
    <ul>
      <li v-for="hozon_data in data_hozon_list" v-bind:key="hozon_data.id">
        <input type="checkbox" v-bind:checkd="hozon_data.done"> ID： {{ hozon_data.id }} | タスク名：{{ hozon_data.name }} | Done：{{hozon_data.done}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTaskName: "" //入力タスク名
    }
  },
  computed: {
    cnt_value (){
      return this.$store.state.store_cnt // ストアを読み込む
    },
    data_hozon_list () {
      return this.$store.state.data_hozon 
    }
  },
  methods: {
    // インクリメント処理
    countUp () {
      this.$store.commit('countUp')
    },
    // デクリメント処理
    countDown () {
      this.$store.commit('countDown')
    },
    // タスク新規追加
    addNewTask () {
      this.$store.commit('addNewTask', {name: this.newTaskName})
      this.newTaskName = ""
    }
  }
}
</script>

<style>
.btn_proto {
  margin-bottom: 2%;
}
</style>

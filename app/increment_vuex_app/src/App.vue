<template>
  <div class="increment_app">
    Vuexのインクリメント：{{ cnt_value }}
    <br><br>
    <button class="btn_proto" v-on:click="countUp">カウントアップ</button>
    <br>
    <button class="btn_proto" v-on:click="countDown">カウントダウン</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newCnt: 0
    }
  },
  computed: {
    cnt_value (){
      return this.$store.state.store_cnt // ストアを読み込む
    }
  },
  methods: {
    countUp () {
      this.newCnt++
      this.$store.commit('countUp',{
        store_cnt: this.newCnt
      })
    },
    countDown () {
      this.newCnt--
      this.$store.commit('countDown',{
        store_cnt: this.newCnt
      })
    }

  }
}
</script>

<style>
.btn_proto {
  margin: 5%;
}
</style>

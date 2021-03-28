<template>
  <div id="memo_main">
    <ul>
      <li v-for=" d in data_ary" v-bind:key="d.id" v-show="d.view_flg">{{ d.mame }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data_ary : [
        {id:1 , mame: "1月", ppp: 100, view_flg: false},
        {id:2 , mame: "2月", ppp: 300, view_flg: true},
        {id:3 , mame: "3月", ppp: 400, view_flg: false}
      ],
      data_view_flg: false
    }
  }
}
</script>



<style>
</style>

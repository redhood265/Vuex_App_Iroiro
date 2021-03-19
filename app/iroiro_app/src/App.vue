<!-- 画面表示部分 -->
<template>
  <h1 class="greeting">あいさつ：{{ msg }}</h1>
</template>

<!-- importや処理記述部分-->
<script>
export default {
  data () {
    return { msg: 'こんにちわ!!!'}
  }
}
</script>

<style>
.greeting {coloer: #ddd;}
</style>

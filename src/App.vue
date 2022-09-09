<template>
  <div id="app">
    <!-- 挂载点 -->
    <router-view></router-view>

  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.toutiao {
  color: pink;
}
.add {
  display:inline-block;
  width: 200px;
  height: 200px;
  background: pink;
}
</style>

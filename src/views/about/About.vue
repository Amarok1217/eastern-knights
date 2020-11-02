<template>
  <div class="about">
    <p class="title">关于</p>
    <p class="info">联系方式：amarok1217@gmail.com</p>
    <p class="info">欢迎提出意见和建议</p>
    <p class="info">欢迎投稿优秀摄影作品</p>
    <el-button
      class="adviceBtn"
      size="small"
      type="primary"
      @click="goAdvice"
    >我有建议</el-button>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'About',
  data() {
    return {}
  },
  methods: {
    goAdvice() {
      window.open('https://github.com/Amarok1217/eastern-knights/issues')
    }
  }
}
</script>
<style lang="scss" scoped>
@import './About';
</style>

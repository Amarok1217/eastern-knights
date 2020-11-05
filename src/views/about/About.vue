<template>
  <div class="about">
    <p class="title">关于：</p>
    <p class="info">联系方式：amarok1217@163.com</p>
    <p class="info">欢迎提出意见和建议</p>
    <p class="info">欢迎投稿优秀摄影作品</p>
    <p class="info">欢迎英语有实力的朋友来协助进行翻译工作</p>
    <el-button
      class="adviceBtn"
      size="small"
      type="primary"
      @click="goAdvice"
    >我有建议</el-button>

    <div class="thanks flex-row-center">
      <p class="thanksTitle">鸣谢：</p>
      <img
        class="logo"
        src="https://zbd-image.oss-cn-hangzhou.aliyuncs.com/eastern-knights/background-image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20201105142611.jpg"
        alt=""
        @click="goRuina"
      >
    </div>
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
    },
    goRuina() {
      window.open(
        'https://shop34828146.taobao.com/?spm=a230r.7195193.1997079397.2.4cdb6cf072S3H2'
      )
    }
  }
}
</script>
<style lang="scss" scoped>
@import './About';
</style>

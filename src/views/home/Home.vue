<template>
  <div class="homePage">
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">官方动态</el-menu-item>
      <el-menu-item index="2">资料库</el-menu-item>
      <el-menu-item index="3">关于</el-menu-item>
    </el-menu>

    <img
      class="background"
      src="https://zbd-image.oss-cn-hangzhou.aliyuncs.com/eastern-knights/background-image/ogre-back.jpg"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
@import './Home';
</style>

<template>
  <div class="bottomBoxBox flex-row-center">
    <div
      class="imgItem flex-row-center"
      v-for="(item,index) in imgList"
      :key="index"
      :style="`animation-delay:${index*0.1}s`"
    >
      <img
        class="imgBox"
        :src="item.img"
        alt=""
      >
      <div class="divider"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'BottomBox',
  data() {
    return {
      imgList: [
        {
          img:
            'https://zbd-image.oss-cn-hangzhou.aliyuncs.com/eastern-knights/background-image/%E4%BD%8D%E5%9B%BE%402x%282%29.png'
        },
        {
          img:
            'https://zbd-image.oss-cn-hangzhou.aliyuncs.com/eastern-knights/background-image/%E4%BD%8D%E5%9B%BE%402x%281%29.png'
        },
        {
          img:
            'https://zbd-image.oss-cn-hangzhou.aliyuncs.com/eastern-knights/background-image/%E4%BD%8D%E5%9B%BE%402x%283%29.png'
        },
        {
          img:
            'https://zbd-image.oss-cn-hangzhou.aliyuncs.com/eastern-knights/background-image/%E4%BD%8D%E5%9B%BE%402x%284%29.png'
        },
        {
          img:
            'https://zbd-image.oss-cn-hangzhou.aliyuncs.com/eastern-knights/background-image/%E4%BD%8D%E5%9B%BE%402x.png'
        },
        {
          img:
            'https://zbd-image.oss-cn-hangzhou.aliyuncs.com/eastern-knights/background-image/%E4%BD%8D%E5%9B%BE%402x%281%29.png'
        },
        {
          img:
            'https://zbd-image.oss-cn-hangzhou.aliyuncs.com/eastern-knights/background-image/%E4%BD%8D%E5%9B%BE%402x%281%29.png'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import './BottomBox';
</style>

<template>
  <div
    class="figureItemBox"
    :style="`animation-delay: ${0.05*figureData.index}s;`"
  >
    <div
      class="figureItem"
      :style="`background-image:url(${figureData.cover});`"
    >
      <img
        class="crown"
        src="https://zbd-image.oss-cn-hangzhou.aliyuncs.com/eastern-knights/%E7%B4%A0%E6%9D%90/crown_767.36778846154px_1284419_easyicon.net.png"
        alt=""
        v-if="figureData.role==='leader'"
      >
      <div class="infoBox flex-column">
        <p class="name">{{figureData.cnName}}</p>
        <p
          class="faction"
          :style="`background-color:${factionColor}`"
        >{{faction}}</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { faction } from '@/enum'
import color from '@/styles/color.scss'
export default {
  name: 'FigureItem',
  props: {
    figureData: {}
  },
  data() {
    return {
      faction: '',
      factionColor: '',
      publicPath: process.env.BASE_URL
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.faction = faction[this.figureData.faction]
      this.factionColor = color[this.figureData.faction]
    }
  }
}
</script>
<style lang="scss" scoped>
@import './FigureItem';
</style>

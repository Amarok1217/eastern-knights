<template>
  <div
    class="mFigureItemBox flex-row-center"
    :style="`border-bottom:solid 0.2rem ${factionColor};`"
  >
    <el-image
      class="cover"
      :src="`${figureData.cover}?x-oss-process=style/mini`"
      fit="cover"
      lazy
    ></el-image>
    <section class="textBox">
      <p class="cnName">{{figureData.cnName}}</p>
    </section>
  </div>
</template>
<script type="text/ecmascript-6">
import { faction } from '@/enum'
import color from '@/styles/color.scss'
export default {
  name: 'MFigureItem',
  props: {
    figureData: {}
  },
  mounted() {
    this.initData()
  },
  data() {
    return {
      faction: '',
      factionColor: ''
    }
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
@import './MFigureItem';
</style>

<template>
  <div
    class="figureItemBox"
    :style="`animation-delay: ${0.05*figureData.index}s;`"
  >
    <div
      class="figureItem"
      :style="`background-image:url(${figureData.cover});`"
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
      factionColor: ''
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

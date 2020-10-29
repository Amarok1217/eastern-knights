<template>
  <div
    class="figureItem"
    :style="`background-image:url(${figureData.cover})`"
  >
    <div class="infoBox">
      <p class="name">{{figureData.cnName}}</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'FigureItem',
  props: {
    figureData: {}
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import './FigureItem';
</style>

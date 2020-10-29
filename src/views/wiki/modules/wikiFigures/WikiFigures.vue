<template>
  <div class="wikiFigures flex-column">
    <p class="title">人物</p>
    <WikiSearchLine @startSearch="initList"></WikiSearchLine>
  </div>
</template>
<script type="text/ecmascript-6">
import WikiSearchLine from './WikiSearchLine'
import { getFigureList } from '@/request/figures'

export default {
  name: 'WikiFigures',
  components: {
    WikiSearchLine
  },
  data() {
    return {}
  },
  mounted() {
    this.initList()
  },
  methods: {
    initList() {
      let params = {
        id: 0
      }
      getFigureList(params).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './WikiFigures';
</style>

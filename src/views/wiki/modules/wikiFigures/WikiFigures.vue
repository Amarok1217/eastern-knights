<template>
  <div class="wikiFigures flex-column">
    <p class="title">人物</p>
    <WikiSearchLine
      ref="wikiSearchLine"
      @startSearch="initList"
    ></WikiSearchLine>
    <section class="figureList flex-row-center">
      <FigureItem
        v-for="(item,index) in figureList"
        :key="index"
        :figureData="{index,...item}"
      ></FigureItem>
    </section>
  </div>
</template>
<script type="text/ecmascript-6">
import WikiSearchLine from './WikiSearchLine'
import FigureItem from '@/components/figureItem/FigureItem'
import { getFigureList } from '@/request/figures'

export default {
  name: 'WikiFigures',
  components: {
    WikiSearchLine,
    FigureItem
  },
  data() {
    return {
      figureList: []
    }
  },
  mounted() {},
  methods: {
    initList() {
      console.log(this.$refs)
      let params = {
        wave: this.$refs.wikiSearchLine.wave,
        race: this.$refs.wikiSearchLine.race,
        role: this.$refs.wikiSearchLine.role,
        faction: this.$refs.wikiSearchLine.faction
      }
      console.log(params)
      getFigureList(params).then((res) => {
        this.figureList = []
        this.$nextTick(() => {
          this.figureList = res.data.data
        })
        console.log(res.data.data)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './WikiFigures';
</style>

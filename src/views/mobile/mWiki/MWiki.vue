<template>
  <div class="mWiki">
    <MobileHeader
      class="searchLine"
      title="资料库"
      :showBack="true"
      @goBack="goBack"
    ></MobileHeader>
    <MWikiSearchLine
      class="searchLine"
      style="animation-delay:0.2s;"
      ref="mWikiSearchLine"
      @selected="selected"
    ></MWikiSearchLine>
    <div class="flex-column-center">
      <MFigureItem
        v-for="(item,index) in figureList"
        :key="index"
      ></MFigureItem>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import MobileHeader from '@/components/mobileHeader/MobileHeader'
import MWikiSearchLine from './mWikiSearchLine/MWikiSearchLine'
import MFigureItem from '@/components/mFigureItem/MFigureItem'
import { getFigureList } from '@/request/figures'

export default {
  name: 'MWiki',
  components: {
    MobileHeader,
    MWikiSearchLine,
    MFigureItem
  },
  data() {
    return {
      total: null,
      pageSize: 12,
      pageNo: 1,
      figureList: []
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    selected() {
      console.log('startSearch')
    },
    initData() {
      let params = {
        wave: this.$refs.mWikiSearchLine.wave,
        race: this.$refs.mWikiSearchLine.race,
        role: this.$refs.mWikiSearchLine.role,
        faction: this.$refs.mWikiSearchLine.faction,
        pageSize: this.pageSize,
        pageNo: this.pageNo
      }
      getFigureList(params).then((res) => {
        this.figureList = []
        this.total = res.data.data.total
        this.$nextTick(() => {
          this.figureList = res.data.data.res
        })
      })
    },
    goBack() {
      window.history.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import './MWiki';
</style>

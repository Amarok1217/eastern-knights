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
    <div class="scrollBox">
      <div
        class="dataBox flex-row-center"
        v-infinite-scroll="onPullingUp"
      >
        <MFigureItem
          v-for="(item,index) in figureList"
          :key="index"
          :figureData="item"
          @click.native="goDetail(item)"
        ></MFigureItem>
      </div>
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
      pageSize: 8,
      pageNo: 1,
      figureList: []
    }
  },
  mounted() {
    this.pageNo = 1
    this.figureList = []
    this.initData()
  },
  methods: {
    selected() {
      this.pageNo = 1
      this.figureList = []
      this.initData()
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
        for (const item of res.data.data.res) {
          this.figureList.push(item)
        }
        this.total = res.data.data.total
      })
    },
    onPullingUp() {
      this.pageNo++
      this.initData()
    },
    goDetail(item) {
      let routeUrl = this.$router.resolve({
        path: '/mFigureDetail',
        query: { id: item.id }
      })
      window.open(routeUrl.href, '_blank')
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

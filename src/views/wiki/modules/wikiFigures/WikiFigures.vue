<template>
  <div class="wikiFigures flex-column">
    <p class="title">人物</p>
    <WikiSearchLine
      ref="wikiSearchLine"
      @startSearch="startSearch"
    ></WikiSearchLine>
    <section class="figureList flex-row-center">
      <FigureItem
        class="listItem"
        v-for="(item,index) in figureList"
        :key="index"
        :figureData="{index,...item}"
        @click.native="goDetail(item)"
      ></FigureItem>
    </section>
    <section class="pageBox flex-column-center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :current-page="pageNo"
        @current-change="changePageNum"
        :page-size="pageSize"
        hide-on-single-page
      >
      </el-pagination>
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
      figureList: [],
      total: null,
      pageSize: 12,
      pageNo: 1
    }
  },
  mounted() {
    if (this.$store.state.figurePageNo > 1) {
      this.pageNo = this.$store.state.figurePageNo
    }
    if (Object.keys(this.$route.params).length > 0) {
      this.pageNo = 1
      this.$refs.wikiSearchLine.initSearchCfg(this.$route.params)
    }
    this.$store.commit('updatePageFigureNo', 1)
    this.initList()
  },
  methods: {
    startSearch() {
      this.pageNo = 1
      this.initList()
    },
    initList() {
      let params = {
        wave: this.$refs.wikiSearchLine.wave,
        race: this.$refs.wikiSearchLine.race,
        role: this.$refs.wikiSearchLine.role,
        faction: this.$refs.wikiSearchLine.faction,
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

    changePageNum(num) {
      this.pageNo = num
      this.initList()
    },
    goDetail(item) {
      this.$store.commit('updatePageFigureNo', this.pageNo)
      this.$router.push({
        name: 'figureDetail',
        query: {
          id: item.id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './WikiFigures';
</style>

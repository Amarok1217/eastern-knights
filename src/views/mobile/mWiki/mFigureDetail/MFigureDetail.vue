<template>
  <div class="mFigureDetail">
    <MobileHeader
      class="searchLine"
      :title="figureDetail.cnName"
      :showBack="true"
      @goBack="goBack"
    ></MobileHeader>
    <span class="nameLine">
      <p class="cnName">{{figureDetail.cnName}}</p>
      <p class="name">{{figureDetail.name}}</p>
    </span>
    <section class="infoBox flex-column">
      <span
        class="infoLine flex-row-center"
        v-for="(item,index) in infoList"
        :key="index"
        :style="`animation-delay: ${0.05*index}s;`"
      >
        <p class="label">{{item.label}}</p>
        <el-button
          class="value"
          type="primary"
          size="small"
          round
        >{{item.value}}</el-button>
      </span>
      <p class="biography">{{figureDetail.biography}}</p>
    </section>
    <p class="name">官方图片</p>
    <section class="imgBox flex-column-center">
      <el-image
        class="imgItem"
        v-for="(item,index) in imgDataList"
        :key="index"
        :src="`${item}?x-oss-process=style/mini`"
        fit="cover"
        lazy
      ></el-image>
    </section>

  </div>
</template>
<script type="text/ecmascript-6">
import MobileHeader from '@/components/mobileHeader/MobileHeader'
import { getFigureById, getFansImgById } from '@/request/figures'
import { faction, wave, race, role } from '@/enum'
export default {
  name: 'MFigureDetail',
  components: {
    MobileHeader
  },
  data() {
    return {
      figureDetail: {},
      infoList: [],
      imgList: [],
      fansImgDataList: [],
      fansImgList: [],
      imgDataList: []
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      let params = {
        id: this.$route.query.id
      }
      getFigureById(params).then((res) => {
        if (res.status === 200) {
          this.figureDetail = res.data.data
          this.initFansImg()
          this.infoList.push({
            label: '阵营',
            value: faction[this.figureDetail.faction],
            originValue: this.figureDetail.faction
          })
          this.infoList.push({
            label: '种族',
            value: race[this.figureDetail.race],
            originValue: this.figureDetail.race
          })
          this.infoList.push({
            label: '职业',
            value: role[this.figureDetail.role],
            originValue: this.figureDetail.role
          })
          this.infoList.push({
            label: '波次',
            value: wave[this.figureDetail.wave],
            originValue: this.figureDetail.wave
          })
          this.imgDataList = this.figureDetail.imgList.split(',')
        }
      })
    },
    initFansImg() {
      let params = { id: this.figureDetail.id }
      getFansImgById(params).then((res) => {
        if (res.status === 200) {
          if (res.data.data.length > 0) {
            this.fansImgList = res.data.data
          }
        }
      })
    },
    goBack() {
      window.opener = null
      var t = window.open('', '_self', '')
      t.close()
    }
  }
}
</script>
<style lang="scss" scoped>
@import './MFigureDetail';
</style>

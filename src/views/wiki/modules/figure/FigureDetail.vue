<template>
  <div class="figureDetail">
    <el-button
      class="backBtn"
      type="primary"
      icon="el-icon-arrow-left"
      size="small"
      @click="goBack"
    >返回</el-button>
    <span class="nameLine flex-row-bottom">
      <p class="cnName">{{figureDetail.cnName}}</p>
      <p class="name">{{figureDetail.name}}</p>
    </span>
    <span class="flex-row">
      <section class="infoBox flex-column">
        <span
          class="infoLine flex-row-center"
          v-for="(item,index) in infoList"
          :key="index"
          :style="`animation-delay: ${0.05*index}s;`"
        >
          <p class="label">{{item.label}}</p>
          <!-- <el-tag
            class="value"
            @click="goList(index,item.originValue)"
          >{{item.value}}</el-tag> -->
          <el-button
            class="value"
            @click="goList(index,item.originValue)"
            type="primary"
            size="small"
            round
          >{{item.value}}</el-button>
        </span>
      </section>
      <section>
        <p class="biography">{{figureDetail.biography}}</p>
      </section>
    </span>
    <p class="officialImg">官方图片</p>
    <div
      class="imgLine flex-row"
      v-viewer="{navbar:true,title:false,toolbar:false}"
    >
      <div
        class="imgBox"
        v-for="(item,index) in imgList"
        :key="index"
      >
        <img
          class="imgItem"
          :src="item+'?x-oss-process=style/zip'"
          :style="`animation-delay: ${0.05*index}s;`"
          @load="loopLoadImg(index+1)"
        />
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { getFigureById } from '@/request/figures'
import { faction, wave, race, role } from '@/enum'

export default {
  name: 'FigureDetail',
  data() {
    return {
      figureDetail: {},
      infoList: [],
      imgList: [],
      imgDataList: [],
      options: { movable: true, zoomable: true },
      publicPath: process.env.BASE_URL
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
          this.loopLoadImg(0)
        }
      })
    },
    loopLoadImg(index) {
      setTimeout(() => {
        if (index < this.imgDataList.length) {
          this.imgList.push(this.imgDataList[index])
        }
      }, 100)
    },
    goList(index, originValue) {
      this.$router.push({
        name: 'wikiFigures',
        params: {
          index: index,
          originValue: originValue
        }
      })
    },
    goBack() {
      window.history.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import './FigureDetail';
</style>
<style lang="scss">
</style>

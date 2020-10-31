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
          <el-tag
            class="value"
            @click="goList(index,item.value)"
          >{{item.value}}</el-tag>
        </span>
      </section>
      <section>
        <p class="biography">{{figureDetail.biography}}</p>
      </section>
    </span>
    <div
      class="imgLine flex-row"
      v-viewer="{navbar:false,title:false,toolbar:false}"
    >
      <div
        class="imgBox"
        v-for="(item,index) in imgList"
        :key="index"
      >
        <img
          class="imgItem"
          :src="item"
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
          this.infoList.push({
            label: '阵营',
            value: faction[this.figureDetail.faction]
          })
          this.infoList.push({
            label: '种族',
            value: race[this.figureDetail.race]
          })
          this.infoList.push({
            label: '职业',
            value: role[this.figureDetail.role]
          })
          this.infoList.push({
            label: '波次',
            value: wave[this.figureDetail.wave]
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
    goList(index, value) {
      console.log(index, value)
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

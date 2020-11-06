<template>
  <div class="searchLineBox">
    <section class="lineBox flex-row-center">
      <section
        class="searchItem flex-row-center"
        @click="selectTag('wave')"
      >
        <p class="currentTag">{{waveName}}</p>
        <i class="arrowIcon el-icon-caret-bottom"></i>
      </section>
      <section
        class="searchItem flex-row-center"
        @click="selectTag('race')"
      >
        <p class="currentTag">{{raceName}}</p>
        <i class="arrowIcon el-icon-caret-bottom"></i>
      </section>
      <section
        class="searchItem flex-row-center"
        @click="selectTag('role')"
      >
        <p class="currentTag">{{roleName}}</p>
        <i class="arrowIcon el-icon-caret-bottom"></i>
      </section>
      <section
        class="searchItem flex-row-center"
        style="border-right:0;"
        @click="selectTag('faction')"
      >
        <p class="currentTag">{{factionName}}</p>
        <i class="arrowIcon el-icon-caret-bottom"></i>
      </section>
    </section>
  </div>
</template>
<script type="text/ecmascript-6">
import { getArr, wave, race, role, faction } from '@/enum'
export default {
  name: 'MWikiSearchLine',
  data() {
    return {
      wave: 'all',
      waveOptions: getArr(wave),
      waveName: '全部波次',
      race: 'all',
      raceOptions: getArr(race),
      raceName: '全部种族',
      role: 'all',
      roleOptions: getArr(role),
      roleName: '全部职业',
      faction: 'all',
      factionOptions: getArr(faction),
      factionName: '全部阵营',
      currentTag: ''
    }
  },
  methods: {
    selectTag(tagName) {
      this.currentTag = tagName
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: this.getOptions(tagName).title,
          data: [this.getOptions(tagName).options],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      } else {
        this.picker.$updateProps({
          title: this.getOptions(tagName).title,
          data: [this.getOptions(tagName).options],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this[this.currentTag] = selectedVal
      this[`${this.currentTag}Name`] = selectedText[0]
      this.$emit('selected')
      this.currentTag = ''
    },
    cancelHandle() {},
    getOptions(tagName) {
      let item = {
        wave: {
          options: this.waveOptions,
          title: '波次'
        },
        race: {
          options: this.raceOptions,
          title: '种族'
        },
        role: {
          options: this.roleOptions,
          title: '职业'
        },
        faction: {
          options: this.factionOptions,
          title: '阵营'
        }
      }
      return {
        options: item[tagName].options,
        title: item[tagName].title
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import './MWikiSearchLine';
</style>

<template>
  <section class="searchLine flex-row-center">
    <el-select
      size="small"
      v-model="wave"
      placeholder="请选择"
      class="searchSelect"
    >
      <el-option
        v-for="item in waveOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-select
      size="small"
      v-model="race"
      placeholder="请选择"
      class="searchSelect"
    >
      <el-option
        v-for="item in raceOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-select
      size="small"
      v-model="role"
      placeholder="请选择"
      class="searchSelect"
    >
      <el-option
        v-for="item in roleOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-select
      size="small"
      v-model="faction"
      placeholder="请选择"
      class="searchSelect"
    >
      <el-option
        v-for="item in factionOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-button
      size="small"
      type="primary"
      @click="startSearch"
    >搜索</el-button>
    <el-button
      size="small"
      @click="restSearch"
    >重置</el-button>
  </section>
</template>
<script type="text/ecmascript-6">
import { getArr, wave, race, role, faction } from '@/enum'
export default {
  name: 'WikiSearchLine',
  data() {
    return {
      wave: 'all',
      waveOptions: getArr(wave),
      race: 'all',
      raceOptions: getArr(race),
      role: 'all',
      roleOptions: getArr(role),
      faction: 'all',
      factionOptions: getArr(faction)
    }
  },
  mounted() {
  },
  methods: {
    startSearch() {
      this.$emit('startSearch')
    },
    restSearch() {
      this.wave = 'all'
      this.race = 'all'
      this.role = 'all'
      this.faction = 'all'
      this.startSearch()
    }
  }
}
</script>
<style lang="scss" scoped>
@import './WikiSearchLine';
</style>

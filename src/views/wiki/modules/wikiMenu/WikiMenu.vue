<template>
  <div class="wikiMenu">
    <el-menu
      default-active="wikiFigures"
      class="wikiMenu"
      :router="true"
    >
      <el-menu-item index="wikiFigures">
        <i class="el-icon-user"></i>
        <span slot="title">人物</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script type="text/ecmascript-6">
import color from '@/styles/color.scss'
export default {
  name: 'WikiMenu',
  data() {
    return {
      mColor: color
    }
  }
}
</script>
<style lang="scss" scoped>
@import './WikiMenu';
</style>

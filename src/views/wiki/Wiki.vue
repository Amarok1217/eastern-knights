<template>
  <div class="wikiPage flex-row-center">
    <WikiMenu></WikiMenu>
    <router-view class="wikiRouter" />
  </div>
</template>
<script type="text/ecmascript-6">
import WikiMenu from './modules/wikiMenu/WikiMenu'
import { getFigureList } from '@/request/figures'
import color from '@/styles/color.scss'
export default {
  name: 'Wiki',
  components: {
    WikiMenu
  },
  data() {
    return {
      mColor: color
    }
  },
  mounted() {
    console.log(color)
    this.initList()
  },
  methods: {
    initList() {
      let params = {
        id: 0
      }
      getFigureList(params).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './Wiki';
</style>

<template>
  <div class="wikiPage flex-row">
    <WikiMenu></WikiMenu>
    <router-view class="wikiRouter" />
  </div>
</template>
<script type="text/ecmascript-6">
import WikiMenu from './modules/wikiMenu/WikiMenu'
export default {
  name: 'Wiki',
  components: {
    WikiMenu
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
@import './Wiki';
</style>

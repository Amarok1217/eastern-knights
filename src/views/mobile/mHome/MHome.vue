<template>
  <div class="mobileHome flex-column-center">
    <MobileHeader title="EasternKnights-东方骑士团"></MobileHeader>
    <p
      class="itemTag"
      @click="goMWiki"
    >资料库</p>
  </div>
</template>
<script type="text/ecmascript-6">
import MobileHeader from '@/components/mobileHeader/MobileHeader'
export default {
  name: 'MHome',
  components: {
    MobileHeader
  },
  data() {
    return {}
  },
  methods: {
    goMWiki() {
      this.$router.push('mWiki')
    }
  }
}
</script>
<style lang="scss" scoped>
@import './MHome';
</style>

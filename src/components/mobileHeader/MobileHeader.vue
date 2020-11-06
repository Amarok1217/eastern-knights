<template>
  <div class="mobileHeader flex-column-center">
    <p class="mobileTitle">{{title}}</p>
    <i
      v-if="showBack"
      class="backBtn el-icon-arrow-left"
      @click="goBack"
    ></i>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'MobileHeader',
  props: {
    title: {},
    showBack: {
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    goBack() {
      this.$emit('goBack')
    }
  }
}
</script>
<style lang="scss" scoped>
@import './MobileHeader';
</style>

<template>
  <span class="header bg-headerColor flex-row-center">
    <p
      class="headerText"
      v-for="(item,index) in tagList"
      :key="index"
    >{{item.label}}</p>
  </span>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'Header',
  data() {
    return {
      tagList: [
        {
          label: '官方动态'
        },
        {
          label: '资料库'
        },
        {
          label: '关于'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import './Header';
</style>

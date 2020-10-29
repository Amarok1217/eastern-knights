<template>
  <span class="headerBox bg-headerColor flex-row-center">
    <p
      class="headerText"
      v-for="(item,index) in tagList"
      :class="!$route.path.indexOf(item.pageName)?'currentHeader':''"
      :style="`animation-delay:${index * 0.1}s`"
      :key="index"
      @click="selectHeader(item)"
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
          label: '首页',
          id: 0,
          pageName: '/homePage'
        },
        {
          label: '官方动态',
          id: 1,
          pageName: '/officialMsg'
        },
        {
          label: '资料库',
          id: 2,
          pageName: '/wiki'
        },
        {
          label: '关于',
          id: 3,
          pageName: '/about'
        }
      ],
      currentId: 0
    }
  },
  mounted() {
    console.log(this.$route.path)
  },
  methods: {
    selectHeader(item) {
      this.currentId = item.id
      this.$emit('goPage', item.pageName)
    }
  }
}
</script>
<style lang="scss" scoped>
@import './Header';
</style>

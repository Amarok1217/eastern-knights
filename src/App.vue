<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {
    if (!this.isPC()) {
      this.$router.push('/MHome')
    }
    console.log(this.isPC())
  },
  methods: {
    // 判断移动端
    isPC() {
      let userAgentInfo = navigator.userAgent
      let Agents = [
        'Android',
        'iPhone',
        'SymbianOS',
        'Windows Phone',
        'iPad',
        'iPod'
      ]
      let flag = true
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/global';
@import '@/styles/color';
html,
body {
  margin: 0px;
  width: 100%;
  height: 100%;
  p {
    // display: block;
    margin: 0;
    padding: 0;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
  span {
    display: inline;
  }
  // ::-webkit-scrollbar {
  //   background-color: $bgColor;
  //   width: 8px;
  //   // background-color: antiquewhite;
  // }
  // ::-webkit-scrollbar-thumb {
  //   border-radius: 10px;
  //   background-color: $textColor;
  // }
}
#app {
  height: 100%;
}
</style>

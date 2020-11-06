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
  mounted() {},
  methods: {}
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

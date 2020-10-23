<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/styles/global';
html,
body {
  margin: 0px;
  width: 100%;
  height: 100%;
  p {
    display: block;
    margin: 0;
    padding: 0;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
}
#app {
  height: 100%;
}
</style>

<template>
  <div class="homePage flex-row">
    <TextBox></TextBox>
    <Posters></Posters>
    <BottomBox class="bottomBox"></BottomBox>
  </div>
</template>
<script type="text/ecmascript-6">
import TextBox from './modules/TextBox'
import Posters from './modules/Posters'
import BottomBox from './modules/BottomBox'
export default {
  name: 'HomePage',
  components: {
    TextBox,
    Posters,
    BottomBox
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import './HomePage';
</style>

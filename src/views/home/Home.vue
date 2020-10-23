<template>
  <div class="home bg-bgColor">
    <Header
      class="header"
      @goPage="goPage"
    ></Header>
    <router-view class="router" />
  </div>
</template>

<script>
import Header from '@/components/header/Header'
export default {
  name: 'home',
  components: { Header },
  data() {
    return {}
  },
  methods: {
    goPage(pageName) {
      this.$router.push(pageName)
    }
  }
}
</script>
<style lang="scss" scoped>
@import './Home';
</style>

<template>
  <div class="homePage bg-bgColor">
    <Header @goPage="goPage"></Header>
    <router-view />
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

<template>
  <div class="homePage bg-bgColor">
    <Header></Header>
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
  methods: {}
}
</script>
<style lang="scss" scoped>
@import './Home';
</style>

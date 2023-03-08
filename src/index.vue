<template>
  <div class="screen_container">
    <screen-map></screen-map>
    <screen-header></screen-header>
    <screen-left></screen-left>
    <screen-right></screen-right>
    <screen-bottom></screen-bottom>

  </div>
</template>

<script>
import ScreenMap from './components/centerMap.vue'
import ScreenHeader from './components/header.vue'
import ScreenLeft from './components/left.vue'
import ScreenRight from './components/right.vue'
import ScreenBottom from './components/bottom.vue'

export default {
  components: {
    ScreenMap,
    ScreenHeader,
    ScreenLeft,
    ScreenRight,
    ScreenBottom
  }
}
</script>

<style lang="scss" scoped>
.screen_container {
  width: 100vw;
  height: 100vh;
  background-color: #000c2e;
}
</style>
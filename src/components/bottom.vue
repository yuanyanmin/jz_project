<template>
  <div class="screen-bottom">
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.screen-bottom {
  position: absolute;
  left: 0.1rem;
  // bottom: 0.01rem;
  // top: 6.2rem;
  top: calc(61% + 0.62rem);
  width: 99%;
  display: flex;
  justify-content: space-around;
  height: calc(39% - 0.62rem - 0.2rem);
  // height: 2rem;
  overflow: hidden;
  // background: #999;
}
</style>
<template>
  <div class="header">
    <div class="title_box">
      <p>{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '展示'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 5;
  top: 0;
  width: 100%;
  height: 0.62rem;
  line-height: 0.62rem;
  text-align: center;
  font-size: 0.24rem;
  font-weight: 400;
  color: #fff;
  background: url('../assets/screen_icon/header.png') no-repeat;
  background-size: 100% 100%;
  .title_box {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
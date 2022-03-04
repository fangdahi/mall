<template>
  <div class="nav-bar">
    <div class="left"><slot name="nav-bar-left"></slot></div>
    <div class="center"><slot name="nav-bar-center"></slot></div>
    <div class="right"><slot name="nav-bar-right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  display: flex;
  height: 49px;
  line-height: 49px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}

.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>

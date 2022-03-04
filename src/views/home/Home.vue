<template>
  <nav-bar id="home">
    <template v-slot:nav-bar-center> 购物街 </template>
  </nav-bar>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
#home {
  color: #fff;
  background-color: var(--color-tint);
}
</style>

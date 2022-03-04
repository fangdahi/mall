<template>
  <nav-bar id="home-nav">
    <template v-slot:nav-bar-center> 购物街 </template>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComs/HomeSwiper.vue";
import RecommendView from "./childComs/RecommendView.vue";
import { getHomeMultidata } from "../../components/network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  created() {
    getHomeMultidata().then((res) => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
#home-nav {
  color: #fff;
  background-color: var(--color-tint);
}
</style>

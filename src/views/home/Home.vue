<template>
  <nav-bar id="home-nav">
    <template v-slot:nav-bar-center> 购物街 </template>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
  <feature-view></feature-view>
  <tab-control :titles="titles" class="tab-control"></tab-control>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComs/HomeSwiper.vue";
import RecommendView from "./childComs/RecommendView.vue";
import FeatureView from "./childComs/FeatureView.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import { getHomeMultidata } from "../../components/network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
#home-nav {
  position: sticky;
  top: 0;
  color: #fff;
  background-color: var(--color-tint);
  z-index: 9;
}

.tab-control {
	position: sticky;
	top: 44px;
}
</style>

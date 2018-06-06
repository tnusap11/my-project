<template>
    <div class="home">
        <my-header></my-header>
        <carousel></carousel>
        <activity></activity>
        <recommend></recommend>
    </div>
</template>

<script>
import MyHeader from "@/components/myHeader";
import Carousel from "@/components/carousel";
import Activity from "@/components/activity";
import Recommend from "@/components/recommend.vue";
export default {
  name: "home",
  components: {
    MyHeader,
    Carousel,
    Activity,
    Recommend
  },
  data() {
    return {
      msg: "hollo vue"
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>

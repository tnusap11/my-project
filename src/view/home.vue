<template>
  <div class="home">
    <my-header></my-header>
    <carousel></carousel>
    <activity></activity>
    <recommend></recommend>
  </div>
</template>
<script>
import axios from 'axios'
import MyHeader from "@/components/myHeader";
import Carousel from "@/components/carousel";
import Activity from "@/components/activity";
import Recommend from "@/components/recommend";
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
      msg: "hello vue"
    };
  },
  mounted() {
    this.getIndexData();
  },
  methods: {
    getIndexData() {
      axios.get("/api/index").then(res => {
        let data = res.data;
        console.log(data);
      });
    }
  }
};
</script>
<style scoped>
</style>
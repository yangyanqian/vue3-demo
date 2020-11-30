<template>
  <div class="home">
    <div class="wrapper">
      <left-title />  
      <!-- 内容 -->
      <div class="content">
        <content-header :title="title" :name="Name"/>
        <div class="con-wrap px-3 mt-3">
          <transition enter-active-class="animate__animated animate__zoomIn">
            <router-view/>
          </transition> 
        </div>
      </div> 
      <!-- 用户相片展 -->
      <user-profile :imgUrl="imgUrl" />
    </div>
  </div>
</template>

<script>
/* //watchEffect 观察效应
import { ref, watch, watchEffect, computed } from 'vue';
import { useRouter } from "vue-router"; */
import { pageJump, pageToSign } from "../lib/router-lib.js"

import leftTitle from "@/components/left-title.vue"; //左侧
import userProfile from "@/components/user-profile.vue"; //右侧个人图片展
import contentHeader from "@/components/content-header.vue"; //内容

export default {
  components: {
    leftTitle,
    userProfile,
    contentHeader
  },
  setup(){
    /* const router = useRouter();
    const title = ref("I'm");
    const Name = ref("YQ"); */
    
    /*
    //watch
    watch(router.currentRoute, ({ path, name }) => {
      console.log(path, name);
      title.value = path == "/" ? "I'm" : "";
      Name.value = path == "/" ? "YQ" : name;
    }, {
      immediate: true //立即的，一开始就监听路由
    }) */

    /* //watchEffect, 一开始就能监听路由
    watchEffect(() => {
      console.log(router.currentRoute.value);
      const { path, name } = router.currentRoute.value;
      title.value = path == "/" ? "I'm" : "";
      Name.value = path == "/" ? "YQ" : name;
    }) */

    /* //computed
    const title = computed(() => {
      const { path } = router.currentRoute.value;
      return path == "/" ? "I'm" : "";
    })
    const Name = computed(() => {
      const { path, name } = router.currentRoute.value;
      return path == "/" ? "YQ" : name;
    }) */

    const { title, Name } = pageToSign();

    return {
      imgUrl: require('../assets/img/girl.jpg'),
      title,
      Name,
    }
  },
  //监听router
  /* watch: {
    $route(newVal) {
      console.log(newVal);
    }
  } */
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.home {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/timg4.jpg");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
.wrapper {
  width: 95vw;
  height: 90vh;
  display: flex;
  background-color: #444480;
  border-radius: 8px;
  position: absolute;
  left: calc(50% - 95vw / 2);
  top: calc(50% - 90vh / 2);
}
.content {
  width: calc(70% - 50px);
  min-height: 100%;
}
</style>
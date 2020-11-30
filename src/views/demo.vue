<template>
  <div>
    <!-- <div class="iconfont icon-tuichu"></div> -->
    <my-icon id="icon-tuichu" color="text-primary" :size="50"></my-icon>
    <!-- <button @click="changeStatus">点击</button>
    <div class="animate__animated animate__bounce" v-if="status">
      随便写文字随便写文字随便写文字
    </div> -->
  </div>
</template>
 
<script>
import { ref } from "vue";
const status = ref(false);
console.log(status);
const changeStatus = () => (status.value = !status.value);
export default {
  name: 'Home',
  setup(){
    return {
      status,
      changeStatus
    }
  }
}
</script>

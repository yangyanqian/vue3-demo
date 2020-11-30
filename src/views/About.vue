<template>
  <div class="px-4">
    <tip title="Personal info"></tip>
    <div class="info-wrap rounded p-3 mt-3">
      <div class="info-box rounded p-3 mb-3">张三，中国人最耳bai熟能详的名字du。张三可能真有其人，zhi但更多时dao候与李四、王五一起zhuan指代不特定的shu某个人，揶揄或者概括常用。例如古代说书人常说：那张三的李四的都来了。也常被用在文学影视作品中。因此名平常普通，近来也被用来指代一个普通人群体，即“张三族”。</div>
      <div class="d-flex">
        <div class="info">
          <div class="iconfont icon-tuliweizhi-youxia"></div>
          <div>First Name: 张</div> 
        </div>
        <div class="info">
          <div class="iconfont icon-tuliweizhi-youxia"></div>
          <div>Last Name: 三</div> 
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
  import tip from "@/components/common/tip.vue"
  export default {
    components: {
      tip
    }
  }
</script>

<style scoped>
.info-wrap {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}
.info-box {
  background-color: rgba(255, 255, 255, 0.2);
}
.info {
  width: calc(50% - 20px);
  float: left;
  padding: 20px 0px 20px 20px;
}
</style>

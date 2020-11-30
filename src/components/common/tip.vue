<template>
  <div class="tip">
    <div :class="tipColor"><b>{{title}}</b></div>
    <div id="line" :class="['bg-primary', 'rounded', tipColor]"></div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: "Content"
      },
      tipColor: {
        type: String,
        default: "text-white"
      }
    },

  }
</script>

<style scoped>
.tip {
  color: #fff;
  font-size: 18px;
}
#line {
  height: 5px;
  width: 50px;
}
</style>
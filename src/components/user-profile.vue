<template>
  <div class="user-profile" :style="{ backgroundImage: `url(${imgUrl})` }"></div>
</template>

<script>
  export default {
    props: {
      imgUrl: {
        type: String,
        default: ""
      }
    },
  }
</script>

<style scoped>
.user-profile {
  width: calc(30% - 8px);
  margin: 8px;
  margin-left: 0;
  height: calc(100% - 16px);
  border-radius: 8px;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>
<template>
  <div class="title d-flex flex-column">
    <my-icon :id="id" color="text-warning" size="40"></my-icon>
    <div class="text flex-grow-1">{{text}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        default: "icon-wangluo"
      },
      text: {
        type: String,
        default: "Welcom to here"
      }
    }
  }
</script>

<style scoped>
.title {
  width: 50px;
  text-align: center;
}
.text {
  width: 50px;
  border-radius: 6px;
  font-size: 30px;
  color: rgb(255, 191, 121);
  background-color: rgba(52, 57, 92, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-lr;
}
</style>
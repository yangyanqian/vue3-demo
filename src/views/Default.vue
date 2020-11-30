<template>
  <div class="default w-100">
    <div class="row">
      <button type="button" class="col btn btn-light rounded border-0 mr-2" @click="toPage('About')">
        <my-icon id="icon-book-copy" color="text-danger"></my-icon>
        <b>About me</b>
      </button>
      <button type="button" class="col btn btn-light rounded border-0" @click="toPage('Resume')">
        <my-icon id="icon-xinxi" color="text-warning"></my-icon>
        <b>Resume</b>
      </button>
    </div>
    <div class="row mt-2">
      <button type="button" class="col btn btn-light rounded border-0" @click="toPage('Portfolio')">
        <my-icon id="icon-gongjuxiang" color="text-info"></my-icon>
        <b>Portfolio</b>
      </button>
    </div>
  </div>
</template>

<script>
  import { pageJump } from "../lib/router-lib.js"
  export default {
    setup(){
      const { toPage } = pageJump();
      return {
        toPage
      };
    }
    /* methods: {
      toPath(path) {
        this.$router.push(path);
      }
    } */
  }
</script>

<style scoped>
.row {
  height: 34vh;
  margin: 0;
}
</style>
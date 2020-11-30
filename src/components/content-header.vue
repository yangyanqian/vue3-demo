<template>
  <div class="con-header">
    <div class="con-name d-flex mb-1">
      <h1>{{title}}</h1>&nbsp;&nbsp;
      <h1>{{name}}</h1>
    </div>
    <h4>你已被赞{{count}}次</h4>
    <div class="edit" v-show="editIsShow">
      <my-icon id="icon-tuichu" color="text-white" size="35"></my-icon>
    </div>
    
  </div>
</template>

<script>
  import { ref, computed } from "vue";
  import { useRouter } from "vue-router";
  
  let editIsShow = ref(false); //退出icon是否显示
  export default {
    props: {
      title: {
        type: String,
        default: "I'm"
      },
      name: {
        type: String,
        default: "YQ"
      },
      count: {
        type: [ Number, String ],
        default: 300
      }
    },
    setup(){
      let router = useRouter();
      editIsShow = computed(() => {
        const { path } = router.currentRoute.value;
        console.log(path);
        return path == "/" ? false : true;
      })
      console.log(editIsShow);
      return {
        editIsShow
      }
    },
  }
</script>

<style scoped>
.con-header {
  width: 100%;
  height: 15vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.con-header h1:nth-of-type(2){
  color: rgb(6, 255, 247);
}
.con-header h4 {
  font-size: 16px;
  color: rgb(235, 235, 235);
}
.edit {
  position: absolute;
  right: 20px;
  cursor: pointer;
}
</style>
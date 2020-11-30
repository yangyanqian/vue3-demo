import { computed } from "vue"
import { useRouter } from "vue-router";
//路由跳转
const pageJump = () => {
  const router = useRouter();
  const toPage = path => router.push(path);
  return {
    toPage
  }
}

//路由跳转后头部信息显示的变换
const pageToSign = () => {
  const router = useRouter();
  const title = computed(() => {
    const { path } = router.currentRoute.value;
    return path == "/" ? "I'm" : "";
  })
  const Name = computed(() => {
    const { path, name } = router.currentRoute.value;
    return path == "/" ? "YQ" : name;
  })
  return {
    title,
    Name
  }
}
export { pageJump, pageToSign }
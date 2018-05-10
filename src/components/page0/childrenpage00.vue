<template>
  <div class="hello">
    <p>跳转到了一个深层级的页面 </p>
    <a @click="$goRoute('/page00')">上一级</a>
    <a @click="$goRoute('/')">回到首页</a>
    <a @click="$goRoute('/page02')">飞到page02</a>
    <router-view></router-view>
  </div>

</template>

<script >
export default {
  name: 'childrenpage00',
  data () {
    return {
    }
  },

}
</script>
<style scoped>
  a{
    display: block;
    margin-top: 30px;
  }
</style>

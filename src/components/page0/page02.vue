<template>
  <div class="hello">
    <BaseHead></BaseHead>
    <p>🐶🐶🐶🐶🐶    练习一把store</p>
    <div class=""> 来自远方的赋值: {{author}}  🐶🐶 </div>

    <router-view></router-view>
  </div>

</template>

<script >
import BaseHead from '@/components/baseHead'
export default {
  name: 'page02',
  data () {
    return {
    }
  },
  computed: {
    author () {
      // return this.$store.state.author   //初始方法
      return this.$store.getters.getAuthor  //获取到了 数值  但是存在问题 刷新数据消失
    }
  },
  components: {
    //必须引入组件
		BaseHead
	}

}
</script>
<style scoped>
  a{
    display: block;
    margin-top: 30px;
  }
</style>

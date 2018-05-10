<template>
  <div class="hello">
    <BaseHead></BaseHead>
    <p>啊啊啊啊啊  没有接口了写不动了  一脸懵逼 🐶🐶🐶🐶🐶</p>
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

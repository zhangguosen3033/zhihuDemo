<template>
  <div class="hello">
    <BaseHead></BaseHead>
    <p>页面路由跳转练习: "{{ message }}这是首页"</p>
    <ul>
      <li v-for="item in links">
        <a @click="$goRoute(item.route)">{{item.text}}</a>
      </li>
    </ul>
    <router-view ></router-view>
  </div>
</template>

<script>
import BaseHead from '@/components/baseHead'
export default {
  name: 'HelloWorld',
  data () {
    return {
      links: [
        {
          text: 'page00界面',
          route: '/page00'
        },
        {
          text: 'page01界面',
          route: '/page01'
        },
        {
          text: 'page02界面',
          route: '/page02'
        }],
      message: 'Hello'
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  components: {
    //必须引入组件
		BaseHead
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1, h2 {
  font-weight: normal;
}
ul{
  list-style: none;
  margin-top: 50px;
}
li{
  float: left;
  padding-left: 15px;
  padding-right: 15px;
  /* padding: 0,15px; //无效 */
}
</style>

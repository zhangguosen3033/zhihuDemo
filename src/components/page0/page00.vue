<template>
  <div class="page00">
    <BaseHead></BaseHead>
    <!-- <p>跳转到了page00界面</p> -->
    <ul>
      <li v-for="item in focusList" :key="">
        <!-- <img :src="item.images" alt=""> //图片网址加载不出来 -->
        <div class="content">{{item.title}}
        </div>
      </li>
    </ul>
    <router-view></router-view>

  </div>
</template>

<script >
import BaseHead from '@/components/baseHead'

export default {
  name: 'page00',
  data () {
    return {
      focusList:[]

    }
  },
  mounted() {
    //do something after mounting vue instance
    this.getFocusLists()
  },
  methods: {
    getFocusLists() {
      var vm = this;
      this.$http.get('/news/latest').then(function(res){
        vm.focusList = res.data.stories;
        console.log(vm.focusList);
      })
      .catch(function (err) {
        console.log(err)
      })
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
  ul{
    margin-top: 0px;
    list-style: none;
    margin-left: -20px;
 }
 li{
   margin-top: 10px;
   text-align: left;
   height: 60px;
   /* background-color: red; */
 }
 .content{
   display:flex;/*Flex布局*/
   display: -webkit-flex; /* Safari */
   align-items:center;/*指定垂直居中*/
   height: 60px;
   border-bottom: 1px double   #f3f3f3;
   /* background-color: red; */
 }

/* img{
  width: 40px;
  height: 40px;
  background-color: black;
} */
</style>

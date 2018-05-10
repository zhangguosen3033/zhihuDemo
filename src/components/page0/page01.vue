<template>
  <div class="hello">
    <BaseHead></BaseHead>
    <ul>
      <li v-for="item in focusList" :key="">
        <router-link :to="{name: 'childrenpage01', params: {id: item.id}}" tag="div">
        <!-- <img :src="item.images" alt=""> //图片网址加载不出来 -->
        <div class="content">
          <div class="title">{{item.name}}</div>
          <div class="description">{{item.description}}</div>
        </div>
      </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>

</template>

<script >
import BaseHead from '@/components/baseHead'
export default {
  name: 'page01',
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
      this.$http.get('/themes').then(function(res){
        vm.focusList = res.data.others;
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
template{
  background-color: gray;
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
     height: 60px;
     border-bottom: 1px double   #f3f3f3;
     /* background-color: red; */

   }
   .title{
     display:flex;/*Flex布局*/
     align-items:center;/*指定垂直居中*/
     margin-top: 15px;
     /* background-color: red; */

   }
   .description{
     display:flex;/*Flex布局*/
     align-items:center;/*指定垂直居中*/
     font-size: 14px;
    /* background-color: red; */

   }
</style>

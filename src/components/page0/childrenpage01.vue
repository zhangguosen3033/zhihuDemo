<template>
  <div class="hello">
    <a @click="$goRoute('/page01')">返回上一级</a>
    <div v-html= "focusList ? 'focusList':'专题接口出问题了'" ></div>
    <input type="input" name="" value="" placeholder="接口反正没数据输入别的吧" v-model="inputText">
    <!-- //动态绑定值 -->
    <button type="submit" name="button" @click="setName">提交</button>
    <router-view></router-view>
  </div>

</template>

<script >
export default {
  name: 'childrenpage01',
  data () {
    return {
      focusList:""
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.getFocusLists()
  },
  methods: {
    getFocusLists() {
      var vm = this;
      this.$http.get('/themes/' + this.$route.params.id).then(function(res){
        vm.focusList = res.data.body;
        console.log(vm.focusList);
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    setName: function () {
      // this.$store.state.author = this.inputText  //使用赋值的方式直接修改
      // this.$store.commit('newAuthor' ,this.inputText)  //官方推荐  这个是操作mutations
      this.$store.dispatch('newAuthor',this.inputText)
      alert('提交成功返回上一级去看看');
    }
  },

}
</script>
<style scoped>
  a{
    display: block;
    margin-top: 30px;
  }
  input{
    margin-top: 40px;
    margin-left: 0px;
    width: 200px;
    height: 15px;
    border-width: 0.5px;
    border-color: black;
  }
  button{
    width: 50px;
    height: 20px;
  }
</style>

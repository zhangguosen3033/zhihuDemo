<template>
  <div class="hello">
    <a @click="$goRoute('/page00')">返回上一级</a>
    <div v-html= "focusList" ></div>
    <router-view></router-view>
  </div>

</template>

<script >
export default {
  name: 'childrenpage00',
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
      this.$http.get('/news/' + this.$route.params.id).then(function(res){
        vm.focusList = res.data.body;
        console.log(vm.focusList);
      })
      .catch(function (err) {
        console.log(err)
      })
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

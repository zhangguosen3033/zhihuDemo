<template>
  <div>
 	<div class="zhihu-head">
 		<div class="m1">知乎日报</div>
 		<ul class="mt2">
 			<li class="col">
 				<router-link class="h5" to="/page00">日报</router-link>
 			</li>
 			<li class="col">
 				<router-link class="h5" to="/page01">专题</router-link>
 			</li>
 			<li class="col">
 				<router-link class="h5" to="/page02">关于</router-link>
 			</li>
 		</ul>
 	</div>

 </div>
</template>
<script>
export default {
	data: function() {
		return {}
	},
	name: 'BaseHead',
	components: {

	},
	methods: {

	}
}
</script>
<style scoped>
.zhihu-head {
  position: relative;
	/* ===position and size=== */
	width: 100%;
	height: 4.5rem;
	/* ===color=== */
	background-color: white;
	border-bottom: 2px solid #F5F4F4;
}

.m1{
  position: absolute;
  margin-top: 0.5rem;
  margin-left: 1rem;
  color: black;
}
.mt2{
  position: absolute;
  text-align: center;
  margin-top: 2rem;
}
.col{
  /* background-color: black; */
  text-align: center;
  padding-right: 3rem;
  display: inline;
}
.h5{
  color: black !important;
  font-size: 1.2rem;

}
.zhihu-head a {
	color: #333333;
	outline: none;
}

</style>

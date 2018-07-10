<template>
  <div id="app">
		<div style="height: 1%;width: 100%;background: #5d9cf8;position: fixed;top: 0%;left: 0;z-index:9"></div>
    <lf class="left"></lf>
    <!--<rg class="right"></rg>-->
     <router-view class="view"></router-view>
  </div>
</template>

<script>
	import left from './left.vue'
	import right from './right.vue'
export default {
  name: 'App',
  components:{
  	"lf":left,
  	"rg":right
  }
}
</script>

<style scoped="scoped">
	
	html,body,#app {height: 100%;}
	.view{
float: right;

	}
.left{
	position: fixed;
	top: 1%;
	left: 0;
}
.right{

}
</style>

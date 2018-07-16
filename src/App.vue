<template>
  <div id="app">
		<div style="height: 1%;width: 100%;background: #5d9cf8;position: fixed;top: 0%;left: 0;z-index:9"></div>
    <lf class="left" v-on:bool="bool"></lf>
    <!--<rg class="right"></rg>-->
     <router-view class="view"></router-view>
     <div id="black_box" v-if="bool2" @click="close"></div>
     <div id="modal" ref="mdl">
     	<div id="header">
     		
     	</div>
     </div>
  </div>
</template>

<script>
	import left from './left.vue'
	import right from './right.vue'
export default {
  name: 'App',
  data(){
  	
  
  return {
  	bool2:false
  }
  },
  components:{
  	"lf":left,
  	"rg":right
  },
  methods:{
  	close(){
  		this.bool2=false
  		this.box_hide()
  	},
  	box_hide(){
  		if(this.bool2==true){
  			this.$refs.mdl.style.right=0
  		}else{
  			this.$refs.mdl.style.right='-60%'
  			
  		}
  	},
  	bool:function(boo){
  		this.bool2=boo
  		this.box_hide()
  		
  	}
  }
}
</script>

<style scoped="scoped">
	#header{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #9a9a9a;
	}
	#black_box{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: black;
		opacity: 0.3;
		z-index:98;
	}
	#modal{
		width: 60%;
		height: 100%;
		background: white;
		z-index: 99;
		position: fixed;
		top: 0;
		right: -60%;
		transition: all .5s;
	}
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

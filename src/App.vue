<template>
  <div id="app">
		<div style="height: 1%;width: 100%;background: #5d9cf8;position: fixed;top: 0%;left: 0;z-index:9"></div>
    <lf class="left" v-on:bool="bool"></lf>
    <!--<rg class="right"></rg>-->
     <router-view class="view" ></router-view>
     <div id="black_box" v-if="bool2" @click="close"></div>
     <div id="modal" ref="mdl">
     	<div id="header">
     		<div>
     		<button class="btn" ref="a">日报内容</button>
     		<button class="btn" id="blue">日报考核</button>
     		</div>
     		<p >admin日报考评 {{time}}</p>
     		<button class="btn" style="margin-right: 5px;width: 55px;color: white;background: #1E90FF;border: none;">保存</button>
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
  	bool2:false,
  	time:""
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
  	getWeek(dateString){
    	var date;
        var dateArray = dateString.split("-");
        date = new Date(dateArray[0], parseInt(dateArray[1] - 1),dateArray[2] );
    		return " (周" + "日一二三四五六".charAt(date.getDay())+')'
		},
  	bool:function(boo){
  		this.bool2=boo
  		this.box_hide()
  		
  	}
  },
  created(){
			var time=new Date()
			var year=time.getFullYear()
			var month=time.getMonth()+1
			var day=time.getDate()
			var week =time.getDay()
			this.time=year+"-"+month+"-"+day
			this.time+=this.getWeek(this.time)
  }
}
</script>

<style scoped="scoped">

	#blue{
		background: #1E90FF;
		color: white;
		border: #1E90FF 1px solid;
	}
	#header p{
		float: right;
		line-height: 50px;
	}
	.btn{
		background: none;
		border:1px solid #9a9a9a;
		border-radius: 3px;
		height: 30px;
		width: 75px;
		margin-top: 10px;
		margin-left: 5px;

	}
	#header{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #9a9a9a;
		display: flex;
		justify-content:space-between
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

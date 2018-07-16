<template>
	<div id="evaluation_1">
		<div id="box2">
			

		<div id="header">
		<ul id="nav">
			<li  v-for="(item,i) in nav" :class="i==0? 'blue':''" @click="status(i)" ref='myli'>{{item.name}}</li>
		</ul>
			<p id="text" >我的报告</p>
		</div>
			<div class="tabBox" style="width: 98%;margin: 1%;">
		 	<el-table  :data="tableData"  :header-cell-style="getRowClass" >
		      <el-table-column prop="date" label="日期" >
		      </el-table-column>
		      <el-table-column prop="state" label="状态">
		      </el-table-column>
		      <el-table-column prop="name" label="考评分">
		      </el-table-column>
		      <el-table-column prop="branch" label="所在部门" >
		      </el-table-column>
		      <el-table-column prop="people" label="考评人" >
		      </el-table-column>
		      <el-table-column prop="time" label="考评时间" >
		      </el-table-column>
		       <el-table-column fixed="right"  label="操作">
      				<template slot-scope="scope">
        			<el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
        			<el-button @click="handleClick(scope.row)" type="text" size="small">申诉</el-button>
			      </template>
			   </el-table-column>
    		</el-table>
    		
	</div>
		</div>
	</div>
	
</template>

<script>
import axios from 'axios'
	export default {		
  data:function(){
    return {
    	 tableData: [],
    	page:0,
    	i:0,
    	time:"",
    	nav:[
    		{'name':'日报','show':"y"},
    		{'name':'周报','show':"y"},
    		{'name':'月报','show':"y"},
    		{'name':'季报','show':"y"},
    		{'name':'半年报','show':"y"},
    		{'name':'年报','show':"y"}
    	]
    }
  },
  methods:{
  	getRowClass({ row, column, rowIndex, columnIndex }) {
				if (rowIndex == 0) {
					return 'background:#f2f7fd'
				} else {
					return ''
				}
			},

  	num(i){
  		this.arr[i].show='n'
  	},
  	status(i){
  		//通过改变page隐藏其它元素
	  	this.page=i
	  	//取消之前的样式，切换样式		
		for(let j=0;j<6;j++){
		this.$refs.myli[j].className="a"
		}
		this.$refs.myli[i].className="blue"		
  	}
  },
  created: function() { 
  	var url='../../static/json/evluathion_1.json'
axios.get(url).then((response)=>{
    console.log(response.data);
    this.tableData=response.data
})

  	var time=new Date()
	var year=time.getFullYear()
	var month=time.getMonth()+1
	var day=time.getDate()
	
	var week =time.getDay()//星期
	var week2=""
	if(week==1){
		week2="一"
	}else if(week==2){
		week2="二"
	}else if(week==3){
		week2="三"
	}else if(week==4){
		week2="四"
	}else if(week==5){
		week2="五"
	}else if(week==6){
		week2="六"
	}else if(week==7){
		week2="日"
	}
	this.time=year+"-"+month+"-"+day+"<i>"+" (周"+week2+")"+"</i>"
  }
}
</script>

<style scoped="scoped">
			
			#evaluation_1{
				height: auto;
				width:calc(100% - 212px);
				/*background: #ededee;*/
			}
			#box2{
				width:100%;
				z-index: 9;
			}
			#header{
				margin-top: 10px;
				box-shadow:5px 0px 4px 1px silver;
				margin-top:15px;
				width: 100%;
				height: 50px;
				background: white;
				position: relative;
			}
			ul{
				list-style: none;
			}
			li{
				float: left;
			}
			a{
				color: inherit;
				text-decoration: inherit;
			}
			#nav{
				padding: 10px;
				font-size: 12px;
			}
			#nav li{
				border-left: 1px solid #9a9a9a;
				border-top: 1px solid #9a9a9a;
				border-bottom: 1px solid #9a9a9a;
				padding: 10px;
			}
			#nav li:nth-child(6){
				border-right: 1px solid #9a9a9a;
				border-top-right-radius: 5px;
				border-bottom-right-radius: 5px;
			}
			#nav li:nth-child(1){
				border-top-left-radius: 5px;
				border-bottom-left-radius: 5px;
			}
			#nav .blue{
				background:#5e9ffc ;
				color: white;
				border-color: #5e9ffc;
			}
			#text{
				width: 100px;
				height: 50px;
				line-height: 50px;
				position: absolute;
				left: calc(50% - 50px);
				top: calc(50% - 25px);
				font-weight: bold;
			}
			.card{
				width: 100%;
				height: 100%;
				background: white;
			}
			#left{
				width: 90px;
				float: left;
				
			}
			#circle{
				margin: 15px;
				width: 52px;
				height: 52px;
				text-align: center;
				line-height: 52px;
				color:white;
				font-size: 20px;
				font-family: "微软雅黑";
				background:#e37e1e ;
				border-radius: 50%;
			}
			#right{
				width: calc(100% - 130px);
				float: left;
				height: 100%;

			}
			#time{
				width: 100%;
				height: 70px;
				border-bottom: 2px solid #dcdcdc;
			}
			#time p{
				font-size: 25px;
				line-height: 70px;
				margin-left: 20px;
			}
			@media only screen and (max-width:1300px ) {
				#text,#circle{display: none;}
				#nav li{padding: 5px;}
				#right{
				width: 100%;
				}
			}
</style>
<template>
	<div id="evaluation_2">
		<div id="box2">
		<div id="header">
		<ul id="nav">		
			 <el-select v-model="value" placeholder="请选择" size="medium" >
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value"

			      >
			    </el-option>

			  </el-select>
			    <h2 id="text">
					 <el-dropdown @command="handleCommand">
					  <span class="el-dropdown-link">
					    日报绩效排行榜<i class="el-icon-arrow-down el-icon--right"></i>
					  </span>
					  <el-dropdown-menu slot="dropdown" >
					    <el-dropdown-item command="a">日报绩效排行榜</el-dropdown-item><br/>
					    <el-dropdown-item command="b">周报绩效排行榜</el-dropdown-item><br/>
					    <el-dropdown-item command="c">月报绩效排行榜</el-dropdown-item><br/>
					    <el-dropdown-item command="d">季报绩效排行榜</el-dropdown-item><br/>
					    <el-dropdown-item command="e">半年报绩效排行榜</el-dropdown-item><br/>
					    <el-dropdown-item command="f">年报绩效排行榜</el-dropdown-item><br/>
					    
					  </el-dropdown-menu>
					</el-dropdown>
			    </h2>
			  
			    <div class="block">
				<i class="el-icon-caret-left" @click="monthDown"></i>
				<i class="el-icon-caret-left" @click="down"></i>
				<p class="time">{{time}}</p>
				<i class="el-icon-caret-right" @click="up"></i>
				<i class="el-icon-caret-right" @click="monthUp"></i>
			  	 <el-button type="primary">日报统计</el-button>
			  </div>
		</ul>		
		</div>
		<div class="tabBox" style="width: 98%;margin: 1%;">
		 <el-table  :data="tableData"  style=""  >
		      <el-table-column prop="ranking" label="公司排名" >
		      </el-table-column>
		      <el-table-column prop="name" label="姓名">
		      </el-table-column>
		      <el-table-column prop="name" label="考评分">
		      </el-table-column>
		      <el-table-column prop="name" label="所在部门" >
		      </el-table-column>
		      <el-table-column prop="name" label="考评人" >
		      </el-table-column>
		      <el-table-column prop="date" label="考评时间" >
		      </el-table-column>
		       <el-table-column fixed="right"  label="操作">
      				<template slot-scope="scope">
        			<el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
			      </template>
			   </el-table-column>
    		</el-table>
    		
	</div></div></div>
</template>

<script>
	export default{
		data:function(){
			return {
				 tableData: [{
				 	ranking:1,
		            date: '2016-05-02',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1518 弄'
		          }, {
				 	ranking:2,
		            date: '2016-05-04',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1517 弄'
		          }, {
		          	ranking:3,
		            date: '2016-05-01',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1519 弄'
		          }, {
		            date: '2016-05-03',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1516 弄'
		          }],
			 options: [{
		          value: '选项1',
		          label: '全部人员'
		        }, {
		          value: '选项2',
		          label: '双皮奶'
		        }, {
		          value: '选项3',
		          label: '蚵仔煎'
		        }, {
		          value: '选项4',
		          label: '龙须面'
		        }, {
		          value: '选项5',
		          label: '北京烤鸭'
		        }],
		        value: '选项1',
		
				time:'',

		        value1: '',
			}
		},
		methods:{
			 handleCommand(command) {
		        
		     },
			 handleClick(row) {
		        console.log(row);
		     },
			up(){
			this.addDate(this.time,+1,0)
			},
			down(){
			this.addDate(this.time,-1,0)
			},
			monthUp(){
			this.addDate(this.time,0,1)
			},
			monthDown(){
			this.addDate(this.time,0,-1)
			},
			 addDate(date,days,month){ 
		       var d=new Date(date); 
		       d.setDate(d.getDate()+days); 
		       d.setMonth(d.getMonth()+month);
		       var m=(d.getMonth()+1); 
		      this.time=d.getFullYear()+'-'+m+'-'+d.getDate()
		     } 
		},
		created(){
			
			var time=new Date()
			var year=time.getFullYear()
			var month=time.getMonth()+1
			var day=time.getDate()
			this.time=year+"-"+month+"-"+day

		}
	}
</script>

<style>		

	
			.el-icon-caret-left,.el-icon-caret-right{
				cursor:pointer;
				color: #1E90FF;
				font-size: 35px;
			}
			.el-icon-caret-left,.el-icon-caret-right,.time{
				float: left;
				line-height: 40px;
			}
			/*.el-icon-caret-right:nth-of-type(2){
				margin-right: 30px;
			}*/
			#evaluation_2{
				height: 100%;
				width:calc(100% - 212px);

			}
			#box2{
				width:100%;
				
			
				z-index: 9;
			}

			#header{
				margin-top: 10px;
				box-shadow:5px 0px 4px 1px silver;
				
				width: 100%;
				height: 50px;
				background: white;
				position: relative;
			}
			.block{
				float: right;
			}
			#text{
				width: 140px;
				text-align: center;
				height: 50px;
				line-height: 50px;

				position: absolute;
				left: calc(50% - 70px);
				top: calc(50% - 25px);
				font-weight: bold;
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
				padding: 8px;
				font-size: 12px;
				padding-left: 20px;
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
</style>
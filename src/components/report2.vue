<template>
	<div id="tab1">
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
			    <h2 id="text">团队报告</h2>
			  
			    <div class="block">
	
			    <el-date-picker
			      v-model="value1"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
			  </div>
		</ul>
		
		
		</div>
	<div id="" class="card" >
			<div id="left">
				<div id="circle">今日</div>
			</div>
			<div id="right">
				<div id="time">
					<p id="timeText" v-html="time" style="float: left;font-size: 20px;line-height: 100px;"></p>
					<button  ref='submit' :plain="true" @click="open2" v-text="state" style="border:none;
						background:none;outline:none;float: right;color: #5e9ffc;line-height: 100px;margin-right: 50px;"></button>
				</div>
				<ul class="bottom">
					<li v-for="(iteam,i) in arr">
						<div class="img_box"><img src="../../static/img/aa_03.png"/></div>
						<div class="rit">
							<p>{{iteam.name}}</p>
							<div class="btn">
								<mu-text-field v-if="iteam.show=='n'" v-model="values[i]"  multi-line :rows="1" :rows-max="6"  placeholder="请输入信息..."></mu-text-field>
								<a  @click="num(i)" v-if="iteam.show=='y'">请填写{{iteam.name}}</a>
							</div>
						</div>
					</li>
					
					<li >
						<div class="img_box"><img src="../../static/img/aa_06.png"/></div>
						<div class="rit">
							<p>日报附件</p>
							<div class="btn" ><div id="filesty"><input type="file" id="imageFile" style="width: 100px;height: 100px; opacity: 0; position: relative; top: 0;left: 0;"  /></div></div>
							
						</div>
				
						
					</li>

				</ul>
			</div>
			
			<div style="clear: both;"></div>
		</div>
		
	</div>
		</div>
	
</template>

<script>
	export default {
		name:'tab1',
  data:function(){
    return {
    	state:'提交',
    	arr:[
    		{'name':'今日工作记录','show':"y"},
    		{'name':'需协调事项','show':"y"},
    		{'name':'其它情况反映','show':"y"},
    		{'name':'明日计划','show':"y"}
    		],
    		time:'',
    		time2:'',
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

		pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
           }
          
          },
        value1: '',
        values:[]
          
    }
  },
    methods:{
  	 open2() {
  	 	if(this.state=="提交"){
  	 		this.state='待测评'
  	 		this.$refs.submit.style.color="red"
  	 		localStorage.setItem('state','待检测')
  	 		var obj={
	        	 	'content1':this.value[0],
	        	 	'content2':this.value[1],
	        	 	'content3':this.value[2],
	        	 	'content4':this.value[3]
	        	 }
	        	 var obj2={'type':this.$route.params.id,'state':'待检测','time':this.time2,'content':[obj]}
	        	 var report_json=localStorage.getItem('data')
	        	 if(!report_json){
	        	 	localStorage.setItem('data2',JSON.stringify(obj2))
	        	 }
	        this.$message({
	        	duration:1000,
	          message: '提交成功',
	          type: 'success'
	          
	        })}else{
	        	 this.$message({
	        	    message:'已提交成功，请耐心等待管理员测评',
	        		duration:1000,
	        	 	
	        	 	})
	        	 
	        }
      },
  	num(i){
  		this.arr[i].show='n'

  	}
  },
  mounted: function() { 
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
	this.time2=year+"-"+month+"-"+day
	

	
  }
}
</script>

<style scoped="scoped">
	.block{
		float: right;
	}
	#tab1{
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
				/*border-top:#df4101 3px solid;*/
				height: 100%;
				background: white;
			}
			#left{
				width: 130px;
				float: left;
				
			}
			#circle{
				margin: 20px;
				width: 62px;
				height: 62px;
				text-align: center;
				line-height: 62px;
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
			@media only screen and (max-width:800px ) {
				#text,#circle{display: none;}
				#nav li{padding: 5px;}
				#right{
				width: 100%;



			}
			}
			.bottom li{
				width: 100%;
				padding-top: 10px;
			}
			
			.bottom .img_box{
				float: left;

			}
			.bottom p{
				
				height: 30px;
				line-height: 30px;
			}
			.bottom .img_box{
				padding: 5px;
				width: 30px;
				height: 90px;
				padding-top: 0;

				
			}
			img{
				width: 100%;
				height: 30px;
			}
			.btn{
				color:#8ca7d5;
				margin-top: 15px;
				
			}
			.btn a{
				display: block;
				width: 100%;
				
			}
			.btn a:hover{
				background: #ededee;
			}
			#filesty{
				margin-left: 40px ;
				background: url(../../static/img/aa_04.png);
				background-size:100% 100%; 
				width: 100px;
				height: 100px;
				position: absolute;
			}
</style>
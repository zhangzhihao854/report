<template>
	<div>
		<div>
		<div id="" class="card" ref='card' v-if="this.json_data!=''&&this.json_data.type!=this.page?false:true">
			<div id="left">
				<div  v-for="item in typeArr" v-if="item.type==item.name" :class="item.text=='本半年'?'font':'circle'">{{item.text}}</div>
			</div>
			<div id="right">
				<div id="time">
					<p id="timeText" v-html="time" style="float: left;font-size: 20px;padding-top:10px;"></p>
				</div>
				<div v-if="status=='show'" class="status"><router-link :to="'/write_report/'+type" >[{{set_}}{{type}}内容]</router-link></div>
				<!--<div v-if="status!='show'" class="status">已填写月报<a href="#">[查看月报]</a></div>-->
			</div>
			<div style="clear: both;"></div>
			
		</div>
		<div id="" class="card" v-for="item in card2">
			<div id="left">
				<div class="circle" v-if="item.type!='月报'" style="width: 10px;height: 10px;"></div>
				<div class="circle" v-if="item.type=='月报'" style="">{{item.month}}月</div>
			</div>
			<div id="right">
				<div id="time">
					<p id="timeText"  style="float: left;font-size: 20px;padding-top:10px;">{{item.time}}</p>
				</div>
				<div v-if="status=='show'" class="status"><a href="#">[查看{{item.type}}内容]</a></div>
				<div v-if="status!='show'" class="status">已填写月报<a href="#">[查看月报]</a></div>
			</div>
			<div style="clear: both;"></div>
			
		</div>
	</div>
	
</div>
	</div>	
	
</template>

<script>
	export default {
		props:['page'],
		name:'tab1',
  data:function(){
    return {
    	typeArr:[
    	{'name':'日报','text':'今日','type':'日报'},
    	{'name':'周报','text':'本周','type':'日报'},
    	{'name':'月报','text':'本月','type':'日报'},
    	{'name':'季报','text':'本季','type':'日报'},
    	{'name':'半年报','text':'本半年','type':'日报'},
    	{'name':'年报','text':'今年','type':'日报'}],
    	status:'show',
    	time:"",
    	month:'',
    	time2:"",
    	card:[
    		{'type':'日报','time':"2018-7-5",'content':[{
    		'content1':'今日晴空万里',
    		'content2':'这是一条信息',
    		'content3':'这是一条信息',
    		'content4':'这是一条信息'
    		}]},
    		{'type':'半年报','time':"2018-7-5",'content':[{
    		'content1':'今日晴空万里',
    		'content2':'这是一条信息',
    		'content3':'这是一条信息',
    		'content4':'这是一条信息'
    		}]},
    		{'type':'年报','time':"2018-7-5",'content':[{
    		'content1':'今日晴空万里',
    		'content2':'这是一条信息',
    		'content3':'这是一条信息',
    		'content4':'这是一条信息'
    		}]},
    		{'type':'月报','time':"2018-6-5",'content':[{
    		'content1':'今日晴空万里',
    		'content2':'这是一条信息',
    		'content3':'这是一条信息',
    		'content4':'这是一条信息'
    		}]},
    		{'type':'季报','time':"2018-7-4",'content':[{
    		'content1':'今日晴空万里',
    		'content2':'这是一条信息',
    		'content3':'这是一条信息',
    		'content4':'这是一条信息'
    		}]},
    		{'type':'日报','time':"2018-7-3",'content':[{
    		'content1':'今日晴空万里',
    		'content2':'这是一条信息',
    		'content3':'这是一条信息',
    		'content4':'这是一条信息'
    		}]},
    		{'type':'周报','time':"2018-7-2",'content':[{
    		'content1':'今日晴空万里',
    		'content2':'这是一条信息',
    		'content3':'这是一条信息',
    		'content4':'这是一条信息'
    		}]}
    		
    	],
    	card2:[],
    	type:'',
    	set_:'on',
    	json_data:[],


    }
  },
  
  methods:{
  	switch(){
  		this.type=this.page
		this.card2=[]
		for(let i in this.card){
			if(this.card[i].type==this.page){
				if(this.card[i].type=='月报'){
				this.card[i].month=this.card[i].time.split('-')[1]
				}
				this.card2.push(this.card[i])
			}
		}
//		for(let i=0;i<this.typeArr.length;i++){
//				if(this.typeArr[i].name==this.json_data.type){
//					this.typeArr=[this.typeArr[i]]
//					console.log(this.typeArr)
//				}
//			}
  	}
  },
watch:{
	page:{
	 handler(newName, oldName) {
		this.switch()
		for(var j in this.typeArr){
			this.typeArr[j].type=this.page
		}


	}	
	}
},
mounted(){

	
},
  created: function() { 

	this.set_="填写"
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
	this.month=month
	this.time=year+"-"+month+"-"+day+"<i>"+" (周"+week2+")"+"</i>"
	this.time2=year+"-"+month+"-"+day
	
	var report_data=localStorage.getItem('data')
  	if(!report_data){	
  	}else{
  		var json_data=JSON.parse(report_data)
  		this.json_data=json_data
		this.card.unshift(json_data)
		console.log(this.card)
		console.log(this.time2)
  		if(json_data.time==this.time2){
  			this.set_="查看"
  		}
  	}

  	this.switch()

  
  	
  }
}
</script>

<style scoped="scoped">
	
	.card:hover{
				box-shadow:0px 0px 10px 3px silver;
				transition: all .6s;
			}
			.status{
				clear: both;
				
				font-size: 18px;
				line-height: 70px;
				margin-left: 15px;
			}
			
			ul{
				list-style: none;
			}
			li{
				float: left;
				
			}
			a{
				text-decoration: none;
				color: dodgerblue;
			}
			.card{
				box-shadow:0px 0px 6px 1px silver;
				width: 100%;
				height: 100%;
				background: white;
				margin-top: 10px;
			}
			#left{
				width: 90px;
				float: left;
				
			}
			.circle{
				margin: 20px;
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
				width: calc(100% - 90px);
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
			 .font{
				margin: 20px;
				width: 52px;
				height: 52px;
				text-align: center;
				line-height: 52px;
				color:white;
				font-size: 14px;
				font-family: "微软雅黑";
				background:#e37e1e ;
				border-radius: 50%;
	}
</style>
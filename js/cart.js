var vm = new Vue({
	//监听的模型范围
	el:"#app",
	//模型
	data:{
		title:"Hello Vue",
		userList:[],
		number:0
	},
	//局部过滤器过滤器
	filters:{
		formatAge:function(value){
			return value+"岁";
		}
	},
	
	mounted:function() {
		//确保该实例已经插入文档
		this.$nextTick(function(){
			// this.change()
			vm.change();
		})
		
	},
	
	//事件绑定的方法
	methods:{
		change:function (){
			this.title = "ofme"
// 			var _this = this
// 			//resource.js 
// 			this.$http.get("package.json").then(function (res){
// 				_this.userList = res.body.data;
// 			})
// 			
			this.$http.get("package.json").then(res=>{
				this.userList = res.body.data;
			})
		},
		
		add:function(){
			this.number += 1;
		}
	}
});

//全局过滤器
Vue.filter("age",function(value,type){
	return value+type;
})
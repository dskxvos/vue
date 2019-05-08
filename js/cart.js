var vm = new Vue({
	//监听的模型范围
	el:"#app",
	//模型
	data:{
		title:"Hello Vue",
		userList:[],
		number:0
	},
	//过滤器
	filters:{
		
	},
	
	mounted:function() {
		this.change()
	},
	
	//事件绑定的方法
	methods:{
		change:function (){
			this.title = "ofme"
			var _this = this
			//resource.js 
			this.$http.get("package.json").then(function (res){
				_this.userList = res.body.data;
			})
		}
	}
});
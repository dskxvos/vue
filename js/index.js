
//全局组件
// Vue.component("todo-item",{
// 	template:"<li>item</li>"
// })
// 



//局部组件
 var todoItem = {
	 props:["content","index"],
	 template:"<li @click='del'>{{content}}</li>",
	 methods:{
		 del:function(){
			 // 向父组件触发一个事件
			 this.$emit("del",this.index)
		 }
	 }
 }


new Vue({
	
	el:"#root",
	//注册局部组件
	components:{
		"todo-item":todoItem
	},
	data:{
		liList:[],
		inputValue:""
	},
	methods:{
		append:function(){
			this.liList.push(this.inputValue);
			this.inputValue="";
		},
		del:function(index){
			alert(index)
			this.liList.splice(index,1)
			this.inputValue="";
		}
	}
	
})


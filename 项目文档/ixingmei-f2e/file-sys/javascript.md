# javascript 规范

javascript文件尽量在页脚引入，为减少全局变量污染和组件模块化。这里使用了`requirejs`来进行管理，它是遵循`amd`命名规范。

声明变量时不能忘记`var`关键字。

## 行为视图分离

javascript代码尽量写在外部`js`文件中，不建议写在html标签中。

	//不推荐
	<a href="javascript:void(0);" onclick="login()">登录</a>

统一使用类或id选择器绑定元素事件函数

	// 推荐
	<a href="javascript:void(0);" class="memberLogin">登录</a>

	// js
	$(document).on("click", ".memberLogin", login);

## 书写命名规范

* 驼峰式写法，按模块名及层级，比如`var btnLogin;`
* 可添加变量类型前缀,`objBtn`
* 声明不可省略`var`
* 推荐语句末尾加`;`
* etc.

## AMD声明规范

`requirejs`是一个遵循`AMD`模块化管理框架。

`jquery`本身是支持`AMD`规范的库。

**模块定义**

`define`是定义模块的关键字，只要引入`require.js`，它就会做为全局变量对象存在。
	
	// mod.js
	define(['jquery'], function($){
		/*---------------
		// 方法1
		/*var dialog = {
			init: function(){},
			show: function(){}
		};
	
		// 返回 export
		return dialog;
		----------*/
	
		/*---------------
		// 方法2
		return {
			init: function(){},
			show: function(){}
		}
		----------*/
	
		// 方法3
		return function(arg1, arg2, arg3){
			// code
		}
	});
	

**模块使用**

`require`是使用模块立即调用函数。它可以加载其他模块，若页面已有该模块不重复引用， 提供了类似于`jquery()`一个闭包的良好环境。
	
	// 依赖jquery,mode模块
	require(['jquery', 'mod'], function($, mod){
		$("#demo").on("click", $.proxy(mod.show, mod));
	});
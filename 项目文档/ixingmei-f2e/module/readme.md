# 模块化组件化

模块化组件化更利用前端开发维护及管理。

分离模块样式，js代码。

## css模块化

将模块css分离出来独立一个文件方便我们管理，而且在js中我们可以通过按需加载来使用

     loadCss('memberLogin', STATIC_HOME +'css/login.css');

## js模块

javascript模块化遵从`amd`规范，使用`requirejs`来管理依赖。

在`requirejs`中我们配置了全局模块

	/* require 全局配置 */
	require.config({
	    // JS跟目录
	    baseUrl: window['STATIC_HOME']  ? window['STATIC_HOME']+'js' : 'static/js',
	    // 版本号参数
	    urlArgs: window['STATIC_VER'] ? 't='+ window['STATIC_VER'] : '20140617',
	    // 模块别名
	    paths: {
	        'jquery': 'jquery',
	        'text'  : 'require_text',
	        'common': 'common',
	        'cookie': 'common/cookie',
	        'tpl' : '../../../tpl',
	        'func': 'common/function',
	        'memberLogin': 'common/memberLogin',
	        'dialog': 'gallery/artDialog/dialog'
	    },
	    shim: {
	        'memberLogin' : {
	            deps: ['jquery'],
	            exports: 'memberLogin'
	        },
	        'func' : {
	            deps: ['jquery'],
	            exports: 'Func'
	        }
	    }
	});

**声明模块**

声明模块使用关键字`define`,加入依赖,不如大部分使用`jquery`

	/**
	 * 弹出提示
	 */
	define('common/uiAlert',function(require){
	   var $ = require('jquery');
	
	    /* 提示层 */
	    var uiAlert = {
	        myAlert: null,
	        init: function(){ //code },
	        show: function(content, timer, fn){ //code },
	        hide: function(timer, fn){ // code }
	    };
	
	    return uiAlert;
	});

**使用jquery插件**

在使用模块前使用`shim`插件声明插件对`jquery`的依赖

	require.config({
	    paths: {
	        'loading': 'gallery/loading',
	        'imagePreview': 'gallery/jquery.imagePreview'
	    },
	    shim: {
	        'loading': {
	            deps: ['jquery'],
	            exports: '$.fn.loading'
	        },
	        'imagePreview':{
	            deps: ['jquery'],
	            exports: '$.fn.imagePreview'
	        }
	    }
	});
	define(function(require){
	    var $ = require('jquery');
	    var imagePreview = require('imagePreview');
	
		//code
	});

**使用模块**
	
	// app/cinemaList
	define(['jquery', 'gallery/tab'], function($, jqTab){
		//code
	});

使用
	
	require(['app/cinemaList']);

## 模块化优化

前端静态文件http请求优化，需我们先引入js文件。

模块化定义使用`AMD`规范，通过id来定义模块，从先引入的js文件中我们可以根据id使用该模块而不需要重新异步加载改文件

	define(id,[deps], fn);

或者

	define(id,function(require,exports,module){});

**例子**
	
	// iscroll.js
	define('gallery/iscroll', function(require){
		var $ = require('jquery');
		var iScroll = require('iscroll');
	});

	//app.js
	define('app', function(require){
		var $ = require('jquery');
		var iscroll = require('gallery/iscroll');  // 'gallery/iscroll'模块id 不建议使用require.config来重新配置
	});

再通过`i.php`进行合并拼接输出，详细阅读`i.php`介绍章节。
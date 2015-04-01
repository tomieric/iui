# css 样式规范

> [nec css规范](http://nec.netease.com/standard/css-sort.html)

##命名语义化

* 尽量使用class少用id作为选择器
* class命名以`-`划分
* 命名语义化，比如`.main`, `aside`比`.contentLeft`, `.contentRight`有意义
* 命令层级化，比如`.nav`, `.nav-item`, `.nav-item-text`

## 样式模块化

样式尽量按模块来区分，模块前注释说明
	
	/*-- 回到顶部 --*/
	.helper-nav,
	.helper-nav a,
	.helper-nav li span,
	.helper-nav-advice-txt{
	    background: url("../images/gotop.png") no-repeat;
	}
	.helper-nav{
	    position: fixed;
	    right: 30px;
	    bottom: 20%;
	    width: 50px;
	    height: 122px;
	    z-index:100;
	}
	.helper-nav ul{
	    padding: 5px 7px 5px 6px;
	}
	.helper-nav li{
	    font-size: 0;
	}

## 文件模块化

* 主要样式`main.css`
* 针对页面功能样式`home.css`
* 模块样式`media.css`, `memberLogin.css`

页面输出，通过`i.php`来合并多个`css`文件

	<link href="/i.php?type=css&href=[/tpl/static/css/main.css,home.css,components/media.css]&source=5&v=20140821" rel="stylesheet" type="text/css" >

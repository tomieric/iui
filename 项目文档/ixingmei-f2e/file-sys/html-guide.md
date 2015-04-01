# html 模板规范

> [nec html规范](http://nec.netease.com/standard/html-structure.html)

## 推荐html5 doctype

使用html5 doctype声明方式，及页面编码为`UTF-8`。

	<!DOCTYPE html>
	<!--[if lt IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"><![endif]-->
	<!--[if IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8"><![endif]-->
	<!--[if IE 8]><html class="no-js lt-ie10 lt-ie9"><![endif]-->
	<!--[if IE 9]><html class="no-js lt-ie10" lang="zh-CN"><![endif]-->
	<!--[if gt IE 9]><!--><html class="no-js" lang="zh-CN"><!--<![endif]-->

参照`HTML5 BOILERPLATE`我们使用ie的if判断语句区分不同版本ie浏览器，增加父类选择器，减少css hack的数量。

## 结果，表现，行为分离

css样式文件必须置于头部`head`标签内。js文件在页脚引入。

## 代码语义化
多使用有语法意义的标签，比如`p`,`ul`,`strong`,`em`等，减少`span`,`div`及`table`布局。

## 良好的代码结构

统一编码格式，缩进为tab键4个空格，层级关系呈树形结构。

	<ul class="nav">
        <li class="current"><a href="/index.php"><i class="head-icon"></i>首页</a><span></span></li>
        <li><a href="/index.php?state=1"><i class="head-icon head-icon-mv"></i>电影</a><span></span></li>
        <li><a href="/activity_list.php"><i class="head-icon head-icon-act"></i>活动</a><span></span></li>
        <li><a href="/integral.php"><i class="head-icon head-icon-jf"></i>积分</a><span></span></li>
        <li><a href="/app.php"><i class="head-icon head-icon-app"></i>客户端</a><span></span></li>
    </ul>


注释在模块外部以`<!--模块 -->`开头,`<!-- /模块-->`结束。

	<!--APP下载-->
    <div class="home-aside-mod">
        <div class="aside-mod-hd">
            <span>APP下载</span>
            <a href="app.php" class="aside-mod-more" title="更多"><span class="fn-hide">更多</span></a>
        </div>
        <div class="aside-mod-bd">
            <img src="./tpl/static/images/AppAndroid.jpg?t=20140702" width="175" height="auto" alt="APP下载二维码"/>
        </div>
    </div>
    <!--/APP下载-->

## smarty模板

smarty模板主要以`.tpl`结尾的文件，文件由后端定义创建。模板主要由静态文件html和smarty变量组成。

> [smarty手册](http://www.smarty.net/docs/zh_CN/)

smarty的变量标签符是“`<{}>`”，变量的写法是“`<{$title}>`”

**全局变量**

* `<{$title}>` 页面标题
* `<{$keywords}>` 页面关键字
* `<{$description}>` 页面描述
* `<{$G_version|default:'20140709'}>` 静态文件版本号
* `<{$API_HOST}>` api主机地址

**模板导入**

	<{include file="$smarty_root/header.tpl" }>

通过`include`语法引入头部模板文件，`$smarty_root`为模板的目录由系统来定。

**数据遍历循环**

	<ul>
	    <{foreach item=banner key=k from=$cms_baner_info}>
	        <li <{if $k eq 0 }>class="banner-loading"<{/if}>>
	            <a href="<{$banner.url}>" target="_blank" path="<{$banner.logo}>" title="<{$banner.sortrank}>"></a>
	        </li>
	    <{/foreach}>
	</ul>

**css,js引入方式**

使用smarty标签定义多个css（js）文件名数组

	<{assign var='cssArr' value=','|explode:"home,components/media"}>
	<{assign var='jsArr' value=','|explode:"app/movieModel,common/iLike"}>

无论是引入css还是js，都不需要加上文件后缀名,且声明语句需放在模板最顶部。
# 活动页面

活动页面主要通过在`activity`目录下根据日期格式文件夹区分，开发完成后提供线上浏览器地址给编辑，然后从后台活动列表里添加即可。

##新建活动

比如新建`webroot/activity/15/1/4`活动，将往期活动文件夹拷贝过来。文件夹层级表示2015年1月份第4个活动。

文件结构

* static (活动静态文件夹)
	* js
	* images
	* css 
	* 20150228 (新版本)
		* js
		* images
		* css 
* tpl (活动模板文件夹)
	* index.tpl (PC端模板)
	* m_index.tpl (mobile端模板) 
	* index_20150228.tpl (pc端2015-02-28号修改版本)
	* m_index_20150228.tpl (mobile端2015-02-28号修改版本)
* tpl_c (smarty缓存文件夹)
* index.php (活动入口，访问地址文件)

访问地址：`http://localhost:8081/activity/15/1/4`

或更新到线上 `http://www.ixingmei.com/activity/15/1/4`

## index.php 网页入口

定义模板和静态资源路径

	$now_tpl = '';
	$static = 'static/'.$now_tpl;

默认为空，选择是`static`目录下，如果该活动有更改版本，比如

	$now_tpl = '20150228';
	$static = 'static/'.$now_tpl;

表示引入的引入的js，css，img为`static/20150228/**`下，同时选择的模板为`index_20150228.tpl`和`m_index_20150228.tpl`

	$now_tpl = $now_tpl ? '_'.$now_tpl : '';
	
	if( checkAgentIsMobile() ){
		$smarty->assign('source', $_REQUEST['s']);
		$smarty->assign('agent_type', getAgentType());
		$smarty->display( '../' . $activity_site . '/tpl/m_index'. $now_tpl .'.tpl');
	}else{
		$smarty->assign('source','0');
		$smarty->display( '../' . $activity_site . '/tpl/index'. $now_tpl .'.tpl' );
	}

## 模板

新版活动统一规范在当前活动目录下存放静态文件，而不是放在跟目录下的`webroot/tpl/static/activity`。因此css在body内容中顶部引入。

	<{include file="$smarty_root/header.tpl" }>
	<link rel="stylesheet" href="static/css/style.css">
		<!--[内容区 -->
		<div class="wrapper">
		//...

如果页脚需要引入必须的js，我们一般是这样定义

	<!--底部-->
		<{include file="$smarty_root/footer.tpl" }>
		
		<script>
			require(['/<{$activity_site}>/static/js/script.js?20150119']);
		</script>
	</body>
	</html>

这里主要是`PC`端的特点,下一章节将详细说明移动端。
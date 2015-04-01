# 移动端

移动端由于各种设备屏幕分辨率有差异，我们需要将用响应式布局或弹性布局来实现，大部分使用css3和html5。

为了更好的用户体验，我们按例禁止用户对屏幕的缩放，针对iphone高清屏，我们需要设计图为`640px`（iphone6 为750px），而开发切图事按`1/2`（320px）为原型开发。

布局按照宽度折算为百分比，背景或全屏图片统一宽度为`100%`。按钮最好使用css3来实现，以前定位元素按百分比来算。

## 模板

移动端模板需要以html5 doctype声明方式，且需要禁止缩放

	<!DOCTYPE html>
	<html>
	<head>
	    <meta charset="utf-8">
	    <title><{$title}></title>
	    <meta name="description" content="<{$description}>">
	    <meta name="keywords" content="<{$keywords}>">
	    <meta name="apple-mobile-web-app-capable" content="yes"/>
	    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
	    <meta name="format-detection" content="telephone=no"/>
	    <meta name="format-detection" content="email=no"/>
	    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"/>
	    <link rel="stylesheet" href="/tpl/static/css/mobile.css?t=20150108">
	    <link rel="stylesheet" href="static/css/mobile.css">
	</head>
	<body>
	    <div class="splash"><div class="loader"><img src="http://www.ixingmei.com/activity/14/11/1/static/images/loading-spin.svg" width="64" height="64"></div></div>
	  <div class="container">
	    <div class="top">
	        <img src="static/images/mobile/top.jpg" alt="">
	      <div class="u-lottery">
	        <div class="u-compass" id="J_compass"></div>
	        <span class="u-pointer" id="J_pointer"></span>
	      </div>
	      <p class="u-lottery-text">温馨提示：手机作为发奖的唯一凭证，请登录后再抽奖。</p>
	    </div>
	    <div class="content">
	        <div class="prize">
	            <h2 class="prize-hd">奖项设置</h2>
	            <ul class="prize-set">
	                <li class="item-1">一等奖：iPhone6（1台）</li>
	                <li class="item-2">二等奖：星悦卡1张（价值1000元）（3名）</li>
	                <li class="item-3">三等奖：精美磨砂杯1个（50名）</li>
	                <li class="item-4">四等奖：10元红包1个（1000名）</li>
	                <li class="item-5">五等奖：5元红包1个（10000名）</li>
	            </ul>
	            <div class="bear"></div>
	        </div>
	      <div class="luckyer">
	        <h2 class="luckyer-hd">奖项设置</h2>
	        <div class="luckyer-bd">
	          <ul class="luckyer-list" id="J_luckyer">
	            <li>加载中...</li>
	          </ul>
	        </div>
	      </div>
	      <div class="rule">
	        <h2>活动规则：</h2>
	        <ul>
	          <li>1.  每个用户每天限抽3次；</li>
	          <li>2.  实物奖品在中奖后两个工作日内客服联系中奖用户，安排派奖；</li>
	          <li>3.  红包直接以短信形式发放到中奖用户手机上。</li>
	          <li>4.  本活动的最终解释权归星美电影网所有。</li>
	        </ul>
	        <h2>红包使用规则：</h2>
	        <ul>
	          <li>1.  红包仅限星美电影网（www.ixingmei.com）在线选座购票使用；</li>
	          <li>2.  每张订单限使用1个红包，每个红包可以使用1次；</li>
	          <li>3.  红包订单不可退票，不兑换现金，不挂失，不开发票；</li>
	          <li>4.  IMAX厅，VIP厅，首映式，午夜场，明星见面会等特殊场次不能使用红包；</li>
	          <li>5.  红包有效期：自获得之日起15日内有效，过期无效。</li>
	        </ul>
	      </div>
	    </div>
	  </div>
	  <script src="/i.php?type=js&href=[/tpl/static/js/fastclick.js,jquery.js,gallery/jQueryRotate.2.2.js,gallery/jquery.scrollList.js],[<{$activity_site}>/static/js/mobile.js]&source=1&v=<{$G_version|default:'20150114'}>"></script>
	    <div style="display:none">
	    <script type="text/javascript">
	      var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	      document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F39e9df7eedc37d4b5c6ef2f5eca639be' type='text/javascript'%3E%3C/script%3E"));
	    </script>
	    </div>
	</body>
	</html>

页面禁止缩放，以1:1比例显示，宽度为设备宽度

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"/>

页面加载Loading页面,在页面body最前面加入

	<div class="splash">
		<div class="loader">
			<img src="http://www.ixingmei.com/activity/14/11/1/static/images/loading-spin.svg" width="64" height="64">
		</div>
	</div>

同时需引入移动端公用样式及js文件

	<link rel="stylesheet" href="/tpl/static/css/mobile.css?t=20150108">

js文件

	<script src="/tpl/static/js/m/mobile.js"></script>

## mobile.css

在mobile.css中我们定义了css reset，启动加载层样式，基本画布布局样式，登录模块样式

其中画布样式定义最大宽度为640px，保持在移动端最大分辨率下最大宽度为设计图宽度。

	<body>
		<div class="container">
			<!-- 布局内容 -->
		</div>
	</body>

开发调试请使用chrome控制台的手机模拟模式，可以帮助我们模拟各品牌的浏览器分辨率。

## mobile.js

移动端js依赖的是zeptoJS库，是一个与jquery有相同语法的dom库，体积更小更适合移动端。

**公用模块**

* 公共函数
* 弹出层
* 启动层模块
* 登录模块
* cookie模块
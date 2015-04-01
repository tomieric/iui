#关于活动静态文件部署

## 模板存放目录 tpl/活动文件夹

  比如随影卡活动`tpl/syk`

  样式css文件，image，js文件都存放在此目录。

## index.html 作为pc端模板

  `m_index.html` 作为移动端模板（样式设置img为100%可以自适应）

  `mobile.css`移动端样式文件

  `style.css` PC端样式文件

	<{$static}>为活动目录路径

使用文件夹下的图片`<img src="<$static>/img.jpg" />`

注意：这个四个文件必不可少而且文件名不能更改！

## 添加会员充值按钮链接
   <a href="/member/money_new.php" class="J_memberPay" title="立即充值"></a>

   必须存在类class `"J_memberPay"`

## 影片快速购票地址
   
	<a href="/buy_ticket.php?aid=108320">立即购票</a>

  其中108320为影片的id

	<a href="/buy_ticket.php?aid=108320&cid=1">立即购票</a>

  cid为影院id

	<a href="/buy_ticket.php?aid=108321&city_id=1">立即购票</a>

  city_id为城市id
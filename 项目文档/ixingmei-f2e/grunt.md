# grunt构建

* nodejs
* npm
* grunt
* grunt-concat

grunt构建当前只对JS文件`main.js`进行合并操作，因此修改了相关文件需要重新使用`grunt`生成发布。

## 安装nodejs

[官网下载node](http://nodejs.org/)

现在安装后默认也安装上`npm`

	node -v

检查`npm`版本

	npm -v

## 安装全局grunt

	开始->命令提示符

	npm install grunt -g

## 安装依赖包

切换到根目录下的`tpl/build`,按住`shift`右键`在此处打开命令窗口`

输入

	npm install

文件夹`node_modules`已添加到`svn`忽略列表，不提交的版本库中

## 构建发布

在命令提示符下输入：

	grunt

在`tpl/static/js/`下可以看到新生成了`main.js`

## gruntfile.js
	//...
		js: {
				options: {
					separator: "\r\n"
				},
				src: ['../static/js/common/function.js', '../static/js/common/cookie.js', '../static/js/common/citySelect.js', '../static/js/common/browser.js','../static/js/common/helperNav.js','../static/js/gallery/tab.js','../static/js/common.js'],
				dest: '../static/js/main.js'
			}
	//...

在gruntfile配置文件中我们可以看到js配置，如果这些文件做了修改必须构建发布一次。
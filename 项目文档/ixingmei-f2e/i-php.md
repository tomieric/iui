# i.php combo用法

`type` 定义引入类型，决定是`link`标签还是`script`方式

`href` 定义css或js文件路径，通过`,`分段处理各文件,每个类数组方式`[dir/a.css,b.css]`定义一个目录下的静态文件 

`v` 作为版本号

	/i.php?type=css&href=[/tpl/assert/css/main.css],<{$cssArr}>&v=20140612

*建议使用服务器的[http_concat_module](http://tengine.taobao.org/document_cn/http_concat_cn.html)插件替换*
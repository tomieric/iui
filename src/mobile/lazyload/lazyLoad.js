/**
 * 简单延迟加载
 * by tommyshao
 * http://getf2e.com
 * 参考: http://www.cnblogs.com/trance/archive/2013/06/05/3118984.html
 * version: 0.1.0
 * LICENSE: MIT
 */
~(function($, window, undefined){
	/*
	*判断元素是否出现在viewport中
	*/
	var inViewport = (function(){
		var belowthefold = function (elem) {
			return elem.getBoundingClientRect().top < 0;
		};
		var abovethetop = function (elem) {
			return elem.getBoundingClientRect().top > window.innerHeight;
		};
		return function(elem){
			return !belowthefold(elem) && !abovethetop(elem); 
		}
	})();
	
	var refreshTimer = null; // 刷新事件，解决滚动多次调用问题
	var collection = null;

	function lazyLoad(attr, fn){
		//var imgs = $.querySelectorAll(selector);
		[].slice.call(collection).forEach(function(el, i){
			if(inViewport(el)){
				loadImg(el, attr, fn)
			}
		});
	}
	function loadImg(img, attr, fn){
		if(!img.loaded){
			var src = img.getAttribute(attr || 'data-src');
			if(!src) return;
			img.src = src;
			img.onload = function(){
				if(typeof fn === "function"){
					fn.call(null, img);
				}else{
					img.loaded = true;
					img.className='fadeIn';
				}
			}
		}
	}

	function scroller(timer){
		timer = timer || 5e2;
		window.addEventListener('scroll', function(){
			clearTimeout(refreshTimer);
			refreshTimer = setTimeout(lazyLoad, timer);
		}, false);
	}


	var LazyLoad = (function(){
		return function(selector, attr, fn, timer){
			collection = $.querySelectorAll(selector);
			lazyLoad(attr, fn);
			scroller(timer);
		}
	})();

	window['lazyLoad'] = LazyLoad;

})(document, window, undefined);
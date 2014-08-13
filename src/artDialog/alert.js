/*!
 * artDialog - alert
 * base on artDialog
 * A modal Dailog
 * created by tommyshao@ipiao.com
 */
define(function(require){
    var $ = require('jquery');
    var Dialog = require('./dialog');
    var defaults = require('./dialog-config');
    var url = require[require.toUrl ? 'toUrl' : 'resolve'](defaults.imgUrl);
    var d, Notify, notifyTimer;

    var myAlert = {
        /* 提示 */
        notify: function(content, timer, skin){
            timer = timer || 3000;
            clearTimeout(notifyTimer);
            if(skin) Notify = null;
            if(!Notify){
                Notify = Dialog({
                    padding: '10px',
                    fixed: true,
                    skin: 'artdialog-alert ' + (skin  ? skin : 'artdialog-alert-notify '),
                    content: (content || '')
                });
            }else{
                Notify.content(content);
            }
            Notify.show();
            notifyTimer = setTimeout(function(){
               Notify.close();
            }, timer);
        },
        /* 警告框 */
        msg: function(){
            var content,title,callback;
            content = arguments[0];
            if(arguments.length === 3){
                title = arguments[1];
                callback = arguments[2];
            }else if(arguments.length === 2){
                callback = arguments[1];
            }
            d = Dialog({
                title: title || '',
                padding: '20px 50px',
                fixed: true,
                content: (content || ''),
                okValue: '确定',
                skin: 'artdialog-alert artdialog-alert-msg',
                ok: function(){
                    return typeof callback === "function" ? callback.call(this) : true;
                }
            });
            d.__popup.find('.ui-dialog-button').css('width', '100%').children().eq(0).css('width', '100%');
            d.show();
        },
        /* 成功提示 */
        success: function(content, timer){
            content = '<div style="color: #58a427"><img src="' + url + '/success.png" style="vertical-align:middle; margin-right:5px;" />' + content + '</div>';
            this.notify(content, timer, 'artdialog-alert-success');
        },
        /* 失败提示 */
        error: function(content, timer){
            content = '<div style="color: #c45151"><img src="' + url + '/error.png" style="vertical-align:middle; margin-right:5px;" />' + content + '</div>';
            this.notify(content, timer, 'artdialog-alert-error');
        },
        /* 提示 */
        warning: function(content, timer){
            content = '<div style="color: #c68d13"><img src="' + url + '/warning.png" style="vertical-align:middle; margin-right:5px;" />' + content + '</div>';
            this.notify(content, timer, 'artdialog-alert-warning');
        },
        /* 确认 */
        confirm: function(content){
            var title, callback, cancel;
            if ( arguments.length >= 3 ) {
                if ( typeof arguments[1] === "string" ) {
                    title = arguments[0];
                    content = arguments[1];
                    fn = arguments[2];
                    cancel = arguments[3];
                } else {
                    content = arguments[0];
                    fn = arguments[1];
                    cancel = arguments[2];
                }
            } else if ( arguments.length == 2 ) {
                titile = typeof arguments[1] === "string" ? arguments[1] : '';
                callback = typeof arguments[1] === "function" ? arguments[1] : null;
            }
            content = '<div style="color: #2d8daa"><img src="' + url + '/info.png" style="vertical-align:middle; margin-right:5px;" />' + content + '</div>';
            d = Dialog({
                title: title || '',
                fixed: true,
                content: (content || ''),
                cancelValue: '取消',
                skin: 'artdialog-alert artdialog-alert-confirm',
                cancel: function(){
                    return typeof cancel === "function" ? cancel.call(this) : true;
                },
                okValue: '确定',
                ok: function(){
                    return typeof callback === "function" ? callback.call(this) : true;
                }
            });
            d.show();
            return d;
        },
        /* 输入 */
        prompt: function(title, callback){
            var _myId = 'p__'+(new Date() * 1).toString(32).substr(2);
            var content = '<input type="text" id="'+ _myId +'" style="display: block; border:1px solid #E5E5E5;padding: 5px;border-radius: 2px;" />';
            d = Dialog({
                title: title || '',
                fixed: true,
                content: (content || ''),
                okValue: '确定',
                skin: 'artdialog-alert artdialog-alert-prompt',
                ok: function(){
                    var objInput = $("#"+_myId);
                    var strInput = objInput.val();
                    return typeof callback === "function" ? callback.call(this, strInput, objInput) : true;
                }
            });
            d.show();
            return d;
        },
        /* 加载 */
        loading: function(content){
            d = Dialog({
                padding: '10px',
                fixed: true,
                skin: 'artdialog-alert artdialog-alert-loading',
                content: '<div style="line-height: 30px; text-align: center;"><img src="'+ url +'/loading.gif" style="vertical-align: middle;" />'+ (content ? '<span style="margin-left: 10px;">'+ content +'</span>' : '') +'</div>'
            });
            d.show();
            return d;
        }
    };

    return myAlert;
});

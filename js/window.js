define(['jquery','jqueryUI'], function ($,$UI) {
    function Window() {
        this.cfg = {
            width: 500,
            height: 300,
            title: "system call",
            content: "",
            handler: null,
            hasCloseBtn: false,
            hasMask: true,
            test4AlertBtn: "确定",
            handler4AlertBtn: null,
            handlerCloseBtn: null,
            isDraggable:true,
        };
        this.handler={};
    }

    Window.prototype = {
        on : function(type,handler){
           
			if (typeof this.handlers[type]=='undefined') {
				this.handlers[type]=[];
			}
			this.handlers[type].push(handler);
		},
		fire : function(type,data){
            
			if (this.handlers[type] instanceof Array) {
				var handlers = this.handlers[type];
				for(var i=0,len=handlers.length;i<len;i++){
					handlers[i](data);
				}
			};
		},
        alert: function (cfg) {
            
            var config = $.extend(this.cfg, cfg);
            var that = this;//取消window绑定
            var boundingBox = $('<div class="window_boundingBox">' +
                '<div class="window_header">' + config.title + '</div>' +
                '<div class="window_body">' + config.content + '</div>' +
                '<div class="window_footer"><input type="button" value="确定"/></div>' +
                '</div>');

            var button = boundingBox.find(".window_footer input");
            var mask = null;


            button.click(function () {
                config.handler && config.handler();
                boundingBox.remove();
                mask & mask.remove();
                
            })

            boundingBox.appendTo('body');
            $.extend(this.config,config);
            boundingBox.css({
                width: config.width + "px",
                height: config.height + "px",
                left: (config.x || (window.innerWidth - config.width) / 2) + "%",
                top: (config.y || (window.innerHeight - config.height) / 2) + "%",
            });
            if (config.hasMask) {
                mask = $('<div class="window_mask"></div>');
                mask.appendTo('body');
            }
            if (config.hasCloseBtn) {
                
                var closeBtn = $('<span class="window_closeBtn">关闭</span>');
                closeBtn.appendTo($('.window_boundingBox'));
                closeBtn.click(function () {
                    config.handler4CloseBtn && config.handler4CloseBtn(); //弹出窗口的关闭按钮处理函数
                    $('.window_boundingBox').remove();
                    mask && mask.remove();
                    
                })
            }
            if (config.skinClassName) {
                boundingBox.addClass(config.skinClassName);
            }
            /*
            if(config.isDraggable){
				if (config.dragHandle) {
					boudingBox.draggable({handle:config.dragHandle});
				}else{
					boudingBox.draggable();
				}
            }*/
          


        },
        confirm: function () {},
        prompt: function () {},
    }
    return {
        Window: Window
    }
})
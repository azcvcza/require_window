define(['jquery'],function($){
    function Window(){
        this.cfg = {
            width:500,
            height:300,
            title:"system call",
            content:"",
            handler:null,
        }
    }

    Window.prototype={
        alert:function(cfg){
            var config = $.extend(this.cfg,cfg);
            console.log(config)
            var boundingBox =$('<div class="window_boundingBox">'
            +'<div class="window_header">'+config.title+'</div>'
            +'<div class="window_body">'+config.content+'</div>'
            +'<div class="window_footer"><input type="button" value="确定"/></div>'
            +'</div>');
            //直接搞 <div class="xxx"></div>就失败了
            var button = boundingBox.find(".window_footer input")
            button.click(function(){
                config.handler && config.handler();
                boundingBox.remove();
            })
            boundingBox.appendTo('body');
            boundingBox.css({
                width:config.width+"px",
                height:config.height+"px",
                left:(config.x || (window.innerWidth - config.width)/2)+"%",
                top:(config.y || (window.innerHeight - config.height)/2)+"%",
            })
            
        },
        confirm:function(){},
        prompt:function(){},
    }
    return{
        Window:Window
    }
})
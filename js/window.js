define(['jquery'],function($){
    function Window(){}

    Window.prototype={
        alert:function(content,handler){
            var boundingBox =$('<div></div>');
            //直接搞 <div class="xxx"></div>就失败了
            boundingBox.addClass("window_boundingBox")
            boundingBox.appendTo('body');
            boundingBox.html(content);
            
            var button = $('<input type="button" value="确定"></input>')
            button.appendTo(boundingBox);
            button.click(function(){
                handler&&handler();
                boundingBox.remove();
            })
            
        },
        confirm:function(){},
        prompt:function(){},
    }
    return{
        Window:Window
    }
})
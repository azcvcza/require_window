define(['jquery'],function($){
    function Window(){}

    Window.prototype={
        alert:function(content){
            var boundingBox =$('<div></div>');
            //直接搞 <div class="xxx"></div>就失败了
            boundingBox.addClass("window_boundingBox")
            boundingBox.appendTo('body');
            boundingBox.html(content);
            console.log(boundingBox)
            console.log(content)
            
        },
        confirm:function(){},
        prompt:function(){},
    }
    return{
        Window:Window
    }
})
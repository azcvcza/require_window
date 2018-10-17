require.config({
    paths: {
        jquery: 'jquery-3.1.0'
    }
});
require(['jquery', 'window'], function ($, w) {
    $('#click').click(function () {
        new w.Window().alert({
            width: 500,
            height: 250,
            x:50,
            y:30,
            title:"系统消息",
            content: "alert box",
            handler: function(){
                alert("window closed")
            },
        });
    })


})
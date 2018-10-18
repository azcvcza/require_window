require.config({
    paths: {
        jquery: 'jquery-3.1.0',
        jqueryUI: 'jquery-ui.min'
    }
});
require(['jquery', 'window'], function ($, w) {
    $('#click').click(function () {
        var win = new w.Window();
        win.alert({
            title: '提示',
            content: 'Welcome!!!',
            handler: function () {
                alert('you click the button');
            },
            width: 300,
            height: 150,
            y: 30,
            x: 55,
            hasCloseBtn: true,
            text4AlertBtn: 'OK',
            dragHandle: '.window_header',
            skinClassName: 'window_skin_a',
             handler4AlertBtn:function(){
             	console.log('你点击了确定按钮');
             },
             handler4CloseBtn:function(){
             	console.log('你点击了关闭按钮');
             }
        });
        
    })


})
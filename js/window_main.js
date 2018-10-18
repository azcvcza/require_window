require.config({
    paths: {
        jquery: 'jquery-3.1.0',
        jqueryUI: 'jquery-ui.min'
    }
});
require(['jquery', 'window'], function ($, w) {
    $('#click').click(function () {
        var win = new w.Window().alert({
            title: '提示',
            content: 'Welcome!!!',
            width: 300,
            height: 150,
            y: 250,
            x: 600,
            hasCloseBtn: true,
            text4AlertBtn: 'OK',
            dragHandle: '.window_header',
            skinClassName: 'window_skin_a',
            // handler4AlertBtn:function(){
            // 	alert('你点击了确定按钮');
            // },
            // handler4CloseBtn:function(){
            // 	alert('你点击了关闭按钮');
            // }
        })
    });

    $('.btn_confirm').click(function () {
        var win = new w.Window().confirm({
            title: '系统消息',
            content: '您确定要删除这个文件吗',
            width: 300,
            height: 150,
            y: 50,
            x: 600,
            text4ConfirmBtn: '是',
            text4CancelBtn: '否',
            dragHandle: '.window_header'
        }).on('confirm', function () {
            alert('确定');
        }).on('cancel', function () {
            alert('取消');
        });

    })


})
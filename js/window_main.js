require.config({
    paths:{
        jquery:'jquery-3.1.0'
    }
});
require(['jquery','window'],function($,w)
{
    new w.Window().alert("welcome");
    
})
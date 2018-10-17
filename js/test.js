var abc = 5;

function helloworld(abc){
    this.abc = abc;
}
helloworld.prototype = {
    fuck:function(){
        console.log(this.abc);
    }
}
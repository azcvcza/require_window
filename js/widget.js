define(
    function(){
        function Widget(){
            this.handler={}
        };
        Widget.prototyp={
            on:function(type,handlers){
                if(typeof this.handlers[type]=='undefined'){
                    this.handlers[type] = [];
                }
                this.handlers[type].push(handler);

                return this;
            },
            fire:function(type,data){
                if(this.handlers[type] instanceof Array){
                    var handlers = this.handlers[type];
                    for(var i=0,len=handlers.length;i<len;i++){
                        handlers[i](data);
                    }
                }
            }
        }
        return{
            Widget:Widget
        }
    }
)
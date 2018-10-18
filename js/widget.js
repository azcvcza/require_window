define(['jquery'],
    function($){
        function Widget(){
            this.handler={}
            this.boundingBox = null
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
            },
            renderUI:function(){},
            bindUI:function(){},
            syncUI:function(){},
            render:function(container){
                this.renderUI();
                this.handlers = {};
                this.bindUI();
                this.syncUI();
                $(container||document.body).appent(this.boundingBox);
            },
            destructor:function(){},
            destroy:function(){
                this.destructor();
                this.boundingBox.off();
                this.boundingBox.remove();
            }
        }
        return{
            Widget:Widget
        }
    }
)
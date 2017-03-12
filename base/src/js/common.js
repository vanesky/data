
window.app = {};

(function(){

    var path = '';

    var workName = 'm-featsky';

    var version = '0.0.1';

    var base = '';

    this.ajax = function(type,url,obj,sucCallback,errCallback,loadObj){

        $.ajax({

            type:type,

            url:url,

            data:obj,

            success:function(data,status){

                sucCallback(JSON.parse(data),status)

            },

            error:function(xhr,err,msg){

                if(errCallback){

                    errCallback(xhr,err,msg);

                }else{

                    com.prompt(0,'网络错误');
                }
            },

            timeout:4000,

            beforeSend:function(){

                if(window.com&&com.load){ com.load(loadObj);}

            },

            complete:function(){

                if(window.com&&com.load){ $('#load').remove();}
            }

        })

    },

    this.url = function(url){

        if(path == 'develop'){

            base = "http://192.168.0.102/m-featsky/api/";

        }else if(path == 'test'){

            base = "http://test.featsky.com/api/";

        }else{ base = "http://www.featsky.com/m-featsky/api/" }

        return base + url + "?workName=" + workName + "&date=" + new Date().getTime();

    },

    this.imgUrl = function(url){

        if(path == 'develop'){

            base = "http://192.168.0.102/m-featsky/img/";

        }else if(path == 'test'){

            base = "http://test.featsky.com/img/";

        }else{ base = "http://www.featsky.com/m-featsky/img/" }

        return base + url;


    }


    /**********common**********/

    this.device = function(){                          //种植设备信息

        //if(window.localStorage.device){return false}

        var bom1 = navigator.userAgent,send = {};

        //var bom2 = navigator.appName;

        if(bom1.match(/iPhone|iPad/i)){

            send.version = Number(bom1.match(/OS\s([5-9])_/)[1]);

            send.name = bom1.match(/(iPhone|iPad)/i)[1];

        }else if(bom1.match(/Android/i)){

            send.version = Number(bom1.match(/Android\s(\d\.\d)/)[1]);

            send.name = 'Android';

        }else if(bom1.match(/Firefox|Chrome/i)){

            send.version = Number(bom1.match(/(Firefox|Chrome)\/(\d+)\./)[2]);

            send.name = bom1.match(/Firefox|Chrome/i)[0];

        }else if(bom1.match(/MSIE/)){

            send.version = Number(bom1.match(/MSIE\s(\d+)\./)[1]);

            send.name = 'ie';

        }

        send.h = window.screen.height;

        send.w = window.screen.width;

        localStorage.device = JSON.stringify(send);

    };

    this.supportCss3 = function(attr){                          //是否支持Css3

        var box = ['-webkit-','-os-','-ms-','-moz-'];

        var defaultStyle = document.documentElement.style;

        if(attr in defaultStyle){

            return true;

        }else{

            for(var i=0;i<box.length;i++){

                if(box[i]+attr in defaultStyle){

                    return true;

                }

            }

        }

        return false;

    };

    this.validateMethod = function(validate){

        var str = [];

        $.each(validate.rules,function(attrName,attrObj){

            var value = $("[name='"+attrName+"']").val();

            if(!value){  value = $("[name='"+attrName+"']").text() }

            $.each(attrObj,function(ruleName,ruleParam){

                if(!window.validateRule[ruleName](value)){

                    str.push(validate.prompt[attrName][ruleName]);
                }
            })
        });

        if(str.length>0){

            com.prompt(0,str[0]);

            return false;
        }
        return true;
    };


}).apply(app);
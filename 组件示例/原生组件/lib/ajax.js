
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

                    //errCallback(xhr,err,msg);

                    com.prompt(0,'网络错误');
                }
            },

            timeout:4000,

            beforeSend:function(){

                if(window.com&&com.load){ com.load(loadObj);}

            },

            complete:function(){

                if(window.com&&com.load){ $('#load').hide();}
                
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

}).apply(app);
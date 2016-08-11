
var app = {};

(function(){

    this.ajax = function(type,url,data,suc,err,bef){

        $.ajax({

            type:type,

            url:url,

            data:data,

            success:function(data){

                suc(data,status)

            },

            error:function(){

                if(err){ err(xhr,err,msg) }else{ alert('错误') }

            },

            timeout:5000,

            beforeSend:function() { bef() }

        })

    },

    this.url = function(url){

        var path = 'develop';

        var workName = 'm-featsky';

        var version = '0.0.1';

        var base = '';

        if(path == 'develop'){

            base = "http://192.168.117.12:8080/api/";

        }else if(path == 'test'){

            base = "http://test.featsky.com/api/";

        }else{ base = "http://www.featsky.com/api/" }

        return base + url + "?workName=" + workName;

    }

}).apply(app)
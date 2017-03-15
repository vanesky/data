
!function(window){

    "use strict";

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


        },


        //********user方法********

        this.jumpLogin = function(sign){

            var uid = localStorage.getItem('uid');

            if(uid == null || uid == ''){

                window.open('login.html','_self');

            }else{
                return 1;
            }

        },

        this.clearLogin = function(){

            localStorage.removeItem('uid');

            localStorage.removeItem('name');

            localStorage.removeItem('loginName');

            localStorage.removeItem('loginPass');

        },

        this.setLogin = function(sign){

            app.clearLogin();

            var signObj = sign;

            localStorage.setItem('uid', signObj.uid);

            localStorage.setItem('name', signObj.name);

            localStorage.setItem('loginName', signObj.loginName);

            localStorage.setItem('loginPass', signObj.loginPass);

            localStorage.setItem('user',JSON.stringify(signObj));

            //设置过期时间
            var expire = new Date().getTime();

            localStorage.setItem('expire',expire + 7*24*60*60*1000);

        },

        this.setCookie = function(name,value,expday){

            var expdate = new Date();

            expdate.setTime(expdate.getTime()+expday*60*1000);

            document.cookie = name+'='+encodeURIComponent(value)+';expires='+expdate.toUTCString()+";path=/";

        },

        this.getCookie = function(c_name){

            if(document.cookie.length>0){

                var arrstr = document.cookie.split("; ");

                for(var i = 0;i<arrstr.length;i++){

                    var temp = arrstr[i].split("=");

                    if(temp[0] == c_name) {return decodeURIComponent(temp[1]); }
                }

            }

        }

        this.formatDate = function (strTime,sel) {

            var date = new Date(strTime);

            var y = date.getFullYear();

            var m = date.getMonth()+1;

            var d = date.getDate();

            var h = date.getHours();

            var f = date.getMinutes();

            var s = date.getSeconds();

            var arr = [m,d,h,f,s];

            arr.forEach(function(val,index,self){

                if(val.toString().length<=1){

                    self[index] = '0' + val;
                }

            })
            //var str = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
            if(sel =='date'){

                return y+"-"+arr[0]+"-"+arr[1];

            }else{

                return y+"-"+arr[0]+"-"+arr[1]+" "+arr[2]+":"+arr[3]+":"+arr[4]
            }
        }


    }).apply(app);


}(window);





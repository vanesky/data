
window.com = {};

(function(){

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
    };

    this.jumpLogin = function(sign){

        var uid = localStorage.getItem('uid');

        if(uid == null || uid == ''){

            window.open('login.html','_self');

        }else{
            return 1;
        }

    };

    this.clearLogin = function(){

        localStorage.removeItem('uid');

        localStorage.removeItem('name');

        localStorage.removeItem('loginName');

        localStorage.removeItem('loginPass');

    };

    this.setLogin = function(sign){

        com.clearLogin();

        var signObj = sign;

        localStorage.setItem('uid', signObj.uid);

        localStorage.setItem('name', signObj.name);

        localStorage.setItem('loginName', signObj.loginName);

        localStorage.setItem('loginPass', signObj.loginPass);

        localStorage.setItem('user',JSON.stringify(signObj));

        //设置过期时间
        var expire = new Date().getTime();

        localStorage.setItem('expire',expire + 7*24*60*60*1000);

    };

    this.setCookie = function(name,value,expday){

        var expdate = new Date();

        expdate.setTime(expdate.getTime()+expday*60*1000);

        document.cookie = name+'='+encodeURIComponent(value)+';expires='+expdate.toUTCString()+";path=/";

    };

    this.getCookie = function(c_name){

        if(document.cookie.length>0){

            var arrstr = document.cookie.split("; ");

            for(var i = 0;i<arrstr.length;i++){

                var temp = arrstr[i].split("=");

                if(temp[0] == c_name) {return decodeURIComponent(temp[1]); }
            }

        }

    };


}).apply(com);
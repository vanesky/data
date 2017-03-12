//用户方法
window.user = {

    jumpLogin : function(sign){

        var uid = localStorage.getItem('uid');

        if(uid == null || uid == ''){

            window.open('login.html','_self');

        }else{
            return 1;
        }

    },

    clearLogin : function(){

        localStorage.removeItem('uid');

        localStorage.removeItem('name');

        localStorage.removeItem('loginName');

        localStorage.removeItem('loginPass');

    },

    setLogin:function(sign){

        user.clearLogin();

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

    setCookie : function(name,value,expday){

        var expdate = new Date();

        expdate.setTime(expdate.getTime()+expday*60*1000);

        document.cookie = name+'='+encodeURIComponent(value)+';expires='+expdate.toUTCString()+";path=/";

    },

    getCookie : function(c_name){

        if(document.cookie.length>0){

            var arrstr = document.cookie.split("; ");

            for(var i = 0;i<arrstr.length;i++){

                var temp = arrstr[i].split("=");

                if(temp[0] == c_name) {return decodeURIComponent(temp[1]); }
            }

        }

    },

    formatDate:function (strTime,sel) {

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


}


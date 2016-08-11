//用户方法
window.user = {

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

    jumpLogin : function(sign){

        var uid = localStorage.getItem('uid');

        if(uid == null || uid == ''){ window.open('login.html','_self')};

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

    }
}


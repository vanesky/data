<?php
    //header("content-Type: text/html; charset=Utf-8");
    //网页授权
    $code = $_GET['code'];

    $url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx6aa2cff9a0a99a3f&secret=7435ea2b161bcf06580e3f1651b4e9d8&code=".$code."&grant_type=authorization_code";

    $info = json_decode(getToken($url),true);

    $token = $info['access_token'];

    $openid = $info['openid'];

    $getUserInfo = "https://api.weixin.qq.com/sns/userinfo?access_token=".$token."&openid=".$openid."&lang=zh_CN";

    print_r(json_decode(getToken($getUserInfo),true));


    //**********************************************************************************






    function getToken($url){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch, CURLOPT_HEADER,0);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)');
        curl_setopt($ch, CURLOPT_ENCODING, 'gzip');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }


?>
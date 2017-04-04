<?php

    $appid = "wx6aa2cff9a0a99a3f";

    $secret = "7435ea2b161bcf06580e3f1651b4e9d8";

    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$secret;

    $output = getToken($url);

    $arr = (array)json_decode($output);

    $token = $arr["access_token"];



    //获取微信服务器列表***********************************************************************
    $ip = "https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token=".$token."";

    $list = json_decode(getToken($ip),true);

    $valueArr = '';

    $ipa = '112.90.78.165';

    //循环列表
    foreach($list['ip_list'] as $key => $value){

        $valueArr.= $value."#";
    }

    if(strpos("#".$valueArr,$ipa) > 0){

        echo "1";
    }else{

        echo "0";exit;
    }




    //***********************************************************************
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
<?php

    $appid = "wx6aa2cff9a0a99a3f";

    $secret = "7435ea2b161bcf06580e3f1651b4e9d8";

    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$secret;

    $output = getToken($url);

    $arr = (array)json_decode($output);

    $token = $arr["access_token"];



    //长连接转短连接*********************************************************

    $dateUrl = '{"action":"long2short","long_url":"http://wap.koudaitong.com/v2/showcase/goods?alias=128wi9shh&spm=h56083&redirect_count=1"}';

    $shortUrl = "https://api.weixin.qq.com/cgi-bin/shorturl?access_token=".$token."";

    print_r( json_decode(getShort($dateUrl,$shortUrl),true));

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

    function getShort($data,$url){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"POST");
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST,false);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)');
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION,1);
        curl_setopt($ch, CURLOPT_AUTOREFERER,1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,$data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);

        $info = curl_exec($ch);
        if(curl_errno($ch)){
            return curl_errno($ch);
        }
        curl_close($ch);
        return $info;
    }

?>
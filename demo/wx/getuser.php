<?php
    header("content-Type: text/html; charset=Utf-8");

    $appid = "wx6aa2cff9a0a99a3f";

    $secret = "7435ea2b161bcf06580e3f1651b4e9d8";

    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$secret;

    $output = getToken($url);

    $arr = (array)json_decode($output);

    $token = $arr["access_token"];

    //**********************************************************************************
    //获取用户openid
    $userUrl = "https://api.weixin.qq.com/cgi-bin/user/get?access_token=".$token."";

    $arrOpen = json_decode(getToken($userUrl),true);

    $idList = $arrOpen['data']['openid'];

    foreach($idList as $value){

        //获取用户基本信息
        $infoUrl = "https://api.weixin.qq.com/cgi-bin/user/info?access_token=".$token."&openid=".$value."&lang=zh_CN";

        $infoArr = json_decode(getToken($infoUrl),true);

        print_r($infoArr['nickname']);
        //echo $value . "</br>";

    }

    //print_r($idList);





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
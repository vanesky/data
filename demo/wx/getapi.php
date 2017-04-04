<?php

    $token = "pGHtrjcP0HB6RcUqICCXNfaeoUf2B_Y81ALf6nFfhUAFE6z9J2RtpwyLzcCGZnjruB9-FyDcJkatJ7zGwaxt6zbJa1oPAc_VdSVMScNjHpxIjn37kNHKH10L0jmD8LEDFIMgABABEI";

    $api = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=".$token."&type=jsapi";

    $url = json_decode(getToken($api),true);

    print_r($url);




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
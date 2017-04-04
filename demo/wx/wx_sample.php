<?php
/**
  * wechat php test
  */

//define your token
define("TOKEN", "weixin");
$wechatObj = new wechatCallbackapiTest();
if($_GET["echostr"]){
    $wechatObj->valid();
}else{
    $wechatObj->responseMsg();
};
//$wechatObj->valid();

class wechatCallbackapiTest
{
	public function valid()
    {
        $echoStr = $_GET["echostr"];

        //valid signature , option
        if($this->checkSignature()){
        	echo $echoStr;
        	exit;
        }
    }

    public function responseMsg()
    {
		//get post data, May be due to the different environments
		$postStr = $GLOBALS["HTTP_RAW_POST_DATA"];

      	//extract post data
		if (!empty($postStr)){
                /* libxml_disable_entity_loader is to prevent XML eXternal Entity Injection,
                   the best way is to check the validity of xml by yourself */
                libxml_disable_entity_loader(true);
              	$postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
                $fromUsername = $postObj->FromUserName;
                $toUsername = $postObj->ToUserName;
                $keyword = trim($postObj->Content);
                //增加获取
                $event = $postObj->Event;
                $eventKey = $postObj->EventKey;
                $mesType = $postObj->MsgType;
                $time = time();
                $textTpl = "<xml>
							<ToUserName><![CDATA[%s]]></ToUserName>
							<FromUserName><![CDATA[%s]]></FromUserName>
							<CreateTime>%s</CreateTime>
							<MsgType><![CDATA[%s]]></MsgType>
							<Content><![CDATA[%s]]></Content>
							<FuncFlag>0</FuncFlag>
							</xml>";

                //关注事件并未关注过
				if($event == "subscribe" && substr($eventKey,0,8) == 'qrscene_'){

	                $msgType = "text";
                	$contentStr = "你扫描了二维码,未关注过。";
                	$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                	echo $resultStr;
				}

				if($event == "SCAN"){

	                $msgType = "text";
                	$contentStr = "你关注过。";
                	$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                	echo $resultStr;
				}

                //关注事件
				if($event == "subscribe"){
	                $msgType = "text";
                	$contentStr = "欢迎关注 FeatSky!";
                	$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                	echo $resultStr;
				}

				if($event == "CLICK" and $eventKey == "like"){
	                $msgType = "text";
                	$contentStr = "谢谢哦";
                	$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                	echo $resultStr;
				}else if($event == "CLICK" and $eventKey == "hello"){

	                $msgType = "text";
                	$contentStr = "hello 今天天气不错！";
                	$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                	echo $resultStr;
				}

				if($mesType == "image"){
	                $msgType = "text";
                	$contentStr = "你发送了一个图片";
                	$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                	echo $resultStr;
				}

                //关键子不为空
				if(!empty( $keyword ))
                {

                    if($keyword == "1"){

                        $textTpl = "<xml>
                                   <ToUserName><![CDATA[%s]]></ToUserName>
                                   <FromUserName><![CDATA[%s]]></FromUserName>
                                   <CreateTime>%s</CreateTime>
                                   <MsgType><![CDATA[news]]></MsgType>
                                   <ArticleCount>1</ArticleCount>
                                   <Articles>
                                       <item>
                                           <Title><![CDATA[这是一个标题]]></Title>
                                           <Description><![CDATA[这是很长的描述]]></Description>
                                           <PicUrl><![CDATA[http://www.featsky.com/m-featsky/img/head1.jpg]]></PicUrl>
                                           <Url><![CDATA[http://m.featsky.com]]></Url>
                                       </item>
                                   </Articles>
                                   </xml>";

                        $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time);
                        echo $resultStr;

                    };

              		$msgType = "text";
                	$contentStr = "hello you are very cute!";
                	$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                	echo $resultStr;
                }else{
                	echo "Input something...";
                }

        }else {
        	echo "";
        	exit;
        }
    }
		
	private function checkSignature()
	{
        // you must define TOKEN by yourself
        if (!defined("TOKEN")) {
            throw new Exception('TOKEN is not defined!');
        }
        
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];
        		
		$token = TOKEN;
		$tmpArr = array($token, $timestamp, $nonce);
        // use SORT_STRING rule
		sort($tmpArr, SORT_STRING);
		$tmpStr = implode( $tmpArr );
		$tmpStr = sha1( $tmpStr );
		
		if( $tmpStr == $signature ){
			return true;
		}else{
			return false;
		}
	}
}

?>
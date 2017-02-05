<?php

    //超级全局变量
    $GLOBALS['b'] = 10;

    $a = 1;

    //php按引用传参数
    function fun1(&$obj){

        $obj = $obj + 3;

    }
    //fun1($a);

    //include 加载模块组件
    include "library/demo.php";

    //require("demo.php");

    //echo com1();


    //__FILE__获取当前文件路径



?>
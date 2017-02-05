<?php


    //获取变量类型
    /*$box = 0;

    echo gettype($box);*/

    //==============================================

    //设置类型(原型类型转换)
    /*$sum = 100;
    settype($sum,"string");
    echo gettype($sum)*/

    //整型转换（整体转换并非本身）
    //intval() floatval() strval()

    //==============================================

    //常量无法更改
   /* define('one',200);
    echo one;
    echo $_SERVER["HTTP_HOST"];*/

    //==============================================
    //双引号虽然是字符串 但是放入变量可以解析
    //php.是字符串之间的运算不同于js +号

    //is_int() mt_rand(0,10)  range(1,10) 数组范围  count(obj)对象长度

    $arr = Array('lisa','jack'=>10,'joy'=>58);

    echo $arr;

    /*foreach($arr as $key => $val){

        echo $key . "<br/>";

    }*/

    //each返回第一个键值对数组
    //next先前移再返回
    //reset 指针归位
    //array_count_values 统计数组相同的值出现次数



?>


















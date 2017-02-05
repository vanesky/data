<?php

    $con = mysql_connect("localhost","root","");

    if (!$con){

        die('Could not connect: ' . mysql_error());

    }
    //============================================================

    //创建数据库
    /*if (mysql_query("create database demo",$con)){

        echo "Database created";

    }else{

        echo "Error creating database: " . mysql_error();

    }*/

    //============================================================
    mysql_select_db("demo", $con);
    //============================================================

    //创建表
    /*$createTable = "create table test
    (
    firstName varchar(15),
    lastName varchar(15),
    age int
    )";
    mysql_query($createTable,$con);*/

    //============================================================

    //insert插入
    /*$insertData = "insert into test(firstName,lastName,age)values('joy','jie',15)";

    mysql_query($insertData,$con);*/

    //============================================================

    //查询表
    /*$result = mysql_query("SELECT * FROM test");

    while($row = mysql_fetch_array($result)){

        echo $row['firstName'] . " " . $row['lastName'] . " " . $row['age'] ;

        echo "<br/>";

    }*/

    //============================================================

    //where条件查询 取出行
    /*$result = mysql_query("SELECT * FROM test where id=1");

    while($row = mysql_fetch_array($result)){

        echo $row['firstName'] . " " . $row['lastName'] . " " . $row['age'] ;

        echo "<br/>";

    }*/

    //============================================================

    //根据某一字段对行进行排序
   /* $result = mysql_query("SELECT * FROM test order by age");

    while($row = mysql_fetch_array($result)){

        echo $row['firstName'] . " " . $row['lastName'] . " " . $row['age'] ;

        echo "<br/>";

    }*/

    //============================================================

    //更新数据
    /*$result = "update test set age = '36' where id = 4 and firstName = 'joy'";

    mysql_query($result,$con);*/

    //============================================================

    //删除数据

    //mysql_query("DELETE FROM test WHERE id=3");

   //============================================================


    mysql_close($con);
?>























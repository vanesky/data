<?php
    header('Access-Control-Allow-Origin:*');


    //$con = mysql_connect("localhost:3306","root","");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("sq_featsky", $con);

?>
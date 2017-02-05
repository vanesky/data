<?php
    date_default_timezone_set("Asia/Shanghai");

    //返回文件名
    //echo basename($path);

    //返回路径
    //echo dirname($path);0

    //获取路径文件的信息

    //print_r( pathinfo($path));

    //转换绝对路径
    //echo realpath("dir_file.php");

    //取得文件大小
    //echo round(filesize("dir_file.php")/1024,2)."kb";

    //计算磁盘可用空间
    //echo round(disk_free_space("c:")/1024/1024/1024,2)."G";

    //计算磁盘的总空间
    //echo round(disk_total_space("c:")/1024/1024/1024,2)."G";

    //确定文件的最后访问时间
    //echo date("Y-m-d H:i:s",fileatime("D:\web\gulpfile.js"));

    //确定文件的最后文件内容修改时间
    //echo date("Y-m-d H:i:s",filemtime($a));


    //=============================================================================
    $str = "this is first say\r\n";
    //fopen  /w只写(删除文件内容,如果不存在则创建) 返回资源类型句柄  /a追加  /r只读出
    //$fp = fopen('file.txt',w);


    //写入数据 (\r\n可以换行)
    //fwrite($fp,$str,strlen($str));

    //读取数据 fgetc(读出一个字符并移动指针到下一个字符)
    //fgets读出一行
    //fread(读取定量字符)
    //fpassthru(指针后所有字符 返回总长度)

    //echo fpassthru($fp);

    //file(每行来分别存放一个数组)
    //readfile(返回文件总长度)

    //$array_file = file("file.txt");
    //echo readfile('file.txt');

    //feof是否指针到达了文件结尾
    //file_exists文件是否存在
    //unlink删除一个文件
    //rewind回到指针位置不返回
    //fseek指针定位
    //ftell指针当前位置

    //fseek($fp,2);
    //echo fgetc($fp);

    //php5 file_put_contents('file.txt','hahahaha')  ==  【$fp = fopen('file.txt',w); fwrite($fp,$str,strlen($str))】
    //php5 file_get_contents('file.txt')  ==  【fopen('file.txt',r); echo readfile('file.txt')】


    //关闭资源句柄
    //fclose($fp);

    //===========================================================================

    //打开目录
    //$dir = opendir("D:\web\demo\php");
    //读出目录
    //echo readdir($dir);

    //while($a = readdir($dir)){

        //echo $a."<br/>";

    //}

    //scandir() 不需要打开目录
    //print_r(scandir("D:\web\demo\php"));

    //删除目录相对和绝对路径都是可以 rmdir
    //unlink('file1.txt');

    //重命名目录和文件 rename
    //rename('file.txt','file1.txt');




    //closedir($dir);

?>



















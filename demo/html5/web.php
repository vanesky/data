
<?php

    header('Access-Control-Allow-Origin:*');
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');

    $time = date('r');
    echo "data: The server time is: {$time}\n\n";

    //echo "date:".date('Y-m-d H-i-s');

    echo "\n\n";

    //echo "retry:1000\n";

    //flush();



?>

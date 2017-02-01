<?php
$url = $_POST['url'];
$file = fopen($url,"r");

if($file){
    while($line = fgets($file)){
        $data .= $line;
    }
    fclose($file);

    echo $data;
}else{
    echo "ロード失敗";
}
?>
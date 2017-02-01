<?php
$data = $_POST['data'];
$url = $_POST['url'];
$fp = fopen($url,"w");

if($fp){
    if(fwrite($fp,$data)){
        fclose($fp);
        echo "アップロード成功";
    }else{
        echo "アップロード失敗";
    }
}else{
    echo "アップロード失敗";
}
?>

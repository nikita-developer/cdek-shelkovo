<?php
    $inn = "не определено";
    $fio = "не определен";

    if(isset($_POST["inn"])) {
        $inn = $_POST["inn"];
    }
    if(isset($_POST["fio"])) {
        $fio = $_POST["fio"];
    }

    echo "ИНН: $inn <br> ФИО: $fio";
?>
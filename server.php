<?php
    
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $street = $_POST['street'];
    $house = $_POST['house'];
    $corpus = $_POST['corpus'];
    $flat = $_POST['flat'];
    $floor = $_POST['floor'];
    $comments = $_POST['comments'];
    $payment = $_POST['payment'];

    $call = $_POST['call'];
    $call = isset($call) ? 'НЕТ' : 'ДА';
    
    $mail_message = '<html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя: ' . $name . '</li>
            <li>Телефон: ' . $tel . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $house . '</li>
            <li>Корпус: ' . $corpus . '</li>
            <li>Квартира: ' . $flat .'</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарии: ' . $comments . '</li>
            <li>Оплата: ' . $payment . '</li>
            <li>Звонок: ' . $call . '</li>
        </ul>
    </body>
</html> ';

    $headers = "From: Администратор сайта <ruslanmust87@gmail.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    
    $mail = mail('ruslanmust87@ya.ru', 'Заказ', $mail_message, $headers);

    if ($mail) {
        echo 'done';
    } else {
        echo 'error';
    };
?>
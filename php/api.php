<?php

// Połączenie z bazą danych
$host = 'db4free.net';
$dbname = 'jk_kebab';
$username = 'jk_root';
$password = 'uZnvM42367';
$table = "test";
// Nawiązanie połączenia z bazą danych
$conn = mysqli_connect($host, $username, $password, $dbname);

// Sprawdzenie połączenia
if (mysqli_connect_errno()) {
    die('Błąd połączenia z bazą danych: ' . mysqli_connect_error());
}
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Sprawdź, czy żądanie zostało wysłane metodą POST
  
    // Odbierz zmienne przesłane metodą POST
    $param1 = $_GET['param1'];
    $param2 = $_GET['param2'];
    $query = 'INSERT INTO '.$table.'(kolumna1, kolumna2) VALUES (4, 2)';
    $result = mysqli_query($conn, $query);

    echo($result);
}

mysqli_close($conn);

?>
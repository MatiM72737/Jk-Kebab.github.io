<?php

// Połączenie z bazą danych
$host = 'adres_hosta';
$dbname = 'nazwa_bazy_danych';
$username = 'użytkownik';
$password = 'hasło';

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Błąd połączenia z bazą danych: " . $e->getMessage());
}

// Sprawdzenie, czy otrzymano żądanie POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Odbierz dane przesłane z JavaScriptu
    $data = json_decode(file_get_contents('php://input'), true);

    // Wprowadź dane do bazy danych
    $query = $db->prepare('INSERT INTO tabela (kolumna1, kolumna2) VALUES (:wartosc1, :wartosc2)');
    $query->bindParam(':wartosc1', $data['parm1']);
    $query->bindParam(':wartosc2', $data['parm2']);
    $query->execute();

    // Zwróć odpowiedź
    $response = array('message' => 'Rekord został dodany do bazy danych');
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Nieobsługiwana metoda HTTP
    http_response_code(405);
    echo 'Nieobsługiwana metoda HTTP.';
}

?>
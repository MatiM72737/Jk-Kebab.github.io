<?php
$id_sos = $_GET['id_sos'];
$id_mieso = $_GET['id_mieso'];
$id_opakowanie = $_GET['id_opakowanie'];
$adres = $_GET['adres'];
$nr_tel = $_GET['nr_tel'];

$host = 'db4free.net';
$username = 'jk_root';
$password = 'uZnvM42367';
$database = 'jk_kebab';
$conn = mysqli_connect($host, $username, $password, $database);

$sql = "SELECT cena FROM miesa WHERE id = $id_mieso";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $cenaMiesa = intval($row["cena"]);
}
$sql = "SELECT cena FROM opakowania WHERE id = $id_opakowanie";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $cenaOpakowania = intval($row["cena"]);
}
$sql = "SELECT cena FROM sosy WHERE id = $id_sos";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $cenaSosu = intval($row["cena"]);
}
$cenaCala = $cenaMiesa + $cenaOpakowania + $cenaSosu;



$sql = "INSERT INTO zamowienia (id_sos, id_mieso, id_opakowanie, adres, nr_tel, cena)
        VALUES ('$id_sos', '$id_mieso', '$id_opakowanie', '$adres', '$nr_tel', '$cenaCala')";
                  
if ($conn->query($sql) === TRUE) {
    echo $cenaCala;
} else {
    echo "Błąd podczas dodawania rekordu: " . $conn->error;
}
$conn->close();
?>
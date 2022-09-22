<?php 

$server = "localhost";
$user = "root";
$pass = "";
$database = "db_bob";

$conn = mysqli_connect($server, $user, $pass, $database);

if (!$conn) {
    die("<script>alert('Conección fallida.')</script>");
}

?>
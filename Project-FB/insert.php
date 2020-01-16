<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "FB";
$fname = $lname=$user=$pass=$dob=$gender="";
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$user = $_POST['user'];
$pass = $_POST['pass'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "(INSERT INTO users (firstname, lastname, username , password ,dob , gender )
    VALUES (?s,?s,?s,?s,?s,?s)",$fname, $lname, $user, $pass, $dob, $gender);
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "Successfully Created account";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>
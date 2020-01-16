<html>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "FB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (firstname, lastname, username, password)
VALUES ('John', 'Doe', 'john@example.com', 'asy');";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>
</body>
</html>
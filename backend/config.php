<?php

	$dbhost = 'localhost';
	$dbuser = 'root';
	$dbname = 'parkingbuddy';
	$dbpass = '';
	$port = 3306;

	//Establish Connection with the Database
	$conn=mysqli_connect($dbhost,$dbuser,$dbpass,$dbname, $port);

	if($this->conn->connect_error) {
    	die("Connection failed: " . $conn->connect_error);
	}


?>
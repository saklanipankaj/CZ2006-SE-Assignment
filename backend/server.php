<?php

	require_once 'ServerCarparkCollection.php';
	require_once 'config.php';
	
	if (mysqli_connect_errno())
	{
		ECHO "BITCH WORK";
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	else
	{
		$server = new ServerCarparkCollection($dbhost, $dbuser, $dbname, $dbpass, $port);
	}

?>
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


		$carpark_list = $server->getCollection();

		$json_response = array();
		foreach($carpark_list as $carpark)
		{
			// $json_response[$carpark->getId()] = array();
			// $json_response[$carpark->getId()]
		}


		echo "<pre>";
		print_r(json_encode($server->getCollection()));
		echo "</pre>";


		echo "<pre>";
		echo print_r($server->getCollection());
		echo "</pre>";

		/*
		if($_SERVER['REQUEST_METHOD'] == 'POST')
		{
			switch ($_POST['Action']) {
				case 'GET_ALL':
					# code...
					break;
				
				default:
					# code...
					break;
			}
		}
		*/
	}

?>
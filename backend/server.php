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
			$location_json = array();
			$rates_json = array();
			
			$location = $carpark->getLocation();
			$location_json['longitude'] = $location->getLongtitude();
			$location_json['latitude'] = $location->getLatitude();
			$car_json['GPS'] = $location_json;


			$rate_dict = $carpark->getRates();

			foreach ($rate_dict as $dayType => $rates) {

				foreach($rates as $index => $rate)
				{
					$rate_json = array();
					$rate_json['startTime'] = $rate->getStartTime();
					$rate_json['endTime'] = $rate->getEndTime();
					$rate_json['prices'] = explode(',',$rate->getPrices());

					if(array_key_exists($dayType, $rates_json))
					{
						$temp = $rates_json[$dayType];
						array_push($temp, $rate_json);
						$rates_json[$dayType] = $temp;
					}
					else
					{
						$rates_json[$dayType] = array($rate_json);
					}
				}
			}

			$json_response[$carpark->getId()] = array(
					"name" => $carpark->getName(),
					"avaliableLots" => $carpark->getAvaliableLots(),
					"Rates" => $rates_json,
					"GPS" => $location_json
				);

		}


		echo "<pre>";
		echo print_r($json_response);
		echo "</pre>";


		// echo "<pre>";
		// echo print_r($server->getCollection());
		// echo "</pre>";

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
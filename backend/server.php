<?php


	
	$response = array();

	$trigger = 'GET_CARPARKS';
	switch ($trigger) {
	//switch ($_POST['Action']) {
		case 'GET_CARPARKS':
			require_once 'ServerCarparkCollection.php';
			require_once 'config.php';
			if (mysqli_connect_errno())
			{
				error_log("Failed to connect to MySQL: " . mysqli_connect_error());
				$response['Status'] = 'ERROR';
				$response['Message'] = "Failed to connect to MySQL: " . mysqli_connect_error();
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

				$response['Status'] = 'OK';
				$response['Data'] = $json_response;
			}
			break;
		case 'GET_LOTS':
			$curl = curl_init();

			curl_setopt_array($curl, array(
				CURLOPT_URL => "http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailability",
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_ENCODING => "",
				CURLOPT_MAXREDIRS => 10,
				CURLOPT_TIMEOUT => 30,
				CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
				CURLOPT_CUSTOMREQUEST => "GET",
				CURLOPT_HTTPHEADER => array(
					"accept: application/json",
					"accountkey: B95oeRRBRMWqBcYOmp72Gg==",
					"cache-control: no-cache",
					"postman-token: 0ca4b32e-c2b8-60db-05ed-afacddb55efe"
					),
				));

			$query_response = curl_exec($curl);
			$err = curl_error($curl);

			curl_close($curl);

			if ($err) {
				error_log("cURL Error #:" . $err);
				$response['Status'] = 'ERROR';
				$response['Data'] = "cURL Error #:" . $err;
			} else {
				$response_body = json_decode($query_response);
				$data = $response_body->value;
				$output = array();
				foreach ($data as $index => $carpark) {
					$output[$carpark->CarParkID] = $carpark->Lots;
				}

				$response['Status'] = 'OK';
				$response['Data'] = $output;
			}
			break;
		default:
			$response['Status'] = 'ERROR';
			$response['Data'] = "INVALID OPTION";
			break;
	}

	echo json_encode($response);


		// echo "<pre>";
		// echo print_r($json_response);
		// echo "</pre>";

		// echo "<pre>";
		// echo print_r($server->getCollection());
		// echo "</pre>";
	

?>
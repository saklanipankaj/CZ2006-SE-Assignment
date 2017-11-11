<?php

	require_once 'DAO.php';
	require_once 'entities/Carpark.php';	
	require_once 'entities/Rate.php';
	require_once 'entities/Location.php';

	class ServerCarparkCollection implements DAO
	{
		private $dbhost;
		private $dbuser;
		private $dbname;
		private $dbpass;
		private $port;

		public function __construct($dbhost, $dbuser, $dbname, $pass, $port)
		{
			$this->dbhost = $dbhost;
			$this->dbuser = $dbuser;
			$this->dbname = $dbname;
			$this->pass = $pass;
			$this->port = $port;
		}

		private function get_connection()
		{
			$dbhost = 'localhost';
			$dbuser = 'root';
			$dbname = 'parkingbuddy';
			$dbpass = '';
			$port = 3306;

					//Establish Connection with the Database
			$conn=mysqli_connect($dbhost,$dbuser,$dbpass,$dbname, $port);
			if($conn->connect_error) {
				die("Connection failed: " . $conn->connect_error);
			}
			return $conn;
		}

		public function getCollection() : array
		{
			$conn = $this->get_connection();

			$carpark_sql = "SELECT carparks.id AS 'carpark_id',`name`, `avaliablelots`, `location`, locations.id AS 'location_id', Locations.latitude, Locations.longtitude FROM carparks INNER JOIN Locations ON carparks.location = Locations.id";

			$result = mysqli_query($conn, $carpark_sql);

			if(!$result)
			{
				die('Could not get data: ' . mysqli_error($this->conn));
			}

			$rates_sql = "SELECT rates.id AS 'rate_id', rates.startTime, rates.endTime, rates.prices, rates.dayType FROM `rates` INNER JOIN carparks ON rates.carpark = carparks.id WHERE carparks.id = ";

			$carpark_list = array();
			while($carpark_row = mysqli_fetch_array($result, MYSQLI_ASSOC))
			{

				//$list[] = 
				$carpark_id = $carpark_row['carpark_id'];
				
				$rates_sql = $rates_sql . $carpark_id;

				$rates_result = mysqli_query($conn, $rates_sql);

				$rates_dict = array();
				while($rates_row = mysqli_fetch_array($rates_result, MYSQLI_ASSOC))
				{

					$rate = new Rate($rates_row['startTime'], $rates_row['endTime'], $rates_row['prices']);

					if(array_key_exists($rates_row['dayType'], $rates_dict))
					{
						$temp = $rates_dict[$rates_row['dayType']];
						array_push($temp, $rate);
						$rates_dict[$rates_row['dayType']] = $temp;
					}
					else
					{
						$rates_dict[$rates_row['dayType']] = array($rate);
					}
				}

				$location = new Location($carpark_row['location_id'], $carpark_row['latitude'], $carpark_row['longtitude']);
				$carpark = new Carpark($carpark_row['carpark_id'],$carpark_row['name'],$carpark_row['avaliablelots'], $location, $rates_dict); 

				$carpark_list[] = $carpark;

			}

			mysqli_close($conn);

			return $carpark_list;
		}

		public function add(object $object) : boolean
		{

			// if($object instanceof Carpark)
			// {
			// 	$carpark = (Carpark)$object;
			// }

			$conn = $this->get_connection();

			#Get Location in Carpark
			$location_id = $object->getLocation()->getId();

			#Get Carpark Vars
			$name = $object->getName();
			$avaliablelots = $object->getAvaliableLots();


			#No sanitization
			$rates = $object->getRates();
			#Get Rate Vars

			// echo "<pre>";
			// print_r($object);
			// print($name);
			// echo "</pre>";

			$carpark_sql = "INSERT INTO Carparks(name,avaliablelots,location) VALUES ('$name','$avaliablelots','$location_id')" ;

			$result = mysqli_query($conn, $carpark_sql);

			if(!$result)
			{
			 	die('Could not get data: ' . mysqli_error($conn));
			}
			$carpark_id = mysqli_insert_id($conn);

			
			foreach ($rates as $dayType => $rates_list) {
		
				foreach($rates_list as $rate)
				{					

					$startTime = $rate->getStartTime();
					$endTime = $rate->getEndTime();
					$prices = $rate->getPrices();
					$rates_sql = "INSERT INTO Rates(startTime, endTime, prices, dayType,carpark) VALUES('$startTime', '$endTime', '$prices', '$dayType', '$carpark_id')";
					$result = mysqli_query($conn, $rates_sql);
					if(!$result)
					{
						die('Could not get data: ' . mysqli_error($conn));
					}

				}
			}

			return true;

		}

		public function delete(object $object) : boolean
		{

			$conn = $this->get_connection();
			$carpark = $object;

			$id = $object->getId();
			$carpark_sql = "DELETE FROM Carparks WHERE ID = '$id'";
			$rates_sql = "DELETE FROM Rates WHERE carpark = '$id'";

			$retval = mysqli_query($conn, $rates_sql);
			if(!$retval)
			{
				#Failed to delete rates object before carpark object, could not delete carpark
				die('Could not get data 1: ' . mysqli_error($conn));
				return false;
			}

			$retval = mysqli_query($conn, $carpark_sql);
			if(!$retval)
			{
				#Failed to delete carpark object
				die('Could not get data 2: ' . mysqli_error($conn));
				return false;
			}

			mysqli_close($conn);

			return true;

		}

		public function edit(object $old, object $new) : boolean
		{
			if($this->delete($old))
			{
				return $this->add($new);
			}
			else
			{
				return false;
			}
		}

		public function getAddCarparkList(string $addr) : array
		{
			$conn = $this->get_connection();

			$carpark_sql = "SELECT carparks.id AS 'carpark_id',`name`, `avaliablelots`, `location`, locations.id AS 'location_id', Locations.latitude, Locations.longtitude FROM carparks INNER JOIN Locations ON carparks.location = Locations.id 
			WHERE carparks.name LIKE '%$addr%'";

			print($carpark_sql);
			$result = mysqli_query($conn, $carpark_sql);

			if(!$result)
			{
				die('Could not get data: ' . mysqli_error($conn));
			}

			$rates_sql = "SELECT rates.id AS 'rate_id', rates.startTime, rates.endTime, rates.prices, rates.dayType FROM `rates` INNER JOIN carparks ON rates.carpark = carparks.id WHERE carparks.id = ";

			$carpark_list = array();
			while($carpark_row = mysqli_fetch_array($result, MYSQLI_ASSOC))
			{

				//$list[] = 
				$carpark_id = $carpark_row['carpark_id'];
				
				$rates_sql = $rates_sql . $carpark_id;

				$rates_result = mysqli_query($conn, $rates_sql);

				$rates_dict = array();
				while($rates_row = mysqli_fetch_array($rates_result, MYSQLI_ASSOC))
				{
					$rate = new Rate($rates_row['startTime'], $rates_row['endTime'], $rates_row['prices']);

					if(array_key_exists($rates_row['dayType'], $rates_dict))
					{
						$temp = $rates_dict[$rates_row['dayType']];
						array_push($temp, $rate);
						$rates_dict[$rates_row['dayType']] = $temp;
					}
					else
					{
						$rates_dict[$rates_row['dayType']] = array($rate);
					}
				}

				$location = new Location($carpark_row['location_id'], $carpark_row['latitude'], $carpark_row['longtitude']);
				$carpark = new Carpark($carpark_row['carpark_id'],$carpark_row['name'],$carpark_row['avaliablelots'], $location, $rates_dict); 

				$carpark_list[] = $carpark;

			}

			mysqli_close($conn);

			return $carpark_list;
		}

		public function getNameCarparkList(string $name) : array
		{
			$conn = $this->get_connection();

			$carpark_sql = "SELECT carparks.id AS 'carpark_id',`name`, `avaliablelots`, `location`, locations.id AS 'location_id', Locations.latitude, Locations.longtitude FROM carparks INNER JOIN Locations ON carparks.location = Locations.id 
			WHERE carparks.name LIKE '%$name%'";

			print($carpark_sql);
			$result = mysqli_query($conn, $carpark_sql);

			if(!$result)
			{
				die('Could not get data: ' . mysqli_error($conn));
			}

			$rates_sql = "SELECT rates.id AS 'rate_id', rates.startTime, rates.endTime, rates.prices, rates.dayType FROM `rates` INNER JOIN carparks ON rates.carpark = carparks.id WHERE carparks.id = ";

			$carpark_list = array();
			while($carpark_row = mysqli_fetch_array($result, MYSQLI_ASSOC))
			{

				//$list[] = 
				$carpark_id = $carpark_row['carpark_id'];
				
				$rates_sql = $rates_sql . $carpark_id;

				$rates_result = mysqli_query($conn, $rates_sql);

				$rates_dict = array();
				while($rates_row = mysqli_fetch_array($rates_result, MYSQLI_ASSOC))
				{
					$rate = new Rate($rates_row['startTime'], $rates_row['endTime'], $rates_row['prices']);

					if(array_key_exists($rates_row['dayType'], $rates_dict))
					{
						$temp = $rates_dict[$rates_row['dayType']];
						array_push($temp, $rate);
						$rates_dict[$rates_row['dayType']] = $temp;
					}
					else
					{
						$rates_dict[$rates_row['dayType']] = array($rate);
					}
				}

				$location = new Location($carpark_row['location_id'], $carpark_row['latitude'], $carpark_row['longtitude']);
				$carpark = new Carpark($carpark_row['carpark_id'],$carpark_row['name'],$carpark_row['avaliablelots'], $location, $rates_dict); 

				$carpark_list[] = $carpark;

			}

			mysqli_close($conn);

			return $carpark_list;
		}

		public function getCarpark(int $id) : Carpark
		{

			$conn = $this->get_connection();
			$carpark_sql = "SELECT carparks.id AS 'carpark_id',`name`, `avaliablelots`, `location`, locations.id AS 'location_id', Locations.latitude, Locations.longtitude FROM carparks INNER JOIN Locations ON carparks.location = Locations.id 
			WHERE carparks.id = '$id'";

			$result = mysqli_query($conn, $carpark_sql);

			if(!$result)
			{
				die('Could not get data: ' . mysqli_error($conn));
			}

			$rates_sql = "SELECT rates.id AS 'rate_id', rates.startTime, rates.endTime, rates.prices, rates.dayType FROM `rates` INNER JOIN carparks ON rates.carpark = carparks.id WHERE carparks.id = ";

			if($carpark_row = mysqli_fetch_array($result, MYSQLI_ASSOC))
			{

				//$list[] = 
				$carpark_id = $carpark_row['carpark_id'];
				
				$rates_sql = $rates_sql . $carpark_id;

				$rates_result = mysqli_query($conn, $rates_sql);

				$rates_dict = array();
				while($rates_row = mysqli_fetch_array($rates_result, MYSQLI_ASSOC))
				{
					$rate = new Rate($rates_row['startTime'], $rates_row['endTime'], $rates_row['prices']);

					if(array_key_exists($rates_row['dayType'], $rates_dict))
					{
						$temp = $rates_dict[$rates_row['dayType']];
						array_push($temp, $rate);
						$rates_dict[$rates_row['dayType']] = $temp;
					}
					else
					{
						$rates_dict[$rates_row['dayType']] = array($rate);
					}
				}

				$location = new Location($carpark_row['location_id'], $carpark_row['latitude'], $carpark_row['longtitude']);
				$carpark = new Carpark($carpark_row['carpark_id'],$carpark_row['name'],$carpark_row['avaliablelots'], $location, $rates_dict); 


			}

			mysqli_close($conn);

			return $carpark;
		}

		public function checkCarparkExists(string $name) : boolean
		{
			$conn = $this->get_connection();
			$carpark_sql = "SELECT carparks.id AS 'carpark_id',`name`, `avaliablelots`, `location`, locations.id AS 'location_id', Locations.latitude, Locations.longtitude FROM carparks INNER JOIN Locations ON carparks.location = Locations.id WHERE carparks.id = " . $id;

			$result = mysqli_query($conn, $carpark_sql);

			if(!$result)
			{
				die('Could not get data: ' . mysqli_error($conn));
			}

			$rates_sql = "SELECT rates.id AS 'rate_id', rates.startTime, rates.endTime, rates.prices, rates.dayType FROM `rates` INNER JOIN carparks ON rates.carpark = carparks.id WHERE carparks.id = ";

			$carpark_list = array();
			while($carpark_row = mysqli_fetch_array($result, MYSQLI_ASSOC))
			{

				//$list[] = 
				$carpark_id = $carpark_row['carpark_id'];
				
				$rates_sql = $rates_sql . $carpark_id;

				$rates_result = mysqli_query($conn, $rates_sql);

				$rates_dict = array();
				while($rates_row = mysqli_fetch_array($rates_result, MYSQLI_ASSOC))
				{
					$rate = new Rate($rates_row['startTime'], $rates_row['endTime'], $rates_row['prices']);

					if(array_key_exists($rates_row['dayType'], $rates_dict))
					{
						$temp = $rates_dict[$rates_row['dayType']];
						array_push($temp, $rate);
						$rates_dict[$rates_row['dayType']] = $temp;
					}
					else
					{
						$rates_dict[$rates_row['dayType']] = array($rate);
					}
				}

				$location = new Location($carpark_row['location_id'], $carpark_row['latitude'], $carpark_row['longtitude']);
				$carpark = new Carpark($carpark_row['carpark_id'],$carpark_row['name'],$carpark_row['avaliablelots'], $location, $rates_dict); 

				$carpark_list[] = $carpark;

			}

			mysqli_close($conn);

			return $carpark;
		}


	}


?>
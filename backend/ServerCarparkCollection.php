<?php

	require_once 'DAO.php';
	require_once 'entities/Carpark.php';	
	require_once 'entities/Rate.php';
	require_once 'Location.php';

	class ServerCarparkCollection implements DAO
	{
		private $conn;

		public function __construct($conn)
		{
			$this->conn = $conn;
		}

		public function getCollection()
		{

			$sql = "SELECT * FROM carparks";

			$result = mysqli_query($this->conn, $sql);

			if(!$result)
			{
				die('Could not get data: ' . mysqli_error($this->conn));
			}

			$i = 0;
			//Iterate through the result set
			$list = array();
			while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
			{
				$location = new Location($row['location.id'], $row['location.langtitude'], $row['location.longitude'];
				$rates = new Rates
				$carpark = new Carpark($row['id'],$row['name'],$row['avaliablelots'], $location); 
				$list[] = 

				$i++;
			}
			
			mysqli_close($this->conn);

			return $returnarray;
		}

		public function add(object $object)
		{
			#No sanitization
			$rates = $carpark->getRates();

			#Get Location in Carpark
			$location_id = $carpark->getLocation()->getId();

			#Get Carpark Vars
			$name = $car->getName();
			$avaliablelots = $carpark->getAvaliableLots();

			#Get Rate Vars
			$startTime = $rates->getStartTime();
			$endTime = $rates->getEndTime();
			$prices = $rates->getPrices();
			$carpark = $rates->getId();

			$carpark_sql = "INSERT INTO Carparks(name,avaliablelots,location) VALUES ('$name','$avaliablelots','$location_id')" ;
			$rates_sql = "INSERT INTO Rates(startTime, endTime, prices, dayType,carpark) VALUES('$startTime', '$endTime', '$prices', '$dayType', $carpark_id)";
			$result = mysqli_query($this->conn, $carpark_sql);
			if(!$result)
			{
				return false;
			}

			$result = mysqli_query($this->conn, $rates_sql)
			if(!$result)
			{
				return false;
			}

			return true;

		}

		public function delete(object $object)
		{
			$carpark = $object;

			$id = $carpark->getId();
			$rates_sql = "DELETE FROM Carparks WHERE ID = $id";
			$carpark_sql = "DELETE FROM Rates WHERE carpark = $id"

			$retval = mysqli_query($conn, $rates_sql)
			if(!$retval)
			{
				#Failed to delete rates object before carpark object, could not delete carpark
				return false;
			}

			$retval = mysqli_query($conn, $carpark_sql)
			if(!$retval)
			{
				#Failed to delete carpark object
				return false
			}

			mysqli_close($conn);

			return true;

		}

		public function edit(object $old, object $new)
		{
			$carpark_sql = "UPDATE carparks SET "
		}

		public function setCarparkList()
		{

		}

		public function getAddCarparkList(string $addr)
		{

		}

		public function getNameCarparkList()
		{

		}

		public function getCarpark()
		{

		}

		public function checkCarparkExists(string $name)
		{

		}

	}


?>
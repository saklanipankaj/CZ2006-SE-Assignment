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
				//Store current row into array
				$returnarray[$i] = $row;
					//Increment counter
				$i++;
			}
			
			mysqli_close($this->conn);

			return $returnarray;
		}

		public function add(Carpark $car)
		{
			#No sanitization
			$rates = $car->getRates();

			$location_id = $car->getLocation()->getId();

			$name = $car->getName();
			$avaliablelots = $car->getAvaliableLots();

			$carpark_sql = "INSERT INTO Carparks(name,avaliablelots,location) VALUES ('$name','$avaliablelots','$location_id')" ;
			$rates_sql = "INSERT INTO Rates(startTime, endTime, prices, dayType,carpark) VALUES('$startTime', '$endTime', '$prices', '$dayType', $carpark)";
			$result = mysqli_query($this->conn, $sql);
			return 
		}

		public function delete(Carpark $car)
		{
			$id = $car->getId();
			$sql = "DELETE FROM Carparks WHERE ID = $id";
		}

		public function edit($old, $new)
		{
			$carpark_sql = "UPDATE carparks SET "
		}

		public function setCarparkList()
		{

		}

		public function getAddCarparkList(string addr)
		{

		}

		public function getNameCarparkList()
		{

		}

		public function getCarpark()
		{

		}

		public function checkCarparkExists(name: String)
		{

		}

	}


?>
<?php

	require_once 'DAO.php';
	require_once 'entities/Admin.php';	

	class AdminCollection implements DAO
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

			$admin_sql = "SELECT * FROM admin"

			$result = mysqli_query($conn, $carpark_sql);

			if(!$result)
			{
				die('Could not get data: ' . mysqli_error($this->conn));
			}


			$admin_list = array();
			while($carpark_row = mysqli_fetch_array($result, MYSQLI_ASSOC))
			{
				$admin = new Admin($admin_row['username'], $admin_row['password']);
			}

			mysqli_close($conn);

			return $admin_list;
		}

		public function add(object $object) : boolean
		{

			$password = $object->getUsername();
			$username = $object->getPassword();

			$carpark_sql = "INSERT INTO Admin(username,password) VALUES ('$username','$password')" ;

			$result = mysqli_query($conn, $carpark_sql);

			if(!$result)
			{
			 	die('Could not get data: ' . mysqli_error($conn));
			}

			return true;

		}

		public function delete(object $object) : boolean
		{

			$conn = $this->get_connection();
			$carpark = $object;

			$id = $object->getId();
			$carpark_sql = "DELETE FROM Admin WHERE username = '$id'";

			$retval = mysqli_query($conn, $rates_sql);
			if(!$retval)
			{
				#Failed to delete rates object before carpark object, could not delete carpark
				die('Could not get data 1: ' . mysqli_error($conn));
				return false;
			}

			mysqli_close($conn);

			return true;

		}

		public function edit(object $old, object $new) : boolean
		{

			$password = $new->getPassword();
			$username = $old->getUsername();

			$sql = "UPDATE Admin SET password = '$password' WHERE username = '$username'"

			$retval = mysqli_query($conn, $rates_sql);
			if(!$retval)
			{
				#Failed to delete rates object before carpark object, could not delete carpark
				die('Could not get data 1: ' . mysqli_error($conn));
				return false;
			}

			mysqli_close($conn);

			return true;

		}

	}


?>
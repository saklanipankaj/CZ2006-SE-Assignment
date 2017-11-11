<?php

	require_once 'DAO.php';
	require_once 'entities/Feedback.php';	

	class ServerFeedbackCollection implements DAO
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

			$carpark_sql = "SELECT * FROM feedbacks"

			$result = mysqli_query($conn, $carpark_sql);

			if(!$result)
			{
				die('Could not get data: ' . mysqli_error($this->conn));
			}

			$feedback_list = array();
			while($feedback_row = mysqli_fetch_array($result, MYSQLI_ASSOC))
			{


				$feedback = new Feedback(
					$feedback_row['id'],
					$feedback_row['title'],
					$feedback_row['message']
					$feedback_row['email'],
					$feedback_row['contactNo']
					$feedback_row['currentStatus'],
					$feedback_row['carparkName']
				);
				$feedback_list[] = $feedback;
			}

			mysqli_close($conn);

			return $feedback_list;
		}

		public function add(object $object) : boolean
		{

			$conn = $this->get_connection();

			#Get Carpark Vars
			$title = $object->getTitle();
			$category = $object->getCategory();
			$name = $object->getName();
			$message = $object->getMessage();
			$email = $object->getEmail();
			$contactNo = $object->getContactNo();
			$currentStatus = $object->getCurrentStatus();
			$carparkName = $object->getCarparkName();

			$feedback_sql = "INSERT INTO Feedbacks(title,category,name,message,email,contactNo,currentStatus,carparkName) VALUES ('$title','$category','$name','$message','$email','$contactNo','$currentStatus','$carparkName')";

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
			$feedback = $object;

			$id = $object->getId();
			$carpark_sql = "DELETE FROM Feedbacks WHERE ID = '$id'";

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
			if($this->delete($old))
			{
				return $this->add($new);
			}
			else
			{
				return false;
			}
		}



		public function getFeedback(int $id) : Feedback
		{

			$conn = $this->get_connection();
			$carpark_sql = "SELECT * FROM feedbacks WHERE id = '$id"

			$result = mysqli_query($conn, $carpark_sql);

			if(!$result)
			{
				die('Could not get data: ' . mysqli_error($conn));
			}

			if($feedback_row = mysqli_fetch_array($result, MYSQLI_ASSOC))
			{

				$feedback = new Feedback(
					$feedback_row['id'],
					$feedback_row['title'],
					$feedback_row['message']
					$feedback_row['email'],
					$feedback_row['contactNo']
					$feedback_row['currentStatus'],
					$feedback_row['carparkName']
				);

			}

			mysqli_close($conn);

			return $feedback;
		}

		public function setClosed(int $id) : boolean
		{
			$sql = "UPDATE Feedbacks SET currentStatus = 'Closed' WHERE id = '$id'"

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
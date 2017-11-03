<?php

	interface DAO
	{
		public function getCollection();
		public function add($object);
		public function delete($object);
		public function edit($old, $new);
	}

?>
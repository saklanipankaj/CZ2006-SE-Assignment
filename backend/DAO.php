<?php

	interface DAO
	{
		public function getCollection();
		public function add(object $object);
		public function delete(object $object);
		public function edit(object $old,object $new);
	}

?>
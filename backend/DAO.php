<?php

	interface DAO
	{
		public function getCollection() : array;
		public function add(object $object) : boolean;
		public function delete(object $object) : boolean;
		public function edit(object $old,object $new) : boolean;
	}

?>
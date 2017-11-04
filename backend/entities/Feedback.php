<?php

/**
  *This class implements the feedback entity
  *with attribute title, category, message, email,
  *contactNo, currentStatus and id
  *
  */

require_once('Object.php');

class Feedback extends Object{
  /**
   * Represents a Feedback.
   * Feedback entity attribute are declared in the constructor
   * @constructor
   */

    private $id;
    private $title;
    private $category;
    private $message;
    private $email;
    private $contactNo;
    private $currentStatus;

    public function __construct() {
        $this->id = 0;
        $this->title = null;
        $this->category = null;
        $this->message = null;
        $this->email = null;
        $this->contactNo = null;
        $this->currentStatus = null;
    }

    public function __getTitle() {
        return $this->title;
    }
    /**
     *
     * @param {string} title - title of feedback
     */
    public function setTitle($title) {
        $this->title = $title;
    }
    
    public function getCategory() {
        return $this->category;
    }
    /**
     *
     * @param {string} category - category of feedback
     */
    public function setCategory($category) {
        $this->category = $category;
    }

    public function getMessage() {
        return $this->message;
    }
    /**
     *
     * @param {string} message - message in the feedback
     */
    public function setMessage($message) {
        $this->message = $message;
    }

    public function getEmail() {
        return $this->$email;
    }
    /**
     *
     * @param {string} email - email of the person who send the feedback
     */
    
    public function setEmail($email) {
        $this->email = $email;
    }


    public function getContactNo() {
        return $this->contactNo;
    }
    /**
     *
     * @param {string} contactNo - contactNo of the person who send the feedback
     */
    
    public function setContactNo(contactNo) {
        $this->contactNo = $contactNo;
    }
    
    public function getCurrentStatus() {
        return $this->currentStatus;
    }
    /**
     *
     * @param {string} currentStatus - status of feedback
     */
    public function setCurrentStatus($currentStatus) {
        $this->currentStatus = currentStatus;
    }
    
    public function getId() {
        return $this->id;
    }
    /**
     *
     * @param {number} id - id to identify each feedback
     */
    public setId($id) {
        $this->id = $id;
    }

}

?>
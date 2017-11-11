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
    private $carparkName;

    public function __construct(int $id = NULL,string $title = NULL,FeedbackType $category = NULL,string $message = NULL,string $email = NULL,string $contactNo,FeedbackStatus $currentStatus,string $carparkName) {
        $this->id = $id;
        $this->title = $title;
        $this->category = $category;
        $this->message = $message;
        $this->email = $email;
        $this->contactNo = $contactNo;
        $this->currentStatus = $currentStatus;
        $this->carparkName = $carparkName;
    }

    public function getId() : int
    {
        return $this->id;
    }

    public setId(int $id) : void
    {
        $this->id = $id;
    }

    public function __getTitle() : string
    {
        return $this->title;
    }

    public function setTitle(string $title) : void
    {
        $this->title = $title;
    }
    
    public function getCategory() : FeedbackType
    {
        return $this->category;
    }

    public function setCategory(FeedbackType $category) : void
    {
        $this->category = $category;
    }

    public function getMessage() : string
    {
        return $this->message;
    }

    public function setMessage(string $message) : void
    {
        $this->message = $message;
    }

    public function getEmail() : string
    {
        return $this->$email;
    }

    public function setEmail(string $email) : void
    {
        $this->email = $email;
    }

    public function getContactNo() : string
    {
        return $this->contactNo;
    }

    public function setContactNo(string $contactNo) : void
    {
        $this->contactNo = $contactNo;
    }
    
    public function getCurrentStatus() : FeedbackStatus
    {
        return $this->currentStatus;
    }

    public function setCurrentStatus(FeedbackStatus $currentStatus) : void
    {
        $this->currentStatus = $currentStatus;
    }
}

?>
<?php

class Dashboard extends Account_Controller {

	public function __construct(){
		parent::__construct();
	}
 
	public function index()
	{
		echo 'Dashboard';
	}
}
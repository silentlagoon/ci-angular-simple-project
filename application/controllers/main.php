<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller
{
    public function __construct()
    {
        parent:: __construct();
        $this->layout->setLayout('/layouts/main');
    }

    public function index()
    {
        $this->layout->view('welcome_message');
    }
}

/* End of controller User */
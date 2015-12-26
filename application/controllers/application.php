<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Application extends CI_Controller
{
    public function __construct()
    {
        parent:: __construct();
    }

    public function create()
    {
        $request = json_decode(trim(file_get_contents('php://input')), true);
        $this->load->model('applications_model');

        $application = array(
            'email' => $request['email'],
            'char_name' => $request['charName'],
            'serv_name' => $request['servName']
        );
        $result = $this->applications_model->create($application);

        if($result) {
            $response = array(
                'text' => 'Your application was accepted',
                'application' => $application
            );
            $status = 200;
        } else {
            $response = array(
                'text' => 'An error occured please try again later',
            );
            $status = 400;
        }

        $this->output->set_content_type('application/json');
        $this->output->set_status_header($status);
        $this->output->set_output(json_encode($response));
    }
}

/* End of controller User */